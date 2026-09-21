import type { ReactNode } from 'react'
import './HopThongBao.css'

interface HopThongBaoProps {
  mauNen?: string
  children: ReactNode
}

function HopThongBao({ mauNen = '#e6f0ef', children }: HopThongBaoProps) {
  return (
    <div className="hop-thong-bao" style={{ background: mauNen }}>
      {children}
    </div>
  )
}

export default HopThongBao

// Biến thể chuyên biệt — dựng TRÊN thành phần tổng quát bằng kết hợp (composition).
interface HopThongBaoThanhCongProps {
  children: ReactNode
}

export function HopThongBaoThanhCong({ children }: HopThongBaoThanhCongProps) {
  return (
    <HopThongBao mauNen="#e7f3ec">
      <strong className="hop-thong-bao__nhan-thanh-cong">Thành công! </strong>
      {children}
    </HopThongBao>
  )
}