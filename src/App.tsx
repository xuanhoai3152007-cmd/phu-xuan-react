import { useState } from "react";

import LuotXemDaiNoi
  from "./features/landmarks/LuotXemDaiNoi";

import TrangMonAn
  from "./features/food/TrangMonAn";

import TimMonAn
  from "./features/food/TimMonAn";

import TimMonAnDebounce
  from "./features/food/TimMonAnDebounce";

import DanhSachDiaDanh 
  from "./components/Bài7/DanhSachDiaDanh";

import diaDanhData
  from "./data/dia-danh.json";

function App() {
  const [hienThi, setHienThi] =
    useState(true);

  return (
    <div className="app">

      <header className="hero">
        <h1>
          🏯 BÀI 6 — REACT HOOK NÂNG CAO
        </h1>

        <p>
          useEffect · useRef · useMemo ·
          useCallback · Custom Hook
        </p>
      </header>

      {/* LAB 1 */}

      <section className="section">
        <h2>LAB 1 — useEffect</h2>

        <button
          onClick={() =>
            setHienThi(!hienThi)
          }
        >
          {hienThi
            ? "Ẩn thẻ Đại Nội"
            : "Hiện thẻ Đại Nội"}
        </button>

        {hienThi && (
          <LuotXemDaiNoi />
        )}
      </section>

      {/* LAB 2 */}

      <section className="section">
        <h2>LAB 2 — useEffect Dependency</h2>

        <TrangMonAn />
      </section>

      {/* LAB 3 */}

      <section className="section">
        <h2>LAB 3 — useRef</h2>

        <TimMonAn />
      </section>

      {/* LAB 4 */}

      <section className="section">
        <h2>
          LAB 4 — useMemo + useCallback +
          React.memo
        </h2>

        <DanhSachDiaDanh
          danhSach={diaDanhData}
        />
      </section>

      {/* LAB 5 */}

      <section className="section">
        <h2>LAB 5 — useDebounce</h2>

        <TimMonAnDebounce />
      </section>

      <footer>
        <p>
          Phu Xuan React — Bài 6
        </p>
      </footer>

    </div>
  );
}

export default App;