// src/components/ThumbRow.jsx
import ThumbCard from './ThumbCard';

function ThumbRow({ categories, onSelect }) {
  return (
    <div className="thumb-row">
      {categories.map((cat) => (
        <ThumbCard
          key={cat.title}
          title={cat.title}
          videoId={cat.videos[0]}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default ThumbRow;
