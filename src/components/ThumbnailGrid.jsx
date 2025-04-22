// src/components/ThumbnailGrid.jsx
import './ThumbnailGrid.css';

const thumbnails = [
  { title: "Synth Pop", image: '/assets/thumb-synthpop.jpg', playlist: ['djV11Xbc914'] },
  { title: "Hair Metal", image: '/assets/thumb-hairmetal.jpg', playlist: ['Zi_XLOBDo_Y'] },
  { title: "New Wave", image: '/assets/thumb-newwave.jpg', playlist: ['vCadcBR95oU'] },
  { title: "Power Ballads", image: '/assets/thumb-ballads.jpg', playlist: ['YkADj0TPrJA'] },
];

function ThumbnailGrid({ onThumbClick, expanded }) {
    return (
      <div className={`thumb-grid ${expanded ? 'expanded' : 'collapsed'}`}>
        {thumbnails.map((thumb) => (
          <div
            key={thumb.title}
            className="thumb-item"
            onClick={() => onThumbClick(thumb.playlist)}
          >
            <img src={thumb.image} alt={thumb.title} />
            <p>{thumb.title}</p>
          </div>
        ))}
      </div>
    );
  }
  

export default ThumbnailGrid;
