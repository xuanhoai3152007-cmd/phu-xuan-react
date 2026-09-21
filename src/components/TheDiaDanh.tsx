import './TheDiaDanh.css'

interface TheDiaDanhProps {
  anh: string
  ten: string
  moTa?: string
  hanhDong?: (ten: string) => void
  nhanHanhDong?: string
}

function TheDiaDanh({
  anh,
  ten,
  moTa = 'Đang cập nhật mô tả...',
  hanhDong,
  nhanHanhDong = 'Yêu thích',
}: TheDiaDanhProps) {
  return (
    <div className="the-dia-danh">
      <img className="the-dia-danh__anh" src={anh} alt={ten} />
      <div className="the-dia-danh__than">
        <h3 className="the-dia-danh__ten">{ten}</h3>
        <p className="the-dia-danh__mo-ta">{moTa}</p>
        {hanhDong && (
          <button className="the-dia-danh__nut" onClick={() => hanhDong(ten)}>
            {nhanHanhDong}
          </button>
        )}
      </div>
    </div>
  )
}

export default TheDiaDanh