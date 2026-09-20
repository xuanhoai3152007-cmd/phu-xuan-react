import { useState } from 'react'

function StarRating() {
  const [userRating, setUserRating] = useState(0)

  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="star-rating">
      <div>
        {stars.map((starValue) => (
          <span
            key={starValue}
            className="star"
            onClick={() =>
              setUserRating(starValue)
            }
            style={{
              cursor: 'pointer',
              fontSize: '24px',
            }}
          >
            {starValue <= userRating
              ? '★'
              : '☆'}
          </span>
        ))}
      </div>

      <p>
        Bạn đã đánh giá: {userRating}/5 sao
      </p>
    </div>
  )
}

export default StarRating