import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './Nut.css'

type LoaiNut = 'chinh' | 'phu'
type KichThuocNut = 'nho' | 'vua' | 'lon'

interface NutProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  loai?: LoaiNut
  kichThuoc?: KichThuocNut
  children: ReactNode
}

function Nut({ loai = 'chinh', kichThuoc = 'vua', children, ...rest }: NutProps) {
  const className = `nut nut--${loai} nut--${kichThuoc}`
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  )
}

export default Nut