import './GridOverlay.css';

const categories = [
  { title: '80s Mall Pop', image: '/thumbs/madonna.jpg', playlist: ['id1', 'id2'] },
  { title: 'Hair Metal', image: '/thumbs/hairmetal.jpg', playlist: ['id3', 'id4'] },
  { title: 'Totally New Wave', image: '/thumbs/newwave.jpg', playlist: ['id5', 'id6'] },
  { title: 'Dark & Gothic', image: '/thumbs/gothic.jpg', playlist: ['id7', 'id8'] },
];

function GridOverlay() {
  return (
    <div className="grid-overlay">
      {categories.map((cat) => (
        <div key={cat.title} className="grid-thumb">
          <img src={cat.image} alt={cat.title} />
          <p>{cat.title}</p>
        </div>
      ))}
    </div>
  );
}

export default GridOverlay;
