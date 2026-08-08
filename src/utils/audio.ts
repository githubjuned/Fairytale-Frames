// Web Audio API ambient sound synth for subtle luxury ambiance
class AudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private gainNode: GainNode | null = null;
  private osc1: OscillatorNode | null = null;
  private osc2: OscillatorNode | null = null;

  public toggle(enable: boolean) {
    if (enable) {
      this.start();
    } else {
      this.stop();
    }
  }

  private start() {
    if (this.isPlaying) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      this.ctx = new AudioCtx();

      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.015, this.ctx.currentTime);

      // Low ambient warm drone pads (C3 + G3)
      this.osc1 = this.ctx.createOscillator();
      this.osc1.type = 'sine';
      this.osc1.frequency.setValueAtTime(130.81, this.ctx.currentTime); // C3

      this.osc2 = this.ctx.createOscillator();
      this.osc2.type = 'triangle';
      this.osc2.frequency.setValueAtTime(196.00, this.ctx.currentTime); // G3

      this.osc1.connect(this.gainNode);
      this.osc2.connect(this.gainNode);
      this.gainNode.connect(this.ctx.destination);

      this.osc1.start();
      this.osc2.start();
      this.isPlaying = true;
    } catch (e) {
      console.warn('Audio context init deferred until interaction');
    }
  }

  private stop() {
    if (!this.isPlaying) return;
    try {
      if (this.gainNode && this.ctx) {
        this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
      }
      setTimeout(() => {
        this.osc1?.stop();
        this.osc2?.stop();
        this.ctx?.close();
        this.isPlaying = false;
      }, 500);
    } catch (e) {
      this.isPlaying = false;
    }
  }
}

export const audioEngine = new AudioEngine();
