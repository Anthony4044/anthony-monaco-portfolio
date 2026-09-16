import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import HALO from 'vanta/dist/vanta.halo.min'

export default function VantaHaloBackground({ className }) {
  const containerRef = useRef(null)
  const [effect, setEffect] = useState(null)

  useEffect(() => {
    if (!effect) {
      setEffect(
        HALO({
          el: containerRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
        }),
      )
    }

    return () => {
      effect?.destroy()
    }
  }, [effect])

  return <div ref={containerRef} className={className} aria-hidden="true" />
}
