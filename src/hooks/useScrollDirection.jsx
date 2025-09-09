import { useState, useEffect } from "react"

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState("up")
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset
      const direction = scrollY > lastScrollY ? "down" : "up"

      if (
        direction !== scrollDirection &&
        Math.abs(scrollY - lastScrollY) > 10 // ignore small scrolls
      ) {
        setScrollDirection(direction)
      }

      setLastScrollY(scrollY > 0 ? scrollY : 0)
    }

    window.addEventListener("scroll", updateScrollDirection)
    return () => {
      window.removeEventListener("scroll", updateScrollDirection)
    }
  }, [lastScrollY]) // only depends on lastScrollY

  return scrollDirection
}
