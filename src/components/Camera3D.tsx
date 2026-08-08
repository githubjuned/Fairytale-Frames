import React, { useRef, useState, useEffect, Suspense, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  Environment,
  ContactShadows,
  Float,
  OrbitControls,
} from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Camera3DProps {
  className?: string;
  onSelectFeature?: (feature: string) => void;
}

// Model paths to attempt in order
const MODEL_PATHS = [
  '/models/DSLR.glb',
  '/DSLR.glb',
  '/models/dslr.glb',
  '/camera.glb',
];

// Helper textures for procedural DSLR fallback
function createTextureCanvas(
  draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void,
  w = 512,
  h = 256
): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  if (ctx) draw(ctx, w, h);
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

// 1. Canon Logo
const canonLogoTex = createTextureCanvas((ctx, w, h) => {
  ctx.fillStyle = '#121212';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 72px "Times New Roman", Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = 'rgba(255,255,255,0.6)';
  ctx.shadowBlur = 10;
  ctx.fillText('Canon', w / 2, h / 2);
}, 512, 128);

// 2. EOS 5D Badge
const eosBadgeTex = createTextureCanvas((ctx, w, h) => {
  ctx.fillStyle = '#18181b';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '900 48px "Arial Black", sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('EOS', 20, 60);
  ctx.font = 'bold 58px "Arial", sans-serif';
  ctx.fillStyle = '#E4E4E7';
  ctx.fillText('5D', 20, 130);
  ctx.font = '600 28px "Arial", sans-serif';
  ctx.fillStyle = '#A1A1AA';
  ctx.fillText('Mark IV', 20, 180);
}, 256, 256);

// 3. LCD Screen
const lcdMenuTex = createTextureCanvas((ctx, w, h) => {
  ctx.fillStyle = '#111113';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#CC1111';
  ctx.fillRect(0, 0, w, 44);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 18px sans-serif';
  ctx.fillText('📷   AF   ▶   ⚙   ★', 20, 28);
  ctx.fillStyle = '#222226';
  ctx.fillRect(0, 44, w, 30);
  ctx.fillStyle = '#AAAAAA';
  ctx.font = 'bold 13px monospace';
  ctx.fillText('SHOOT4: Movie 4K 60FPS', 20, 64);

  const items = [
    { label: 'AF mode', val: 'Dual Pixel CMOS' },
    { label: 'Movie rec size', val: '3840x2160 [ALL-I]' },
    { label: 'Picture Style', val: 'C-Log / Neutral' },
    { label: 'ISO Speed', val: '100 - 32000' },
    { label: 'Audio Rec', val: 'Manual -12dB' },
  ];

  let y = 98;
  items.forEach((item, i) => {
    if (i === 0) {
      ctx.fillStyle = '#880000';
      ctx.fillRect(10, y - 18, w - 20, 32);
      ctx.fillStyle = '#FFFFFF';
    } else {
      ctx.fillStyle = '#CCCCCC';
    }
    ctx.font = '14px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(item.label, 20, y);
    ctx.textAlign = 'right';
    ctx.fillText(item.val, w - 20, y);
    y += 38;
  });
}, 512, 384);

// 4. Lens Front Markings
const lensTextTex = createTextureCanvas((ctx, w, h) => {
  ctx.fillStyle = '#080808';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 36px "Arial", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('CANON ZOOM LENS EF 24-105mm 1:4 L IS II USM   Ф77mm', w / 2, h / 2);
}, 1024, 128);

// 5. Rubber Grip Texture
const rubberBumpTex = createTextureCanvas((ctx, w, h) => {
  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#ffffff';
  for (let x = 0; x < w; x += 6) {
    for (let y = 0; y < h; y += 6) {
      ctx.fillRect(x + 1, y + 1, 2, 2);
    }
  }
}, 128, 128);
rubberBumpTex.wrapS = THREE.RepeatWrapping;
rubberBumpTex.wrapT = THREE.RepeatWrapping;
rubberBumpTex.repeat.set(6, 6);

// --- PROCEDURAL DSLR FALLBACK MODEL ---
function ProceduralDslrCamera({ explode = 0, apertureVal = 1.4 }: { explode: number; apertureVal: number }) {
  const bodyMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: 0x18181c,
        roughness: 0.35,
        metalness: 0.65,
      }),
    []
  );

  const rubberMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: 0x0f0f12,
        roughness: 0.85,
        metalness: 0.1,
        bumpMap: rubberBumpTex,
        bumpScale: 0.04,
      }),
    []
  );

  const chromeMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: 0xe4e4e7,
        roughness: 0.15,
        metalness: 0.95,
      }),
    []
  );

  const redRingMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: 0xdc2626,
        roughness: 0.2,
        metalness: 0.8,
        emissive: 0x550000,
      }),
    []
  );

  const opticalGlassMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: 0x1e1b4b,
        metalness: 0.1,
        roughness: 0.05,
        transmission: 0.92,
        ior: 1.52,
        reflectivity: 0.9,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
      }),
    []
  );

  const logoMat = useMemo(
    () => new THREE.MeshBasicMaterial({ map: canonLogoTex, transparent: true }),
    []
  );
  const badgeMat = useMemo(
    () => new THREE.MeshBasicMaterial({ map: eosBadgeTex, transparent: true }),
    []
  );
  const lcdMat = useMemo(
    () => new THREE.MeshBasicMaterial({ map: lcdMenuTex }),
    []
  );
  const lensTextMat = useMemo(
    () => new THREE.MeshBasicMaterial({ map: lensTextTex }),
    []
  );

  const explodeOffset = explode * 1.5;

  return (
    <group scale={1.1}>
      {/* CAMERA BODY */}
      <mesh castShadow receiveShadow material={bodyMat} position={[0, 0, -explodeOffset * 0.2]}>
        <boxGeometry args={[4.8, 3.4, 2.2]} />
      </mesh>

      {/* PENTAPRISM TOP HOUSING */}
      <mesh castShadow receiveShadow material={bodyMat} position={[0, 2.1 + explodeOffset * 0.3, -0.1]}>
        <cylinderGeometry args={[1.3, 1.8, 1.2, 4]} />
      </mesh>

      {/* CANON EMBOSSED LOGO */}
      <mesh position={[0, 2.1 + explodeOffset * 0.3, 1.02]}>
        <planeGeometry args={[2.0, 0.5]} />
        <primitive object={logoMat} attach="material" />
      </mesh>

      {/* HAND GRIP */}
      <mesh castShadow receiveShadow material={rubberMat} position={[1.8, -0.2, 0.4]}>
        <boxGeometry args={[1.1, 3.1, 1.8]} />
      </mesh>

      {/* SHUTTER BUTTON */}
      <mesh castShadow material={chromeMat} position={[1.8, 1.75, 0.6]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 24]} />
      </mesh>

      {/* MODE DIAL */}
      <mesh castShadow material={chromeMat} position={[-1.7, 1.8, -0.1]}>
        <cylinderGeometry args={[0.55, 0.55, 0.35, 32]} />
      </mesh>

      {/* EOS 5D BADGE */}
      <mesh position={[-1.7, 0.8, 1.11]}>
        <planeGeometry args={[1.0, 1.0]} />
        <primitive object={badgeMat} attach="material" />
      </mesh>

      {/* LENS BARREL ASSEMBLY */}
      <group position={[0, -0.1, 1.1 + explodeOffset]}>
        {/* Mount Ring */}
        <mesh castShadow material={chromeMat} position={[0, 0, 0.2]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1.85, 1.85, 0.2, 36]} />
        </mesh>

        {/* Main Lens Barrel */}
        <mesh castShadow receiveShadow material={bodyMat} position={[0, 0, 1.4]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1.95, 1.95, 2.2, 36]} />
        </mesh>

        {/* Zoom Rubber Ring */}
        <mesh castShadow material={rubberMat} position={[0, 0, 1.4]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1.97, 1.97, 1.4, 36]} />
        </mesh>

        {/* Focus Ring */}
        <mesh castShadow material={rubberMat} position={[0, 0, 2.8 + explodeOffset * 0.5]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1.98, 1.98, 1.2, 36]} />
        </mesh>

        {/* CANON L-SERIES RED RING */}
        <mesh material={redRingMat} position={[0, 0, 3.5 + explodeOffset * 0.7]}>
          <torusGeometry args={[1.99, 0.05, 16, 48]} />
        </mesh>

        {/* Front Filter Text Thread */}
        <mesh material={lensTextMat} position={[0, 0, 3.65 + explodeOffset * 0.8]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[2.02, 2.02, 0.2, 36]} />
        </mesh>

        {/* Dynamic Aperture Ring Blades */}
        <group position={[0, 0, 2.2 + explodeOffset * 0.4]}>
          {[...Array(8)].map((_, idx) => {
            const angle = (idx / 8) * Math.PI * 2;
            const apertureRadius = 0.5 + (apertureVal / 22) * 0.9;
            return (
              <mesh
                key={idx}
                position={[
                  Math.cos(angle) * apertureRadius,
                  Math.sin(angle) * apertureRadius,
                  0,
                ]}
                rotation={[0, 0, angle]}
              >
                <planeGeometry args={[0.8, 0.3]} />
                <meshStandardMaterial color="#111111" roughness={0.2} metalness={0.9} />
              </mesh>
            );
          })}
        </group>

        {/* Convex Front Glass Element */}
        <mesh material={opticalGlassMat} position={[0, 0, 3.7 + explodeOffset * 0.9]} rotation={[Math.PI / 2, 0, 0]}>
          <sphereGeometry args={[1.9, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.38]} />
        </mesh>
      </group>

      {/* REAR LCD SCREEN */}
      <mesh position={[-0.2, -0.2, -1.11 - explodeOffset * 0.3]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[3.6, 2.7]} />
        <primitive object={lcdMat} attach="material" />
      </mesh>
    </group>
  );
}

// --- CUSTOM GLB MODEL LOADER WITH AUTOMATIC FALLBACK ---
function DslrGlbModel({
  onLoadStatus,
  explode,
  apertureVal,
}: {
  onLoadStatus: (status: 'loaded' | 'procedural', modelName?: string) => void;
  explode: number;
  apertureVal: number;
}) {
  const [modelScene, setModelScene] = useState<THREE.Group | null>(null);
  const [attemptIndex, setAttemptIndex] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const loader = new THREE.FileLoader();
    loader.setResponseType('arraybuffer');

    const path = MODEL_PATHS[attemptIndex];
    loader.load(
      path,
      (data) => {
        if (cancelled) return;

        // Check if returned data is HTML (starts with '<', ASCII 60 / 0x3C)
        const uint8 = new Uint8Array(data as ArrayBuffer);
        if (uint8.length > 0 && uint8[0] === 0x3c) {
          if (attemptIndex < MODEL_PATHS.length - 1) {
            setAttemptIndex((prev) => prev + 1);
          } else {
            onLoadStatus('procedural');
          }
          return;
        }

        try {
          const gltfLoader = new GLTFLoader();
          gltfLoader.parse(
            data as ArrayBuffer,
            '',
            (gltf) => {
              if (cancelled) return;
              const scene = gltf.scene;
              const box = new THREE.Box3().setFromObject(scene);
              const size = box.getSize(new THREE.Vector3());
              const center = box.getCenter(new THREE.Vector3());
              const maxDim = Math.max(size.x, size.y, size.z);
              const scale = 7.5 / (maxDim || 1);

              scene.scale.setScalar(scale);
              scene.position.x = -center.x * scale;
              scene.position.y = -center.y * scale;
              scene.position.z = -center.z * scale;

              scene.traverse((child) => {
                if ((child as THREE.Mesh).isMesh) {
                  child.castShadow = true;
                  child.receiveShadow = true;
                }
              });

              setModelScene(scene);
              onLoadStatus('loaded', path);
            },
            () => {
              if (attemptIndex < MODEL_PATHS.length - 1) {
                setAttemptIndex((prev) => prev + 1);
              } else {
                onLoadStatus('procedural');
              }
            }
          );
        } catch {
          if (attemptIndex < MODEL_PATHS.length - 1) {
            setAttemptIndex((prev) => prev + 1);
          } else {
            onLoadStatus('procedural');
          }
        }
      },
      undefined,
      () => {
        if (attemptIndex < MODEL_PATHS.length - 1) {
          setAttemptIndex((prev) => prev + 1);
        } else {
          onLoadStatus('procedural');
        }
      }
    );

    return () => {
      cancelled = true;
    };
  }, [attemptIndex]);

  if (modelScene) {
    return <primitive object={modelScene} />;
  }

  return <ProceduralDslrCamera explode={explode} apertureVal={apertureVal} />;
}

// --- MAIN 3D SCENE CONTENT ---
function CameraSceneContent({
  lightingMode,
  explode,
  apertureVal,
  onLoadStatus,
  cameraRef,
}: {
  lightingMode: 'studio' | 'dramatic' | 'golden' | 'wireframe';
  explode: number;
  apertureVal: number;
  onLoadStatus: (status: 'loaded' | 'procedural', name?: string) => void;
  cameraRef: React.RefObject<THREE.Group | null>;
}) {
  const modelGroup = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  // Mouse Parallax + Gentle Float Response
  useFrame(() => {
    if (modelGroup.current) {
      const targetMouseX = mouse.x * 0.4;
      const targetMouseY = mouse.y * 0.3;

      modelGroup.current.rotation.y += (targetMouseX - modelGroup.current.rotation.y) * 0.05;
      modelGroup.current.rotation.x += (-targetMouseY - modelGroup.current.rotation.x) * 0.05;
    }
  });

  return (
    <>
      {/* Studio Lighting Rig */}
      <ambientLight
        intensity={
          lightingMode === 'dramatic'
            ? 0.4
            : lightingMode === 'golden'
            ? 0.9
            : 1.2
        }
      />

      {/* Key Light with Soft Shadows */}
      <directionalLight
        position={[8, 12, 10]}
        intensity={lightingMode === 'dramatic' ? 4.5 : lightingMode === 'golden' ? 2.5 : 3.5}
        color={lightingMode === 'golden' ? '#fbbf24' : '#ffffff'}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={25}
        shadow-bias={-0.0001}
      />

      {/* Cool Blue Rim / Backlight for Metallic Edges */}
      <directionalLight
        position={[-10, 8, -10]}
        intensity={lightingMode === 'dramatic' ? 3.8 : 2.0}
        color={lightingMode === 'golden' ? '#f59e0b' : '#38bdf8'}
      />

      {/* Multi-coating Lens Highlight Point Light */}
      <pointLight position={[0, 0, 6]} intensity={2.8} color="#a855f7" distance={10} />

      {/* HDRI Studio Environment Reflections */}
      <Environment preset={lightingMode === 'golden' ? 'sunset' : 'studio'} />

      {/* Main Floating Camera Container */}
      <group ref={cameraRef}>
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.6}>
          <group ref={modelGroup}>
            <DslrGlbModel
              onLoadStatus={onLoadStatus}
              explode={explode}
              apertureVal={apertureVal}
            />
          </group>
        </Float>
      </group>

      {/* Soft Contact Shadows Ground Plane */}
      <ContactShadows
        position={[0, -2.5, 0]}
        opacity={0.85}
        scale={14}
        blur={2.2}
        far={5}
        color="#000000"
      />
    </>
  );
}

// --- MAIN EXPORT COMPONENT ---
export const Camera3D: React.FC<Camera3DProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cameraGroupRef = useRef<THREE.Group>(null);

  const [lightingMode, setLightingMode] = useState<'studio' | 'dramatic' | 'golden' | 'wireframe'>('studio');
  const [explode, setExplode] = useState(0);
  const [apertureVal, setApertureVal] = useState(1.4);
  const [modelStatus, setModelStatus] = useState<{ status: 'loaded' | 'procedural'; path?: string }>({
    status: 'procedural',
  });
  const [scrollDegrees, setScrollDegrees] = useState(0);
  const [autoRotate, setAutoRotate] = useState(false);

  // GSAP ScrollTrigger Setup
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const progress = scrollY / maxScroll;

      if (cameraGroupRef.current && !autoRotate) {
        gsap.to(cameraGroupRef.current.rotation, {
          y: progress * Math.PI * 4,
          x: Math.sin(progress * Math.PI * 2) * 0.15,
          duration: 0.5,
          ease: 'power2.out',
        });
      }

      setScrollDegrees(Math.round((progress * 720) % 360));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [autoRotate]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[520px] sm:h-[620px] lg:h-[720px] bg-gradient-to-b from-[#09090b] via-[#121217] to-[#08080a] rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.95)] select-none ${className}`}
    >
      {/* 3D R3F Canvas */}
      <Canvas
        shadows
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 0, 11], fov: 38 }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <Suspense fallback={null}>
          <CameraSceneContent
            lightingMode={lightingMode}
            explode={explode}
            apertureVal={apertureVal}
            cameraRef={cameraGroupRef}
            onLoadStatus={(status, path) => setModelStatus({ status, path })}
          />
        </Suspense>
        <OrbitControls makeDefault enableZoom={false} enablePan={false} rotateSpeed={0.8} />
      </Canvas>

      {/* Cybernetic Studio Lighting Backdrop Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
    </div>
  );
};
