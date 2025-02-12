import React from 'react';

const NatureGallery = ({ LazyImage }) => {
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK32nCkWfu0uN2v-cr4Xqyd3tstG31Gp6y7Q&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK32nCkWfu0uN2v-cr4Xqyd3tstG31Gp6y7Q&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK32nCkWfu0uN2v-cr4Xqyd3tstG31Gp6y7Q&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK32nCkWfu0uN2v-cr4Xqyd3tstG31Gp6y7Q&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK32nCkWfu0uN2v-cr4Xqyd3tstG31Gp6y7Q&s',
    '/images/nature3.jpg',     //for showing
    // Add more image paths as needed
  ];

  return (
    <div className="gallery">
      <h2>Nature Gallery</h2>
      <div className="image-grid">
        {images.map((src, index) => (
          <LazyImage
            key={index}
            src={src}
            alt={`Nature ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
    </div>
  );
};

export default NatureGallery;