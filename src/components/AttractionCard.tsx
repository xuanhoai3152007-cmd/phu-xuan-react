import { useState } from 'react'
import type { Attraction } from '../data/attractions'
import StarRating from './StarRating'

interface AttractionCardProps
  extends Omit<Attraction, 'id'> {}

function AttractionCard({
  name,
  category,
  description,
  rating,
}: AttractionCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  function handleToggleFavorite() {
    setIsFavorite((prev) => !prev)
  }

  return (
    <div className="attraction-card">
      <button
        className={`attraction-card__favorite ${
          isFavorite ? 'is-active' : ''
        }`}
        onClick={handleToggleFavorite}
      >
        {isFavorite ? '♥ Đã lưu' : '♡ Lưu địa điểm'}
      </button>

      <div className="attraction-card__badge">
        {category}
      </div>

      <h3>{name}</h3>

      <p>{description}</p>

      <StarRating />

      <span className="attraction-card__rating">
        ⭐ {rating}
      </span>
    </div>
  )
}

export default AttractionCard