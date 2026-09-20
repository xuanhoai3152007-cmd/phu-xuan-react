import type { Attraction } from '../data/attractions'

interface AttractionCardProps
  extends Omit<Attraction, 'id'> {}

function AttractionCard({
  name,
  category,
  description,
  rating,
}: AttractionCardProps) {
  return (
    <div className="attraction-card">
      <div className="attraction-card__badge">
        {category}
      </div>

      <h3>{name}</h3>

      <p>{description}</p>

      <span className="attraction-card__rating">
        ⭐ {rating}
      </span>
    </div>
  )
}

export default AttractionCard