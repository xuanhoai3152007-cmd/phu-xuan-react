export function NhanTrangThai({
  dangMoCua,
}: {
  dangMoCua: boolean
}) {
  return (
    <span
      style={{
        color: dangMoCua ? 'green' : 'crimson',
        fontWeight: 'bold',
      }}
    >
      {dangMoCua ? '● Đang mở cửa' : '● Đã đóng cửa'}
    </span>
  )
}

export function demTongSoDiaDiem(
  danhSach: string[],
) {
  return danhSach.length
}