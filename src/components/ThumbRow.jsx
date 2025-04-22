// src/components/ThumbRow.jsx

import './ThumbRow.css';



function ThumbCard({ title, videoId, onSelect }) {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="thumb-card" onClick={() => onSelect([videoId])}>
      <img src={thumbnailUrl} alt={title} />
      <p>{title}</p>
    </div>
  );
}

function ThumbRow({ categories, onSelect }) {
  return (
    <div className="thumb-row">
      {categories.map((cat) => (
        <ThumbCard key={cat.videoId} {...cat} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default ThumbRow;

