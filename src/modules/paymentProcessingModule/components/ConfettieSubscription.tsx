'use client';

import confetti from 'canvas-confetti';
import { RotateCcw } from 'lucide-react';
import { useRef, useState } from 'react';

const plans = ['Monthly', 'Yearly'];

export default function ConfettiSubscription() {
  const [triggered, setTriggered] = useState(false);
  const canvasSubRef = useRef<HTMLCanvasElement | null>(null);
  const confettiRef = useRef<ReturnType<typeof confetti.create> | null>(null);

  const handleClick = () => {
    if (!canvasSubRef.current) return;

    // Create a new confetti instance if it doesn't exist
    if (!confettiRef.current) {
      confettiRef.current = confetti.create(canvasSubRef.current, {
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

  const [selectedSubscription, setSubscriptionSelected] = useState<string | null>(null);

  const handleReset = () => {
    setTriggered(false);
    setSubscriptionSelected(null);

    if (canvasSubRef.current) {
      const ctx = canvasSubRef.current.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvasSubRef.current.width, canvasSubRef.current.height);
      }
    }
  };

  return (
    <div className='grid max-w-7xl grid-cols-1 overflow-hidden rounded-xl border border-gray-300 md:grid-cols-2'>
      {/* Left Side */}
      <div className='bg-gradient-4 relative flex min-h-[300px] items-center justify-center'>
        <canvas
          ref={canvasSubRef}
          className='pointer-events-none absolute top-0 left-0 h-full w-full'
          width={window.innerWidth}
          height={window.innerHeight}
        />
        {!triggered ? (
          <>
            <div className='flex flex-col items-center gap-4 p-6'>
              <p className='text-sm text-gray-500'>Choose a plan and pay</p>

              <div className='flex w-full flex-col gap-4'>
                {plans.map((plan) => (
                  <button
                    key={plan}
                    onClick={() => {
                      handleClick();
                      setSubscriptionSelected(plan);
                    }}
                    className={`-md cursor-pointer rounded px-6 py-3 text-lg font-medium transition-all ${
                      selectedSubscription === plan
                        ? 'scale-105 bg-[#002c15] text-white'
                        : 'bg-[#002c15] text-white hover:bg-[#002c15]'
                    }`}
                  >
                    {plan}
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
            {selectedSubscription && (
              <p className='mt-2 text-sm text-gray-300'>
                Plan selected: <strong className='gradient-text-2'>{selectedSubscription}</strong>
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
      {/* Right Side */}

      <div className='flex flex-col justify-center gap-4 p-6'>
        <h2 className='text-3xl font-bold text-white'>
          Subscription and recurring payments to optimize cash flow
        </h2>
        <p className='text-white'>
          Subscription payments keep your loyal customer signed up to guarantee cash flow. Manage your
          recurring payments and long-term budgets with advance payments from your customers.
        </p>
      </div>
    </div>
  );
}
