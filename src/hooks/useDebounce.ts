import { useEffect, useState } from 'react'

function useDebounce<T>(
  giaTri: T,
  doTre: number,
): T {
  const [giaTriDaTre, setGiaTriDaTre] =
    useState<T>(giaTri)

  useEffect(() => {
    const idBoDem = setTimeout(() => {
      setGiaTriDaTre(giaTri)
    }, doTre)

    return () => {
      clearTimeout(idBoDem)
    }
  }, [giaTri, doTre])

  return giaTriDaTre
}

export default useDebounce