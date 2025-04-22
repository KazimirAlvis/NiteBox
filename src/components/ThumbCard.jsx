// src/components/ThumbCard.jsx
import './ThumbCard.css';

function ThumbCard({ title, videos, onClick }) {
  const thumbnailUrl = `https://img.youtube.com/vi/${videos[0]}/hqdefault.jpg`;

  return (
    <div className="thumb-card" onClick={onClick}>
      <img src={thumbnailUrl} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default ThumbCard;
