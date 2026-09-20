import {
  useCallback,
  useMemo,
  useState,
} from 'react'

import TheDiaDanh from './TheDiaDanh'

import danhSachDiaDanh from '../../data/dia-danh.json'

function DanhSachDiaDanh() {
  const [boLoc, setBoLoc] = useState('')

  const danhSachDaLoc = useMemo(() => {
    console.log('Đang thực hiện lọc:', boLoc)

    const tuKhoa = boLoc.trim().toLowerCase()

    if (!tuKhoa) {
      return danhSachDiaDanh
    }

    return danhSachDiaDanh.filter((diaDanh) =>
      diaDanh.ten.toLowerCase().includes(tuKhoa),
    )
  }, [boLoc])

  const themYeuThich = useCallback((id: number) => {
    console.log('Đã yêu thích địa danh có id:', id)
  }, [])

  return (
    <div
      style={{
        padding: '20px',
      }}
    >
      <h2>Danh sách địa danh Huế</h2>

      <input
        type="text"
        value={boLoc}
        onChange={(e) => setBoLoc(e.target.value)}
        placeholder="Tìm Đại Nội, Chợ Đông Ba..."
        style={{
          width: '100%',
          padding: '12px',
          marginBottom: '20px',
          boxSizing: 'border-box',
        }}
      />

      <p>
        Tìm thấy: {danhSachDaLoc.length} địa danh
      </p>

      <div
        style={{
          display: 'grid',
          gap: '16px',
        }}
      >
        {danhSachDaLoc.map((diaDanh) => (
          <TheDiaDanh
            key={diaDanh.id}
            diaDanh={diaDanh}
            onYeuThich={themYeuThich}
          />
        ))}
      </div>
    </div>
  )
}

export default DanhSachDiaDanh