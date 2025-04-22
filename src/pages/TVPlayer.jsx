import React, { useEffect, useState } from 'react';
import CategoryRow from '../components/CategoryRow';
import './TVPlayer.css';

const backgroundPlaylist = [
  'djV11Xbc914', // A-ha
  'Zi_XLOBDo_Y', // a-ha (again for loop)
  'vCadcBR95oU', // Tears for Fears
  'kJQP7kiw5Fk', // Despacito
  'dQw4w9WgXcQ', // Rick Roll 😆
];

const getRandomVideo = (list) => list[Math.floor(Math.random() * list.length)];

function TVPlayer() {
  const initialMainVideoId = getRandomVideo(backgroundPlaylist);
  const [showUI, setShowUI] = useState(true);
  const [lastInteraction, setLastInteraction] = useState(Date.now());
  const [currentPlaylist, setCurrentPlaylist] = useState([...backgroundPlaylist]);
  const [mainVideoId, setMainVideoId] = useState(initialMainVideoId);

  const categories = [
    {
      title: "Synth Pop",
      videos: ['djV11Xbc914', 'vCadcBR95oU', 'kJQP7kiw5Fk'],
    },
    {
      title: "Hair Metal",
      videos: ['gEPmA3USJdI', 'S0Vyr1TylTc', 'bNX2V6r6zyo'],
    },
    {
      title: "New Wave",
      videos: ['Zi_XLOBDo_Y', '9jK-NcRmVcw', 'hTWKbfoikeg'],
    },
    {
      title: "Power Ballads",
      videos: ['fJ9rUzIMcZQ', 'lDK9QqIzhwk', 'KDxJlW6cxRk'],
    },
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
        key={mainVideoId}
        className="yt-video"
        src={`https://www.youtube.com/embed/${mainVideoId}?autoplay=1&controls=0&mute=1&loop=1&playlist=${[...currentPlaylist, mainVideoId].join(',')}`}
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>

      {showUI && (
        <div className="overlay">
          <div className="video-info">
            <h2>Now Playing</h2>
            <p>Click a playlist below to update</p>
          </div>

          {categories.map((cat) => (
            <CategoryRow
              key={cat.title}
              title={cat.title}
              videos={cat.videos}
              onClick={() => {
                const randomStart = getRandomVideo(cat.videos);
                setMainVideoId(randomStart);
                setCurrentPlaylist(cat.videos);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TVPlayer;
