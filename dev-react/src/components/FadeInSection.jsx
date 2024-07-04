import React from 'react';
import { useInView } from 'react-intersection-observer';
const FadeInSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Ajustez le seuil selon vos besoins
  });

  return (
    <div
      ref={ref}
      className={`fade-in-section ${inView ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
