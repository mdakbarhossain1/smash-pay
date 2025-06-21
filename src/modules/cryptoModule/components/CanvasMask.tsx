'use client';

import { useEffect, useRef } from 'react';

const CanvasMask = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Example rendering
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.font = 'bold 72px sans-serif';
    ctx.fillText('Your Canvas Content', 50, 150);
  }, []);

  return (
    <div className='flex h-full w-full items-center justify-center overflow-visible bg-transparent'>
      <div
        className='aspect-square w-full max-w-[800px]'
        style={{
          maskImage: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 70%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 70%)'
        }}
      >
        <canvas
          ref={canvasRef}
          className='h-full w-full'
          width={1452}
          height={1452}
          style={{
            contain: 'layout paint size',
            cursor: 'auto',
            userSelect: 'none'
          }}
        />
      </div>
    </div>
  );
};

export default CanvasMask;
