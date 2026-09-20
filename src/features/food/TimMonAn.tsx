import { useEffect, useRef, useState } from 'react'

function TimMonAn() {
  const oTimKiemRef = useRef<HTMLInputElement>(null)

  const soLanRenderRef = useRef(0)

  const [tuKhoa, setTuKhoa] = useState('')

  soLanRenderRef.current += 1

  console.log(
    'TimMonAn đã render:',
    soLanRenderRef.current,
    'lần',
  )

  useEffect(() => {
    oTimKiemRef.current?.focus()
  }, [])

  return (
    <div
      style={{
        padding: '20px',
        marginTop: '20px',
        border: '1px solid #ddd',
        borderRadius: '12px',
      }}
    >
      <h2>Tìm món ăn Huế</h2>

      <input
        ref={oTimKiemRef}
        type="text"
        value={tuKhoa}
        onChange={(e) => setTuKhoa(e.target.value)}
        placeholder="Tìm bún bò, cơm hến, bánh bèo…"
        style={{
          width: '100%',
          padding: '12px',
          boxSizing: 'border-box',
        }}
      />

      <p>Từ khóa: {tuKhoa}</p>

      <p>
        Đã render {soLanRenderRef.current} lần
      </p>
    </div>
  )
}

export default TimMonAn