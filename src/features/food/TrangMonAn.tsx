import { useState } from "react";
import ChiTietMonAn from "./ChiTietMonAn";

function TrangMonAn() {
  const [idDangChon, setIdDangChon] =
    useState(1);

  return (
    <div className="food-page">

      <h2>🍜 Món ngon Huế</h2>

      <div className="food-buttons">

        <button
          onClick={() => setIdDangChon(1)}
        >
          Bún bò Huế
        </button>

        <button
          onClick={() => setIdDangChon(2)}
        >
          Cơm hến
        </button>

        <button
          onClick={() => setIdDangChon(3)}
        >
          Bánh bèo
        </button>

        <button
          onClick={() => setIdDangChon(4)}
        >
          Nem lụi
        </button>

      </div>

      <ChiTietMonAn
        idMonAn={idDangChon}
      />

    </div>
  );
}

export default TrangMonAn;