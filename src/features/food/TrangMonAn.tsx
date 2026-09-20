import { useState } from 'react'
import ChiTietMonAn from './ChiTietMonAn'

function TrangMonAn() {
  const [idDangChon, setIdDangChon] = useState(1)

  const buttons = [
    { id: 1, name: 'Bún bò Huế' },
    { id: 2, name: 'Cơm hến' },
    { id: 3, name: 'Bánh bèo' },
    { id: 4, name: 'Nem lụi' },
  ]

  return (
    <div>
      <h2>Món ăn Huế</h2>

      <div
        style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        {buttons.map((button) => (
          <button
            key={button.id}
            onClick={() => setIdDangChon(button.id)}
          >
            {button.name}
          </button>
        ))}
      </div>

      <ChiTietMonAn idMonAn={idDangChon} />
    </div>
  )
}

export default TrangMonAn