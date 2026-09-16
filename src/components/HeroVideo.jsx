import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

/**
 * Full-bleed HLS background video. Pass `src` as an .m3u8 URL you own the
 * rights to — with no src, this renders nothing and the section's own
 * gradient/glow/grid layers carry the background on their own.
 */
export default function HeroVideo({ src, className }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (!src) return undefined
    const video = videoRef.current
    if (!video) return undefined

    let hls

    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: false })
      hls.loadSource(src)
      hls.attachMedia(video)
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src
    }

    return () => hls?.destroy()
  }, [src])

  if (!src) return null

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      aria-hidden="true"
    />
  )
}
