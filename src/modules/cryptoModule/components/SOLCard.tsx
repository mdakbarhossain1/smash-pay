// components/SOLCard.tsx
'use client';

import Image from 'next/image';

const SOLCard = () => {
  return (
    <div className='flex w-[200px] flex-col gap-8 overflow-hidden rounded-[10px] border border-[#31353f] bg-[radial-gradient(circle_at_100%_0%,#31353f_0%,rgb(10,13,20)_100%)] p-6 shadow-[0_20px_15px_-11px_rgba(0,0,0,0.25)]'>
      {/* Username */}
      <div className='flex flex-col'>
        <p className='text-sm text-white'>@easypeasy</p>
      </div>

      {/* Image and coin name/price */}
      <div>
        <div className='relative h-[360px] w-[360px] overflow-hidden rounded'>
          <Image
            src='https://framerusercontent.com/images/VTMqkGRQzQlSUGxjz4BofRheJLo.png'
            alt='SOL Token'
            fill
            className='object-cover'
          />
        </div>
        <div className='mt-2 flex flex-col'>
          <p className='text-lg font-semibold text-white'>SOL</p>
        </div>
        <div className='mt-1 flex flex-col'>
          <h4 className='text-xl font-bold text-white'>$7.82</h4>
        </div>
      </div>

      {/* UP Indicator */}
      <div className='flex items-center gap-2'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256' className='h-5 w-5 fill-[#00ff19]'>
          <path d='M240,56v64a8,8,0,0,1-16,0V75.31l-82.34,82.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,212.69,64H168a8,8,0,0,1,0-16h64A8,8,0,0,1,240,56Z' />
        </svg>
        <p className='font-medium text-[#00ff19]'>UP</p>
      </div>
    </div>
  );
};

export default SOLCard;
