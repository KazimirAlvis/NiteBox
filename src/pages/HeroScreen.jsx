import { useState } from 'react';
import YouTube from 'react-youtube';
import './HeroScreen.css';
import ThumbRow from '../components/ThumbRow';
import { categories } from '../data/categories';

function HeroScreen() {
  const allVideoIds = categories.flatMap((cat) => cat.videos);
  const [currentVideoId, setCurrentVideoId] = useState(null);

  const handleVideoEnd = () => {
    const next = getRandomVideo(currentVideoId);
    setCurrentVideoId(next);
  };

  const getRandomVideo = (exclude) => {
    const filtered = allVideoIds.filter((id) => id !== exclude);
    return filtered[Math.floor(Math.random() * filtered.length)];
  };

  return (
    <div className="hero-screen">
      {/* Background Image and Hero Text */}
      <div className="background">
        <img src="/assets/hero1.jpg" alt="Hero Background" className="hero-image" />
        <div className="hero-text">
          <h1>NiteBox</h1>
          <p>Totally 80s. All Night.</p>
        </div>
      </div>

      {/* YouTube Video Overlay */}
      {currentVideoId && (
        <div className="video-overlay">
          <YouTube
            videoId={currentVideoId}
            className="yt-video"
            opts={{
              width: '100%',
              height: '100%',
              playerVars: {
                autoplay: 1,
                controls: 0,
                mute: 1,
                rel: 0,
                modestbranding: 1,
              },
            }}
            onEnd={handleVideoEnd}
          />
        </div>
      )}

      {/* Thumbnail Row */}
      <div className="thumb-section">
        <ThumbRow
          categories={categories}
          onSelect={(videoId) => setCurrentVideoId(videoId)}
        />
      </div>
    </div>
  );
}

export default HeroScreen;
