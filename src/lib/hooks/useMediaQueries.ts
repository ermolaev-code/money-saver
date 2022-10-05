/** Base sizes: xs ~ 479.98px; sm ~ 575.98px; md ~ 767.98px; lg ~ 991.98px; xl ~ 1199.98px */

import { useEffect, useState } from 'react'

type TypeMediaQueries = {
  [key: string]: MediaQueryList
}

type TypeMatches = {
  [key: string]: boolean
}

enum EnumSizes {
  sm = '575.98px',
}

export default function useMediaQueries() {
  const getMediaQueries = (): TypeMediaQueries => {
    if (window) {
      const { matchMedia } = window

      return Object.keys(EnumSizes).reduce((acc, key) => {
        const mql = matchMedia(`(max-width: ${EnumSizes[key as keyof typeof EnumSizes]})`)

        return { ...acc, [key]: mql }
      }, {})
    }

    return {}
  }

  const [mediaQueries] = useState<TypeMediaQueries>(getMediaQueries)

  const getMatches = (): TypeMatches => {
    return Object.keys(mediaQueries).reduce(
      (acc, key) => ({ ...acc, [key]: mediaQueries[key].matches }),
      {}
    )
  }

  const [matches, setMatches] = useState<TypeMatches>(getMatches)

  useEffect(() => {
    const listeners: { [key: string]: (e: MediaQueryListEvent) => void } = {}

    Object.keys(mediaQueries).forEach(key => {
      listeners[key] = (e: MediaQueryListEvent) => {
        setMatches(prevMatches => ({ ...prevMatches, [key]: e.matches }))
      }

      mediaQueries[key].addEventListener('change', listeners[key])
    })

    return () => {
      Object.keys(mediaQueries).forEach(key => {
        mediaQueries[key].removeEventListener('change', listeners[key])
      })
    }
  }, [mediaQueries])

  return matches
}
