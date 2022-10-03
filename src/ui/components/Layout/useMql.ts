import { useEffect } from 'react'

enum ScreenEnum {
  xs = '479.98px',
  sm = '575.98px',
  lg = '991.98px',
  xl = '1199.98px',
}

export const useMql = () => {
  // const [query, setQuery] = useState<MediaQueryList | MediaQueryListEvent | null>(null)

  useEffect(() => {
    const { matchMedia } = window
    const v = { xs: {}, sm: {}, lg: {}, xl: {} }

    Object.keys(v).forEach(key => {
      const handler = (mql: MediaQueryList | MediaQueryListEvent) => {
        v[key as keyof typeof v] = { ...v[key as keyof typeof v], mql }

        console.log(key, mql)
      }

      v[key as keyof typeof v] = {
        ...v[key as keyof typeof v],
        mql: matchMedia(`(max-width: ${ScreenEnum[key as keyof typeof v]})`),
      }

      v[key as keyof typeof v].mql.addEventListener('change', handler)
    })

    // const responsiveHandler = (newMql: MediaQueryList | MediaQueryListEvent) => setQuery(newMql)

    // if (window !== undefined) {
    //   const { matchMedia } = window

    //   mql = matchMedia(`(max-width: 992px)`)
    //   mql.addEventListener('change', responsiveHandler)
    // }

    // return () => {
    //   mql.removeEventListener('change', responsiveHandler)
    // }
  }, [])

  return {}
}
