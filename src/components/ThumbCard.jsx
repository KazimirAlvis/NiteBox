// src/components/ThumbCard.jsx
import './ThumbCard.css';

function ThumbCard({ title, videoId, onSelect }) {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="thumb-card" onClick={() => onSelect(videoId)}>
      <img src={thumbnailUrl} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default ThumbCard;
