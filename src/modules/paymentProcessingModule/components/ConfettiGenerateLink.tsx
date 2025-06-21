'use client';

import confetti from 'canvas-confetti';
import { RotateCcw } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function ConfettiGenerateLink() {
  const [triggeredLink, setTriggeredLink] = useState(false);
  const canvasLinkRef = useRef<HTMLCanvasElement | null>(null);
  const confettiRef = useRef<ReturnType<typeof confetti.create> | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set initial dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Handle resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = () => {
    if (!canvasLinkRef.current) return;

    if (!confettiRef.current) {
      confettiRef.current = confetti.create(canvasLinkRef.current, {
        resize: true,
        useWorker: true
      });
    }

    confettiRef.current({
      particleCount: 100,
      spread: 120,
      origin: { y: 0.6 },
      disableForReducedMotion: true
    });
    setTriggeredLink(true);
  };

  const handleReset = () => {
    setTriggeredLink(false);
    if (canvasLinkRef.current) {
      const ctx = canvasLinkRef.current.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvasLinkRef.current.width, canvasLinkRef.current.height);
      }
    }
  };

  return (
    <div className='grid max-w-7xl grid-cols-1 overflow-hidden rounded-xl border border-gray-300 md:grid-cols-2'>
      {/* Left Side */}
      <div className='bg-gradient-4 relative flex min-h-[300px] items-center justify-center'>
        <canvas
          ref={canvasLinkRef}
          className='pointer-events-none absolute top-0 left-0 h-full w-full'
          width={dimensions.width}
          height={dimensions.height}
        />

        {!triggeredLink ? (
          <button
            onClick={handleClick}
            className='gradient-text-2 z-10 cursor-pointer rounded-lg bg-white px-6 py-3 font-semibold shadow-md transition hover:bg-gray-100'
          >
            Generate a payment link!
          </button>
        ) : (
          <div className='z-10 text-center'>
            <p className='gradient-text-2 mb-5 text-xl font-semibold text-white'>🎉 Success!</p>
            <button className='gradient-text-2 z-10 rounded-lg bg-white px-6 py-3 font-semibold shadow-md transition hover:bg-gray-100'>
              Link Generated
            </button>
          </div>
        )}

        {triggeredLink && (
          <button
            onClick={handleReset}
            className='absolute right-4 bottom-4 z-10 cursor-pointer rounded-full bg-black/30 p-2 text-white hover:bg-black/50'
          >
            <RotateCcw className='h-5 w-5' />
          </button>
        )}
      </div>

      {/* Right Side */}
      <div className='flex flex-col justify-center gap-4 p-6'>
        <h2 className='text-3xl font-bold text-white'>
          Start selling instantly through payment links without any setup
        </h2>
        <p className='text-white'>
          Start accepting payments without any prior setup by sending payment links to your customers through
          social media, messaging platforms, or emails.
        </p>
      </div>
    </div>
  );
}
