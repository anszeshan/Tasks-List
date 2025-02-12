import React from 'react';

const FoodGallery = ({ LazyImage }) => {
  const images = [
    'https://images.deliveryhero.io/image/fd-pk/LH/m2fx-listing.jpg',
    'https://images.deliveryhero.io/image/fd-pk/LH/m2fx-listing.jpg',
    'https://images.deliveryhero.io/image/fd-pk/LH/m2fx-listing.jpg',
    'https://images.deliveryhero.io/image/fd-pk/LH/m2fx-listing.jpg',
    'https://images.deliveryhero.io/image/fd-pk/LH/m2fx-listing.jpg',
    'https://images.deliveryhero.io/image/fd-pk/LH/m2fx-listing.jpg',
    '/images/Food.jpg',   //for showing
    // Add more image paths as needed
  ];

  return (
    <div className="gallery">
      <h2>Food Gallery</h2>
      <div className="image-grid">
        {images.map((src, index) => (
          <LazyImage
            key={index}
            src={src}
            alt={`Food ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
    </div>
  );
};

export default FoodGallery;