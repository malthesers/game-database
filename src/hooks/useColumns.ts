import { useEffect, useState } from 'react'

export default function useColumns() {
  const [columnCount, setColumnCount] = useState<number>(1)

  useEffect(() => {
    // Update column count based on window width
    function updateColumnCount() {
      if (window.innerWidth < 768) {
        setColumnCount(1)
      } else if (window.innerWidth < 992) {
        setColumnCount(2)
      } else if (window.innerWidth < 1280) {
        setColumnCount(3)
      } else {
        setColumnCount(4)
      }
    }

    updateColumnCount()

    // Add eventListener on mount
    window.addEventListener('resize', updateColumnCount)

    // Remove eventListener on unmount
    return () => {
      window.removeEventListener('resize', updateColumnCount)
    }
  }, [])

  return { columnCount }
}
