import styles from '@/styles/GridComponent.module.css';
import { Inter } from 'next/font/google';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function LightEffect() {
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 });

  const [currDivId, setCurrDivId] = useState(0);

  const handleMouseMove = (event, id) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setLightPosition({ x, y });
    setCurrDivId(id);
  };

  const lightEffectStyle = {
    backgroundImage: `radial-gradient(circle at ${lightPosition.x}px ${lightPosition.y}px, rgba(255,255,255,0.6), transparent)`,
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            onMouseMove={(e) => handleMouseMove(e, 1)}
            onMouseLeave={() => setCurrDivId(0)}
            style={currDivId === 1 ? lightEffectStyle : {}}
            className={`bg-gray-800 p-6 rounded-lg shadow-md row-span-6 w-96 h-80 ${styles.customDiv} select-none`}
          >
            Content 1
          </div>
          <div
            onMouseMove={(e) => handleMouseMove(e, 2)}
            onMouseLeave={() => setCurrDivId(0)}
            style={currDivId === 2 ? lightEffectStyle : {}}
            className={`bg-gray-800 p-6 rounded-lg shadow-md row-span-3 w-96 h-60 ${styles.customDiv} select-none`}
          >
            Content 2
          </div>
          <div
            onMouseMove={(e) => handleMouseMove(e, 3)}
            onMouseLeave={() => setCurrDivId(0)}
            style={currDivId === 3 ? lightEffectStyle : {}}
            className={`bg-gray-800 p-6 rounded-lg shadow-md row-span-6 w-96 h-80 ${styles.customDiv} select-none`}
          >
            Content 3
          </div>
          <div
            onMouseMove={(e) => handleMouseMove(e, 4)}
            onMouseLeave={() => setCurrDivId(0)}
            style={currDivId === 4 ? lightEffectStyle : {}}
            className={`bg-gray-800 p-6 rounded-lg shadow-md row-span-6 w-96 h-80 ${styles.customDiv} select-none`}
          >
            Content 5
          </div>
          <div
            onMouseMove={(e) => handleMouseMove(e, 5)}
            onMouseLeave={() => setCurrDivId(0)}
            style={currDivId === 5 ? lightEffectStyle : {}}
            className={`bg-gray-800 p-6 rounded-lg shadow-md row-span-3 w-96 h-60 ${styles.customDiv} select-none`}
          >
            Content 4
          </div>
          <div
            onMouseMove={(e) => handleMouseMove(e, 6)}
            onMouseLeave={() => setCurrDivId(0)}
            style={currDivId === 6 ? lightEffectStyle : {}}
            className={`bg-gray-800 p-6 rounded-lg shadow-md row-span-3 w-96 h-60 ${styles.customDiv} select-none`}
          >
            Content 6
          </div>
        </div>
      </div>
    </main>
  );
}
