import styles from '@/styles/GridComponent.module.css';
import { Inter } from 'next/font/google';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

const divs = [
  {
    id: 1,
    content: 'Content 1',
    height: 80,
    colSpan: 6,
  },
  {
    id: 2,
    content: 'Content 2',
    height: 60,
    colSpan: 3,
  },
  {
    id: 3,
    content: 'Content 3',
    height: 80,
    colSpan: 6,
  },
  {
    id: 4,
    content: 'Content 4',
    height: 80,
    colSpan: 6,
  },
  {
    id: 5,
    content: 'Content 5',
    height: 60,
    colSpan: 3,
  },
  {
    id: 6,
    content: 'Content 6',
    height: 60,
    colSpan: 3,
  },
];
export default function Overlay() {
  const [hoveredDiv, setHoveredDiv] = useState(null);

  const handleMouseEnter = (divId) => {
    setHoveredDiv(divId);
  };

  const handleMouseLeave = () => {
    setHoveredDiv(null);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {divs.map((div) => (
            <div
              key={div.id}
              className={`bg-gray-500 flex justify-center items-center p-6 row-span-${div.colSpan} w-96 h-${div.height} ${styles.customDiv}`}
              onMouseEnter={() => handleMouseEnter(div.id)}
              onMouseLeave={handleMouseLeave}
            >
              {hoveredDiv === div.id ? (
                <OverlayComponent divId={div.id} />
              ) : (
                div.content
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const OverlayComponent = ({ divId }) => {
  // Define different content for different divs
  const contentMap = {
    1: 'Overlay Content for Div 1',
    2: 'Overlay Content for Div 2',
    3: 'Overlay Content for Div 3',
    4: 'Overlay Content for Div 4',
    5: 'Overlay Content for Div 5',
    6: 'Overlay Content for Div 6',
  };

  return <div className="overlay">{contentMap[divId]}</div>;
};
