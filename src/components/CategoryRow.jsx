import React from 'react';
import './CategoryRow.css';

const getRandomVideo = (list) => list[Math.floor(Math.random() * list.length)];

function CategoryRow({ title, videos, onClick }) {
  const randomVideo = getRandomVideo(videos);

  return (
    <div className="category-row" onClick={onClick}>
      <h3>{title}</h3>
      <div className="thumbnails">
        <img
          src={`https://img.youtube.com/vi/${randomVideo}/mqdefault.jpg`}
          alt={`${title} thumbnail`}
        />
      </div>
    </div>
  );
}

export default CategoryRow;
