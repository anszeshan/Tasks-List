import React from 'react';

const CityGallery = ({ LazyImage }) => {
  const images = [
    'https://www.littledayout.com/wp-content/uploads/03-Singapore-City-Gallery.jpg',
    'https://www.littledayout.com/wp-content/uploads/03-Singapore-City-Gallery.jpg',
    'https://www.littledayout.com/wp-content/uploads/03-Singapore-City-Gallery.jpg',
    'https://www.littledayout.com/wp-content/uploads/03-Singapore-City-Gallery.jpg',
    'https://www.littledayout.com/wp-content/uploads/03-Singapore-City-Gallery.jpg',
    'https://www.littledayout.com/wp-content/uploads/03-Singapore-City-Gallery.jpg',
    '/images/citygallery.jpg',   //for showing
    // Add more image paths as needed
  ];

  return (
    <div className="gallery">
      <h2>City Gallery</h2>
      <div className="image-grid">
        {images.map((src, index) => (
          <LazyImage
            key={index}
            src={src}
            alt={`City ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
    </div>
  );
};

export default CityGallery;