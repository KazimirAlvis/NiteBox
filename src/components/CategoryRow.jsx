import React, { useEffect, useState } from 'react';
import './CategoryRow.css';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

function CategoryRow({ title, keyword, onCategoryClick }) {
  const [thumb, setThumb] = useState(null);
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(
            `/api/youtube/v3/search?part=snippet&maxResults=10&type=video&q=${encodeURIComponent(keyword)}&key=${API_KEY}`
          );
          
        const data = await res.json();
        const items = data.items || [];

        if (items.length > 0) {
          setThumb(items[0].snippet.thumbnails.high.url);
          setPlaylist(items.map((video) => video.id.videoId));
        }
      } catch (err) {
        console.error('Failed to fetch YouTube videos:', err);
      }
    };

    fetchVideos();
  }, [keyword]);

  return (
    <div className="thumb-tile" onClick={() => onCategoryClick(playlist)}>
      {thumb && (
        <img className="thumb-image" src={thumb} alt={title} />
      )}
      <h4>{title}</h4>
    </div>
  );
}

export default CategoryRow;
