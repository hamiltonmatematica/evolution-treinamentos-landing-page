
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`py-12 px-6 md:py-20 md:px-12 ${className}`}>
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </section>
  );
};
