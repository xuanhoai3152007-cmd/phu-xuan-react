import { useState } from "react";

interface TicketCounterProps {
  price: number;
}

function TicketCounter({
  price,
}: TicketCounterProps) {
  const [quantity, setQuantity] = useState(1);

  function handleDecrease() {
    setQuantity((prev) =>
      Math.max(1, prev - 1)
    );
  }

  function handleIncrease() {
    setQuantity((prev) =>
      Math.min(10, prev + 1)
    );
  }

  const totalPrice = price * quantity;

  return (
    <div className="ticket-counter">

      <h4>Đặt vé tham quan</h4>

      <div>
        <button onClick={handleDecrease}>
          −
        </button>

        <span>
          {quantity}
        </span>

        <button onClick={handleIncrease}>
          +
        </button>
      </div>

      <p>
        Giá vé:{" "}
        {price.toLocaleString("vi-VN")} đ
      </p>

      <p>
        <strong>
          Tổng tiền:{" "}
          {totalPrice.toLocaleString("vi-VN")} đ
        </strong>
      </p>

    </div>
  );
}

export default TicketCounter;