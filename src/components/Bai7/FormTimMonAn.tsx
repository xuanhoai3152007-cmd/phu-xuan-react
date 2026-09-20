import { useState, type FormEvent, type KeyboardEvent, type MouseEvent } from 'react'

const GOI_Y = ['bún', 'bánh', 'chè', 'hến']

interface FormTimMonAnProps {
  onTimKiem: (tuKhoa: string) => void
}

export default function FormTimMonAn({ onTimKiem }: FormTimMonAnProps) {
  const [tuKhoa, setTuKhoa] = useState('')
  const [dangFocus, setDangFocus] = useState(false)

  // Enter trong ô nhập sẽ tự gửi form -> không cần bắt phím Enter riêng
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault() // chặn tải lại trang
    onTimKiem(tuKhoa.trim())
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.nativeEvent.isComposing) return // đang gõ dấu tiếng Việt: bỏ qua
    if (e.key === 'Escape') {
      e.preventDefault() // chặn hành vi xoá mặc định của ô search
      setTuKhoa('')
      onTimKiem('')
    }
  }

  function handleChonGoiY(goiY: string) {
    setTuKhoa(goiY)
    onTimKiem(goiY)
  }

  function nganMatTieuDiem(e: MouseEvent<HTMLButtonElement>) {
    // Giữ tiêu điểm ở ô nhập: nếu không, blur chạy trước click
    // và khung gợi ý biến mất trước khi kịp nhận cú bấm
    e.preventDefault()
  }

  return (
    <form className="form-tim" onSubmit={handleSubmit}>
      <input
        type="search"
        aria-label="Tìm món ăn Huế"
        value={tuKhoa}
        onChange={(e) => setTuKhoa(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => setDangFocus(true)}
        onBlur={() => setDangFocus(false)}
        placeholder="Tìm món Huế… (Enter để tìm, Esc để xoá)"
      />
      <button type="submit">Tìm</button>

      {dangFocus && (
        <div className="goi-y">
          {GOI_Y.map((goiY) => (
            <button
              key={goiY}
              type="button"
              onMouseDown={nganMatTieuDiem}
              onClick={() => handleChonGoiY(goiY)}
            >
              {goiY}
            </button>
          ))}
        </div>
      )}
    </form>
  )
}
