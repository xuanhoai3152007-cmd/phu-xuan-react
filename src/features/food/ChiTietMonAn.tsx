import { useEffect, useState } from 'react'
import fetchMonAn from '../../data/fetchMonAn'

interface MonAn {
  id: number
  ten: string
  gia: number
  moTa: string
}

interface ChiTietMonAnProps {
  idMonAn: number
}

function ChiTietMonAn({ idMonAn }: ChiTietMonAnProps) {
  const [monAn, setMonAn] = useState<MonAn | null>(null)
  const [dangTai, setDangTai] = useState(true)

  useEffect(() => {
    let daHuy = false

    setDangTai(true)

    fetchMonAn(idMonAn).then((data) => {
      if (!daHuy) {
        setMonAn(data ?? null)
        setDangTai(false)
      }
    })

    return () => {
      daHuy = true
    }
  }, [idMonAn])

  if (dangTai) {
    return <p>Đang tải thông tin món ăn…</p>
  }

  if (!monAn) {
    return <p>Không tìm thấy món ăn.</p>
  }

  return (
    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '12px',
      }}
    >
      <h3>
        {monAn.ten} — {monAn.gia.toLocaleString('vi-VN')}đ
      </h3>

      <p>{monAn.moTa}</p>
    </div>
  )
}

export default ChiTietMonAn