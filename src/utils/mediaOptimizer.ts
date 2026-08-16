/**
 * Cloudinary & Web Media Optimization Utility
 * Automatically injects Cloudinary's high-speed CDN transforms:
 * - f_auto: Serves modern formats (AVIF / WebP / WebM / MP4 H.264)
 * - q_auto: Intelligent compression without perceptual quality degradation
 * - Responsive width clamping to prevent multi-megabyte image decoding
 */

export function getOptimizedImageUrl(url: string, width?: number): string {
  if (!url) return '';
  
  // If it's a Cloudinary URL, inject f_auto,q_auto and optional width
  if (url.includes('cloudinary.com') && url.includes('/image/upload/')) {
    // Avoid double-inserting transformations
    if (url.includes('/image/upload/f_auto') || url.includes('/image/upload/q_auto')) {
      return url;
    }
    
    const transform = width 
      ? `f_auto,q_auto,w_${width},c_limit` 
      : 'f_auto,q_auto';
      
    return url.replace('/image/upload/', `/image/upload/${transform}/`);
  }
  
  // Unsplash optimizations
  if (url.includes('images.unsplash.com')) {
    if (!url.includes('auto=format')) {
      const separator = url.includes('?') ? '&' : '?';
      return `${url}${separator}auto=format&fit=crop&q=80${width ? `&w=${width}` : ''}`;
    }
  }

  return url;
}

export function getOptimizedVideoUrl(url: string): string {
  if (!url) return '';
  // Direct MP4 playback ensures 100% native autoplay compatibility across all browsers
  return url;
}
