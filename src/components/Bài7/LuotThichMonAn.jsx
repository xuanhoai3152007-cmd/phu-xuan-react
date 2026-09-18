import { useState } from 'react';

export default function LuotThichMonAn() {
  const [luotThich, setLuotThich] = useState(0);

  function handleThich3() {
    setLuotThich((truoc) => truoc + 1);
    setLuotThich((truoc) => truoc + 1);
    setLuotThich((truoc) => truoc + 1);
  }

  return (
    <section className="lab">
      <h2>Lab 3 — Cập nhật state bằng hàm</h2>
      <p>Bún bò Huế — {luotThich} lượt thích</p>
      <button onClick={() => setLuotThich((t) => t + 1)}>+1</button>
      <button onClick={handleThich3}>+3 lượt thích</button>
      <button onClick={() => setLuotThich(0)}>Đặt lại</button>
    </section>
  );
}
