
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`${className}`}>
      <div className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {children}
        </div>
      </div>
    </section>
  );
};
