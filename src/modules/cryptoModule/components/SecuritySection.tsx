'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface CryptoItem {
  id: number;
  username: string;
  symbol: string;
  price: string;
  image: string;
  trend: 'up' | 'down';
}

const SecuritySection = () => {
  // Crypto data
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

  // Animation variants for the ticker
  const tickerVariants = {
    animate: {
      x: ['0%', '-60%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30,
          ease: 'linear'
        }
      }
    }
  };

  return (
    <div className='relative z-10 w-full overflow-hidden bg-[#0a0d14] px-4 py-20 text-center md:py-32 lg:px-20'>
      {/* Background Circles */}
      <div className='absolute -top-40 -left-40 h-96 w-96 rounded-full bg-green-300/10 blur-3xl' />
      <div className='absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-purple-400/10 blur-3xl' />
      {/* Content section */}
      <div className='m-auto grid h-[500px] max-w-7xl grid-cols-1 items-center md:grid-cols-2'>
        <div className='relative z-10 mx-auto max-w-6xl px-4 py-12'>
          <div className='mb-8 text-start'>
            {/* Badge */}
            <div className='mb-4 inline-block rounded-md border border-purple-200/20 bg-purple-100/10 px-3 py-1 text-sm backdrop-blur-[20px]'>
              <span className='bg-gradient-to-r from-[#BFA2F6] to-[#50F8E4] bg-clip-text text-transparent'>
                SECURITY
              </span>
            </div>

            {/* Heading */}
            <h2 className='mb-4 text-4xl font-bold text-white'>Decentralized Data Security</h2>

            {/* Description */}
            <p className='mb-8 max-w-2xl text-lg text-gray-300'>
              Our blockchain-based system ensures that your data is secure, <br /> tamper-proof, and fully
              decentralized.
            </p>

            {/* Button */}
            <a
              href='https://ckurt.lemonsqueezy.com/buy/8fa1f143-8036-49b3-bcb8-9a296ef37d87'
              className='inline-block rounded-xl bg-teal-300 px-6 py-3 font-medium text-teal-900 transition-colors hover:bg-teal-200'
              rel='noopener'
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Crypto ticker */}
        <div
          className='relative flex h-full w-full items-center overflow-hidden rounded-lg'
          style={{ background: 'var(--token-1b1d229e-ea68-4af5-b23e-bb03c92b8dd1, #161922)' }}
        >
          <motion.div
            className='absolute flex items-center gap-4'
            variants={tickerVariants}
            animate='animate'
          >
            {/* Duplicate items for seamless looping */}
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
                  <h4 className='text-xl font-bold'>{item.price}</h4>
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
      </div>
    </div>
  );
};

export default SecuritySection;
