// src/components/ThumbRow.jsx
import ThumbCard from './ThumbCard';
import './ThumbRow.css';


function ThumbRow({ categories, onSelect }) {
  return (
    <div className="thumb-row">
      {categories.map((cat) => (
        <ThumbCard
          key={cat.title}
          title={cat.title}
          videos={cat.videos}
          onClick={() => onSelect(cat.videos)}
        />
      ))}
    </div>
  );
}

export default ThumbRow;
