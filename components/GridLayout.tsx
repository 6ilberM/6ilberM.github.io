// src/components/GridLayout.tsx
import React from 'react';

const GridLayout: React.FC = () => (
  <div className="container">
    <div className="grid-container">
      <div className="grid-item col-span-12 md:col-span-6 lg:col-span-4">Item 1</div>
      <div className="grid-item col-span-12 md:col-span-6 lg:col-span-4">Item 2</div>
      <div className="grid-item col-span-12 md:col-span-6 lg:col-span-4">Item 3</div>
      <div className="grid-item col-span-12 md:col-span-6 lg:col-span-4">Item 4</div>
      <div className="grid-item col-span-12 md:col-span-6 lg:col-span-4">Item 5</div>
      <div className="grid-item col-span-12 md:col-span-6 lg:col-span-4">Item 6</div>
    </div>
  </div>
);

export default GridLayout;
