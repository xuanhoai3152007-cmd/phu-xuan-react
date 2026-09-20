import { useState } from 'react'
import LuotXemDaiNoi from './features/landmarks/LuotXemDaiNoi'

function App() {
  const [hienThi, setHienThi] = useState(true)

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '40px auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
      }}
    >
      <h1>Khám phá Huế</h1>

      <button
        onClick={() => setHienThi(!hienThi)}
        style={{
          padding: '10px 20px',
          marginBottom: '20px',
          cursor: 'pointer',
        }}
      >
        {hienThi ? 'Ẩn thẻ Đại Nội' : 'Hiện thẻ Đại Nội'}
      </button>

      {hienThi && <LuotXemDaiNoi />}
    </div>
  )
}

export default App