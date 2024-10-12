import React from 'react';

function CardA({ title, thumbnail}) {
  return (
    <div className="archive_card_container">
      <div className="archive_card">
        <img src={thumbnail} alt={title} className="archive_card_thumbnail" onDragStart={(e) => e.preventDefault()}  />
      </div>
    </div>
  );
}

export default CardA;
