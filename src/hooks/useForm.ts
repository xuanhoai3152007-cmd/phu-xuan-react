import { useState } from 'react'
import type { ChangeEvent, FocusEvent, FormEvent } from 'react'

type LoiObj = Record<string, string | undefined>

export function useForm<T extends Record<string, unknown>>(
  giaTriBanDau: T,
  kiemChung: (d: T) => LoiObj
) {
  const [duLieu, setDuLieu] = useState<T>(giaTriBanDau)
  const [daCham, setDaCham] = useState<Record<string, boolean>>({})
  const [dangGui, setDangGui] = useState(false)

  const loi = kiemChung(duLieu)
  const hopLe = Object.keys(loi).length === 0

  type OElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement

  function xuLyThayDoi(e: ChangeEvent<OElement>) {
    const target = e.target
    const { name, value } = target
    const laCheckbox = target instanceof HTMLInputElement && target.type === 'checkbox'
    const checked = target instanceof HTMLInputElement ? target.checked : false
    setDuLieu((truoc) => ({ ...truoc, [name]: laCheckbox ? checked : value }))
  }

  function xuLyRoiO(e: FocusEvent<OElement>) {
    const { name } = e.target
    setDaCham((truoc) => ({ ...truoc, [name]: true }))
  }

  function loiCuaO(ten: string): string | undefined {
    return daCham[ten] ? loi[ten] : undefined
  }

  function datLai() {
    setDuLieu(giaTriBanDau)
    setDaCham({})
    setDangGui(false)
  }

  function xuLyGui(guiDuLieu: (d: T) => Promise<void>) {
    return async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const tatCaDaCham: Record<string, boolean> = {}
      Object.keys(giaTriBanDau).forEach((k) => { tatCaDaCham[k] = true })
      setDaCham(tatCaDaCham)
      if (Object.keys(kiemChung(duLieu)).length > 0) return
      try {
        setDangGui(true)
        await guiDuLieu(duLieu)
      } finally {
        setDangGui(false)
      }
    }
  }

  return { duLieu, setDuLieu, loi, daCham, dangGui, hopLe, xuLyThayDoi, xuLyRoiO, loiCuaO, xuLyGui, datLai }
}

export type FormBundle<T extends Record<string, unknown>> = ReturnType<typeof useForm<T>>