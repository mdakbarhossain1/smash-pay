'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type CryptoItem = {
  id: number;
  username: string;
  symbol: string;
  price: string;
  image: string;
  trend: 'up' | 'down';
};

const cryptoItems: CryptoItem[] = [
  {
    id: 1,
    username: '@johnwiik',
    symbol: 'BTC',
    price: '$441.09',
    image: 'https://framerusercontent.com/images/2YK18lIYG6BQf8gfYAGcpC38LY.png',
    trend: 'up'
  },
  {
    id: 2,
    username: '@kurtopsui',
    symbol: 'ETH',
    price: '$8,622.05',
    image: 'https://framerusercontent.com/images/yYVlwNKV3SWLYsLcrGka9peGFY.png',
    trend: 'down'
  },
  {
    id: 3,
    username: '@easypeasy',
    symbol: 'SOL',
    price: '$7.82',
    image: 'https://framerusercontent.com/images/VTMqkGRQzQlSUGxjz4BofRheJLo.png',
    trend: 'up'
  },
  {
    id: 4,
    username: '@almond',
    symbol: 'SUSHI',
    price: '$1,024.91',
    image: 'https://framerusercontent.com/images/otECLEmpLx2FJMtQZkbyRXrbc.png',
    trend: 'down'
  }
];

const tickerVariants = {
  animate: {
    x: ['0%', '-100%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 20,
        ease: 'linear'
      }
    }
  }
};

export default function CryptoTicker() {
  return (
    <div
      className='relative flex h-full w-full items-center overflow-hidden rounded-lg'
      style={{ background: '#161922' }}
    >
      <motion.div className='absolute flex items-center gap-4' variants={tickerVariants} animate='animate'>
        {[...cryptoItems, ...cryptoItems, ...cryptoItems].map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className='h-[150px] w-64 flex-shrink-0 rounded-lg border border-gray-700/50 bg-gray-800/30 p-4 backdrop-blur-[20px]'
          >
            <div className='mb-2 flex items-center justify-between'>
              <p className='text-sm text-gray-400'>{item.username}</p>
              <div className='flex items-center gap-2'>
                <div className='relative h-6 w-6'>
                  <Image src={item.image} alt={item.symbol} fill className='rounded-full object-cover' />
                </div>
                <p className='text-sm font-medium'>{item.symbol}</p>
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <h4 className='text-xl font-bold text-white'>{item.price}</h4>
              <div className='flex items-center gap-1'>
                {item.trend === 'up' ? (
                  <>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 256 256'
                      className='h-4 w-4 text-green-500'
                    >
                      <path
                        fill='currentColor'
                        d='M240,56v64a8,8,0,0,1-16,0V75.31l-82.34,82.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,212.69,64H168a8,8,0,0,1,0-16h64A8,8,0,0,1,240,56Z'
                      />
                    </svg>
                    <span className='text-sm text-green-500'>UP</span>
                  </>
                ) : (
                  <>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 256 256'
                      className='h-4 w-4 text-red-500'
                    >
                      <path
                        fill='currentColor'
                        d='M240,128v64a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h44.69L136,107.31l-34.34,34.35a8,8,0,0,1-11.32,0l-72-72A8,8,0,0,1,29.66,58.34L96,124.69l34.34-34.35a8,8,0,0,1,11.32,0L224,172.69V128a8,8,0,0,1,16,0Z'
                      />
                    </svg>
                    <span className='text-sm text-red-500'>DOWN</span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
