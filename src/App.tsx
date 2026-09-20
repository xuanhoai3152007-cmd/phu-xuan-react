function App() {
  const soLuongDiaDiem = 3
  const trangThaiMoCua = true

  return (
    <>
      <div className="trang-chu">
        <h1>Danh sách địa điểm</h1>

        <p>Tổng số địa điểm: {soLuongDiaDiem}</p>
      </div>

      <p>
        Trạng thái:{' '}
        {trangThaiMoCua ? 'Đang mở cửa' : 'Đã đóng cửa'}
      </p>

      <img
        src="https://placehold.co/60x60"
        alt="Địa điểm"
      />
    </>
  )
}

export default App