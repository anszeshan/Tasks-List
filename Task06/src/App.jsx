import React, { Suspense, useState } from 'react';
import './App.css';

// Lazy load our gallery sections
const NatureGallery = React.lazy(() => import('./components/NatureGallery'));
const CityGallery = React.lazy(() => import('./components/CityGallery'));
const FoodGallery = React.lazy(() => import('./components/FoodGallery'));

// Create a reusable Image component with lazy loading
const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  // Set up intersection observer for image loading
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = document.getElementById(src);
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [src]);

  return (
    <div className="image-container" id={src}>
      {isInView && (
        <>
          {!isLoaded && <div className="image-placeholder">Loading...</div>}
          <img
            src={src}
            alt={alt}
            className={`lazy-image ${className} ${isLoaded ? 'loaded' : ''}`}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
          />
        </>
      )}
    </div>
  );
};

const App = () => {
  const [activeGallery, setActiveGallery] = useState('nature');

  // Navigation component
  const Navigation = () => (
    <nav className="gallery-nav">
      <button 
        className={activeGallery === 'nature' ? 'active' : ''}
        onClick={() => setActiveGallery('nature')}
      >
        Nature
      </button>
      <button 
        className={activeGallery === 'city' ? 'active' : ''}
        onClick={() => setActiveGallery('city')}
      >
        City
      </button>
      <button 
        className={activeGallery === 'food' ? 'active' : ''}
        onClick={() => setActiveGallery('food')}
      >
        Food
      </button>
    </nav>
  );

  // Loading fallback component
  const LoadingFallback = () => (
    <div className="loading-fallback">
      <div className="loading-spinner"></div>
      <p>Loading gallery...</p>
    </div>
  );

  return (
    <div className="app">
      <header className="app-header">
        <h1>Lazy Loading Gallery</h1>
        <Navigation />
      </header>

      <main className="gallery-container">
        <Suspense fallback={<LoadingFallback />}>
          {activeGallery === 'nature' && <NatureGallery LazyImage={LazyImage} />}
          {activeGallery === 'city' && <CityGallery LazyImage={LazyImage} />}
          {activeGallery === 'food' && <FoodGallery LazyImage={LazyImage} />}
        </Suspense>
      </main>
    </div>
  );
};

export default App;