import AttractionCard from "./AttractionCard";

interface Attraction {
  id: number;
  name: string;
  category: string;
  description: string;
  rating: number;
}

interface AttractionListProps {
  attractions: Attraction[];
}

function AttractionList({
  attractions,
}: AttractionListProps) {
  return (
    <div className="attraction-list">

      {attractions.map((item) => (
        <AttractionCard
          key={item.id}
          name={item.name}
          category={item.category}
          description={item.description}
          rating={item.rating}
        />
      ))}

    </div>
  );
}

export default AttractionList;