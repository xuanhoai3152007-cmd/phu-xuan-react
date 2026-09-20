import { memo } from 'react'

interface DiaDanh {
  id: number
  ten: string
  khuVuc: string
}

interface TheDiaDanhProps {
  diaDanh: DiaDanh
  onYeuThich: (id: number) => void
}

function TheDiaDanh({
  diaDanh,
  onYeuThich,
}: TheDiaDanhProps) {
  console.log('TheDiaDanh render:', diaDanh.ten)

  return (
    <div
      style={{
        padding: '16px',
        border: '1px solid #ddd',
        borderRadius: '12px',
      }}
    >
      <h3>{diaDanh.ten}</h3>

      <p>Khu vực: {diaDanh.khuVuc}</p>

      <button onClick={() => onYeuThich(diaDanh.id)}>
        ♡ Yêu thích
      </button>
    </div>
  )
}

export default memo(TheDiaDanh)