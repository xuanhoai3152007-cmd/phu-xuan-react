import { useState } from 'react';

const GOI_Y = ['bún', 'bánh', 'chè', 'hến'];

export default function FormTimMonAn({ onTimKiem }) {
  const [tuKhoa, setTuKhoa] = useState('');
  const [dangFocus, setDangFocus] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    onTimKiem(tuKhoa.trim());
  }

  function handleKeyDown(e) {
    if (e.nativeEvent.isComposing) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      setTuKhoa('');
      onTimKiem('');
    }
  }

  function handleChonGoiY(goiY) {
    setTuKhoa(goiY);
    onTimKiem(goiY);
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
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleChonGoiY(goiY)}
            >
              {goiY}
            </button>
          ))}
        </div>
      )}
    </form>
  );
}
