import { useEffect, useState } from 'react'

export default function useWidth() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

  function updateWidth() {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    // Add eventListener on mount
    window.addEventListener('resize', updateWidth)

    // Remove eventListener on unmount
    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [])

  return { windowWidth }
}
