import { useEffect, useState } from 'react';
import './CategoryRow.css';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

function CategoryRow({ title, keyword }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(
          `/youtube/youtube/v3/search?part=snippet&maxResults=5&type=video&q=${encodeURIComponent(keyword)}&key=${API_KEY}`
        );
        const data = await res.json();
        setVideos(data.items || []);
      } catch (err) {
        console.error('Failed to fetch YouTube videos:', err);
      }
    };
  
    fetchVideos();
  }, [keyword]);
  

  return (
    <div className="category-row">
      <h3>{title}</h3>
      <div className="thumbnails">
        {videos.map((video) => (
          <img
            key={video.id.videoId}
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
            title={video.snippet.title}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryRow;
console.log(API_KEY)
