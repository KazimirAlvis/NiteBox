import React, { useEffect, useState } from 'react';
import CategoryRow from '../components/CategoryRow';
import './TVPlayer.css';

function TVPlayer() {
  const [showUI, setShowUI] = useState(true);
  const [lastInteraction, setLastInteraction] = useState(Date.now());
  const [currentPlaylist, setCurrentPlaylist] = useState([]);

  const defaultVideoId = 'djV11Xbc914';
  const mainVideoId = currentPlaylist[0] || defaultVideoId;

  const categories = [
    { title: "Synth Pop", keyword: "80s synth pop music videos" },
    { title: "Hair Metal", keyword: "80s hair metal music videos" },
    { title: "New Wave", keyword: "80s new wave music videos" },
    { title: "Power Ballads", keyword: "80s power ballads music videos" },
  ];

  useEffect(() => {
    const checkInactivity = setInterval(() => {
      if (Date.now() - lastInteraction > 8000) {
        setShowUI(false);
      }
    }, 1000);

    return () => clearInterval(checkInactivity);
  }, [lastInteraction]);

  useEffect(() => {
    const handleKeyDown = () => {
      setShowUI(true);
      setLastInteraction(Date.now());
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="tv-wrapper">
      <iframe
        className="yt-video"
        src={`https://www.youtube.com/embed/${mainVideoId}?autoplay=1&controls=0&mute=1&loop=1&playlist=${currentPlaylist.join(',')}`}
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>

      {showUI && (
        <div className="overlay">
          <div className="video-info">
            <h2>Take On Me</h2>
            <p>A-ha</p>
          </div>

          {categories.map((cat) => (
            <CategoryRow
              key={cat.title}
              title={cat.title}
              keyword={cat.keyword}
              onCategoryClick={setCurrentPlaylist}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TVPlayer;
