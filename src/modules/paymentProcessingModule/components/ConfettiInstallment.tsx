'use client';

import confetti from 'canvas-confetti';
import { RotateCcw } from 'lucide-react';
import { useRef, useState } from 'react';

const plans = [3, 6, 12];

export default function ConfettiInstallment() {
  const [triggered, setTriggered] = useState(false);
  const canvasInstallRef = useRef<HTMLCanvasElement | null>(null);
  const confettiRef = useRef<ReturnType<typeof confetti.create> | null>(null);

  const handleClick = () => {
    if (!canvasInstallRef.current) return;

    // Create a new confetti instance if it doesn't exist
    if (!confettiRef.current) {
      confettiRef.current = confetti.create(canvasInstallRef.current, {
        resize: true,
        useWorker: false // Disable the shared worker
      });
    }

    confettiRef.current({
      particleCount: 100,
      spread: 120,
      origin: { y: 0.6 }
    });
    setTriggered(true);
  };

  const [selected, setSelected] = useState<number | null>(null);

  const handleReset = () => {
    setTriggered(false);
    setSelected(null);

    if (canvasInstallRef.current) {
      const ctx = canvasInstallRef.current.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvasInstallRef.current.width, canvasInstallRef.current.height);
      }
    }
  };

  return (
    <div className='grid max-w-7xl grid-cols-1 overflow-hidden rounded-xl border border-gray-300 md:grid-cols-2'>
      {/* Left Side */}
      <div className='flex flex-col justify-center gap-4 p-6'>
        <h2 className='text-3xl font-bold text-white'>
          Installment payments to increase convenience and flexibility
        </h2>
        <p className='text-white'>
          Your customers can buy now and pay over the long term with instalment plans created for instant
          approval and 0% interest.
        </p>
      </div>

      {/* Right Side */}
      <div className='bg-gradient-4 relative flex min-h-[300px] items-center justify-center'>
        <canvas
          ref={canvasInstallRef}
          className='pointer-events-none absolute top-0 left-0 h-full w-full'
          width={window.innerWidth}
          height={window.innerHeight}
        />
        {!triggered ? (
          <>
            <div className='flex flex-col items-center gap-4 p-6'>
              <p className='text-sm text-gray-500'>Choose a plan and pay</p>

              <div className='flex gap-4'>
                {plans.map((plan) => (
                  <button
                    key={plan}
                    onClick={() => {
                      handleClick();
                      setSelected(plan);
                    }}
                    className={`-md cursor-pointer rounded px-6 py-3 text-lg font-medium transition-all ${
                      selected === plan
                        ? 'scale-105 bg-lime-400 text-white'
                        : 'bg-lime-300 text-black hover:bg-lime-300'
                    }`}
                  >
                    {plan} mo.
                  </button>
                ))}
              </div>

              <div className='mt-4 text-center'>
                <p className='text-sm text-gray-300'>Your installment payment per month</p>
                <p className='text-2xl font-semibold text-gray-300'>0.00 EUR</p>
              </div>
            </div>
          </>
        ) : (
          <div className='z-10 text-center'>
            <p className='gradient-text-2 mb-5 text-xl font-semibold text-white'>🎉 Success!</p>
            {selected && (
              <p className='mt-2 text-sm text-gray-300'>
                Plan selected: <strong className='gradient-text-2'>{selected} months</strong>
              </p>
            )}
            <div className='mt-4 text-center'>
              <p className='text-sm text-gray-300'>Your installment payment per month</p>
              <p className='text-2xl font-semibold text-gray-300'>0.00 EUR</p>
            </div>
          </div>
        )}

        {triggered && (
          <button
            onClick={handleReset}
            className='absolute right-4 bottom-4 z-10 cursor-pointer rounded-full bg-black/30 p-2 text-white hover:bg-black/50'
            aria-label='Reset'
          >
            <RotateCcw className='h-5 w-5' />
          </button>
        )}
      </div>
    </div>
  );
}
