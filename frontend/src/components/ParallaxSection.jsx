import React, { useEffect, useState } from 'react';

const ParallaxSection = ({ children, className = '', speed = 0.5, offset = 0 }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const transform = `translateY(${(scrollY * speed + offset)}px)`;

  return (
    <div 
      className={className}
      style={{ transform }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;