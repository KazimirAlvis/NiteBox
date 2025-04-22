// src/pages/HeroScreen.jsx
import { useEffect, useState } from 'react';
import './HeroScreen.css';
import ThumbRow from '../components/ThumbRow';
import { categories } from '../data/categories';

function HeroScreen() {
  const [currentVideoId, setCurrentVideoId] = useState(null);

  return (
    <div className="hero-screen">
      {/* Static background */}
      <div className="background">
        <img src="/assets/hero1.jpg" alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h1>NiteBox</h1>
          <p>Totally 80s. All Night.</p>
        </div>
      </div>

      {/* Video overlay (only when active) */}
      {currentVideoId && (
        <div className="video-overlay">
          <iframe
            className="yt-video"
            src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1&controls=0&mute=1`}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
      )}

      {/* Thumbs */}
      <div className="thumb-section">
        <ThumbRow
          categories={categories}
          onSelect={(videoId) => {
            setCurrentVideoId(videoId);
          }}
        />
      </div>
    </div>
  );
}

export default HeroScreen;
