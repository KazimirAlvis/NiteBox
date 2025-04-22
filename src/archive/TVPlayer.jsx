import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import CategoryRow from './CategoryRow';
import './TVPlayer.css';

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const backgroundPlaylist = [
  'djV11Xbc914', // A-ha
  'Zi_XLOBDo_Y',
  'vCadcBR95oU',
  'kJQP7kiw5Fk',
  'dQw4w9WgXcQ',
];

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

function TVPlayer() {
  const [player, setPlayer] = useState(null);
  const [showUI, setShowUI] = useState(true);
  const [lastInteraction, setLastInteraction] = useState(Date.now());
  const [currentPlaylist, setCurrentPlaylist] = useState([]);
  const [mainVideoId, setMainVideoId] = useState(getRandom(backgroundPlaylist));
  const [readyToPlay, setReadyToPlay] = useState(false);

  useEffect(() => {
    const checkInactivity = setInterval(() => {
      if (Date.now() - lastInteraction > 8000) setShowUI(false);
    }, 1000);
    return () => clearInterval(checkInactivity);
  }, [lastInteraction]);

  useEffect(() => {
    const handleKey = () => {
      setShowUI(true);
      setLastInteraction(Date.now());
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const onReady = (event) => {
    const ytPlayer = event.target;
    setPlayer(ytPlayer);

    // Slight delay then load playlist
    setTimeout(() => {
      ytPlayer.loadPlaylist(backgroundPlaylist);
      setReadyToPlay(true);
    }, 1000);
  };

  const playCategory = (videos) => {
    const first = getRandom(videos);
    setCurrentPlaylist(videos);
    setMainVideoId(first);
    if (player) {
      player.loadPlaylist(videos);
    }
  };

  return (
    <div className="tv-wrapper">
      <YouTube
        videoId={mainVideoId}
        className="yt-video"
        opts={{
          width: '100%',
          height: '100%',
          playerVars: {
            autoplay: 1,
            controls: 0,
            mute: 1,
            loop: 1,
            modestbranding: 1,
            rel: 0,
            // Do NOT use "playlist=" directly to avoid flickers
          },
        }}
        onReady={onReady}
      />

      {showUI && (
        <div className="overlay">
          <div className="video-info">
            <h2>Now Playing</h2>
            <p>Choose a category below</p>
          </div>
          {categories.map((cat) => (
            <CategoryRow
              key={cat.title}
              title={cat.title}
              videos={cat.videos}
              onClick={() => playCategory(cat.videos)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TVPlayer;
