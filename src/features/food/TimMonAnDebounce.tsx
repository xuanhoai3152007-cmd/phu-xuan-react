import { useMemo, useState } from 'react'

import useDebounce from '../../hooks/useDebounce'

import danhSachMonAn from '../../data/mon-an.json'

function TimMonAnDebounce() {
  const [tuKhoa, setTuKhoa] = useState('')

  const tuKhoaDaTre = useDebounce(tuKhoa, 300)

  const danhSachLoc = useMemo(() => {
    console.log(
      'Đang lọc theo từ khoá:',
      tuKhoaDaTre,
    )

    const tuKhoaXuLy =
      tuKhoaDaTre.trim().toLowerCase()

    if (!tuKhoaXuLy) {
      return danhSachMonAn
    }

    return danhSachMonAn.filter((monAn) =>
      monAn.ten
        .toLowerCase()
        .includes(tuKhoaXuLy),
    )
  }, [tuKhoaDaTre])

  return (
    <div
      style={{
        padding: '30px',
      }}
    >
      <h1>Tìm món ăn Huế</h1>

      <input
        type="text"
        value={tuKhoa}
        onChange={(e) => setTuKhoa(e.target.value)}
        placeholder="Nhập tên món ăn..."
        style={{
          width: '100%',
          padding: '12px',
          marginBottom: '20px',
          boxSizing: 'border-box',
        }}
      />

      <p>
        Từ khóa hiện tại:{' '}
        <strong>{tuKhoa}</strong>
      </p>

      <p>
        Từ khóa sau debounce:{' '}
        <strong>{tuKhoaDaTre}</strong>
      </p>

      <div>
        {danhSachLoc.map((monAn) => (
          <div
            key={monAn.id}
            style={{
              padding: '16px',
              marginBottom: '12px',
              border: '1px solid #ddd',
              borderRadius: '10px',
            }}
          >
            <h3>{monAn.ten}</h3>

            <p>{monAn.moTa}</p>

            <strong>
              {monAn.gia.toLocaleString('vi-VN')}đ
            </strong>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TimMonAnDebounce
