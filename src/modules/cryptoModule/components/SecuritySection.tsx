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
      <div className='m-auto grid max-w-7xl grid-cols-1 items-center md:grid-cols-2'>
        <div className='relative z-10 mx-auto max-w-6xl px-4 py-12'>
          <div className='mb-8 text-start'>
            {/* Badge */}
            <div className='mb-4 inline-block rounded-md border border-purple-200/20 bg-purple-100/10 px-3 py-1 text-sm backdrop-blur-[20px]'>
              <span className='bg-gradient-to-r from-[#BFA2F6] to-[#50F8E4] bg-clip-text text-transparent'>
                SECURITY
              </span>
            </div>

            {/* Heading */}
            <h2 className='mb-4 text-5xl font-medium text-white'>Decentralized Data Security</h2>

            {/* Description */}
            <p className='mb-8 max-w-2xl text-lg text-gray-300'>
              Our blockchain-based system ensures that your data is secure, <br /> tamper-proof, and fully
              decentralized.
            </p>

            {/* Button */}
            <a
              href='https://ckurt.lemonsqueezy.com/buy/8fa1f143-8036-49b3-bcb8-9a296ef37d87'
              className='inline-block rounded-lg bg-teal-300 px-6 py-3 font-medium text-black shadow-md transition hover:shadow-lg'
              rel='noopener'
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Crypto ticker */}
        <div
          className='relative ml-auto flex h-[500px] w-full max-w-[600px] items-center gap-5 overflow-hidden rounded-lg'
          style={{ background: 'var(--token-1b1d229e-ea68-4af5-b23e-bb03c92b8dd1, #161922)' }}
        >
          <motion.div className='flex items-center gap-4' variants={tickerVariants} animate='animate'>
            {[...cryptoItems, ...cryptoItems, ...cryptoItems].map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className='flex h-[230px] w-50 flex-shrink-0 gap-10 rounded-lg border border-gray-700/50 bg-gray-800/30 p-4 backdrop-blur-[20px]'
                style={{
                  background:
                    'radial-gradient(99.99999701976785% 99.99999701976785% at 99.99999701976785% 0.0000029802321485639105%, var(--token-3ad3ba9a-ccc2-40b7-8c6f-fc587431b9c3, #31353f) 0%, var(--token-ad1f0f62-7edb-4a0e-83cc-532215fdd7d2, rgb(10, 13, 20)) 100%)'
                }}
              >
                <div className='mb-2 flex flex-col items-start justify-between'>
                  <p className='text-sm text-gray-400'>{item.username}</p>
                  <div className='flex flex-col items-start gap-2'>
                    <div className='flex items-center gap-1'>
                      <div className='relative h-6 w-6'>
                        <Image
                          src={item.image}
                          alt={item.symbol}
                          fill
                          className='rounded-full object-cover'
                        />
                      </div>
                      <p className='text-md font-bold text-white'>{item.symbol}</p>
                    </div>
                    <h4 className='text-3xl font-semibold text-white'>{item.price}</h4>
                  </div>
                  <div className='flex flex-col items-start justify-between'>
                    <div className='flex items-center gap-1'>
                      {item.trend === 'up' ? (
                        <div
                          className='flex w-full items-center gap-1 rounded-sm'
                          style={{ backgroundColor: 'rgba(0, 255, 25, 0.2)', padding: '5px 8px' }}
                        >
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
                        </div>
                      ) : (
                        <div
                          className='flex w-full items-center gap-1 rounded-sm'
                          style={{ backgroundColor: 'rgba(255, 0, 77, 0.2)', padding: '5px 8px' }}
                        >
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
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Content section 2*/}
      <div className='m-auto mt-10 grid max-w-7xl grid-cols-1 items-center md:grid-cols-2'>
        {/* Crypto ticker */}
        <div
          className='relative flex h-[500px] w-full max-w-[600px] items-center gap-5 overflow-hidden rounded-lg'
          style={{ background: 'var(--token-1b1d229e-ea68-4af5-b23e-bb03c92b8dd1, #161922)' }}
        >
          <motion.div className='flex items-center gap-4' variants={tickerVariants} animate='animate'>
            {[...cryptoItems, ...cryptoItems, ...cryptoItems].map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className='flex h-[230px] w-50 flex-shrink-0 gap-10 rounded-lg border border-gray-700/50 bg-gray-800/30 p-4 backdrop-blur-[20px]'
                style={{
                  background:
                    'radial-gradient(99.99999701976785% 99.99999701976785% at 99.99999701976785% 0.0000029802321485639105%, var(--token-3ad3ba9a-ccc2-40b7-8c6f-fc587431b9c3, #31353f) 0%, var(--token-ad1f0f62-7edb-4a0e-83cc-532215fdd7d2, rgb(10, 13, 20)) 100%)'
                }}
              >
                <div className='mb-2 flex flex-col items-start justify-between'>
                  <p className='text-sm text-gray-400'>{item.username}</p>
                  <div className='flex flex-col items-start gap-2'>
                    <div className='flex items-center gap-1'>
                      <div className='relative h-6 w-6'>
                        <Image
                          src={item.image}
                          alt={item.symbol}
                          fill
                          className='rounded-full object-cover'
                        />
                      </div>
                      <p className='text-md font-bold text-white'>{item.symbol}</p>
                    </div>
                    <h4 className='text-3xl font-semibold text-white'>{item.price}</h4>
                  </div>
                  <div className='flex flex-col items-start justify-between'>
                    <div className='flex items-center gap-1'>
                      {item.trend === 'up' ? (
                        <div
                          className='flex w-full items-center gap-1 rounded-sm'
                          style={{ backgroundColor: 'rgba(0, 255, 25, 0.2)', padding: '5px 8px' }}
                        >
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
                        </div>
                      ) : (
                        <div
                          className='flex w-full items-center gap-1 rounded-sm'
                          style={{ backgroundColor: 'rgba(255, 0, 77, 0.2)', padding: '5px 8px' }}
                        >
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
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* right */}
        <div className='relative z-10 mx-auto max-w-7xl px-4 py-12'>
          <div className='mb-8 text-start'>
            {/* Badge */}
            <div className='mb-4 inline-block rounded-md border border-purple-200/20 bg-purple-100/10 px-3 py-1 text-sm backdrop-blur-[20px]'>
              <span className='bg-gradient-to-r from-[#BFA2F6] to-[#50F8E4] bg-clip-text text-transparent'>
                AUTOMATION
              </span>
            </div>

            {/* Heading */}
            <h2 className='mb-8 text-5xl font-medium text-white'>Smart Contract Automation</h2>

            {/* Button */}
            <div className='flex w-full flex-col items-center justify-center gap-6 overflow-hidden'>
              {/* First Info Block */}
              <div className='flex w-full items-start gap-4'>
                <div
                  className='h-10 w-10 flex-shrink-0 rounded-full p-2'
                  style={{
                    background: 'var(--token-7d83949f-a967-48a3-8f07-15e8bd6e7d88, #50f8e4)'
                  }}
                >
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256' fill='currentColor'>
                    <path d='M254.3,107.91L228.78,56.85a16,16,0,0,0-21.47-7.15L182.44,62.13,130.05,48.27a8.14,8.14,0,0,0-4.1,0L73.56,62.13,48.69,49.7a16,16,0,0,0-21.47,7.15L1.7,107.9a16,16,0,0,0,7.15,21.47l27,13.51,55.49,39.63a8.06,8.06,0,0,0,2.71,1.25l64,16a8,8,0,0,0,7.6-2.1l55.07-55.08,26.42-13.21a16,16,0,0,0,7.15-21.46ZM199.41,141.28,165,113.72a8,8,0,0,0-10.68.61C136.51,132.27,116.66,130,104,122L147.24,80h31.81l27.21,54.41ZM41.53,64,62,74.22,36.43,125.27,16,115.06Zm116,119.13L99.42,168.61l-49.2-35.14,28-56L128,64.28l9.8,2.59-45,43.68a16,16,0,0,0,2.72,24.81c20.56,13.13,45.37,11,64.91-5L188,152.66Zm62-57.87-25.52-51L214.47,64,240,115.06Zm-87.75,92.67a8,8,0,0,1-7.75,6.06,8.13,8.13,0,0,1-1.95-.24L80.41,213.33a7.89,7.89,0,0,1-2.71-1.25L51.35,193.26a8,8,0,0,1,9.3-13l25.11,17.94L126,208.24A8,8,0,0,1,131.82,217.94Z' />
                  </svg>
                </div>
                <div>
                  <p className='text-lg font-semibold text-white'>Efficient Agreement Execution</p>
                  <p className='mt-2 text-sm text-white/80'>
                    Transform your vision into reality with effortless customization. Our template adapts to
                    your brand’s personality in a flash, no coding required.
                  </p>
                </div>
              </div>
              <div
                className='h-[1px] w-full'
                style={{
                  background: 'var(--token-0e4ec8d8-4630-423b-9664-60c09b619eeb, #20232d)'
                }}
              ></div>

              {/* Second Info Block */}
              <div className='flex w-full items-start gap-4'>
                <div
                  className='h-10 w-10 flex-shrink-0 rounded-full p-2'
                  style={{
                    background: 'var(--token-7d83949f-a967-48a3-8f07-15e8bd6e7d88, #50f8e4)'
                  }}
                >
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256' fill='currentColor'>
                    <path d='M220.27,158.54a8,8,0,0,0-7.7-.46,20,20,0,1,1,0-36.16A8,8,0,0,0,224,114.69V72a16,16,0,0,0-16-16H171.78a35.36,35.36,0,0,0,.22-4,36.11,36.11,0,0,0-11.36-26.24,36,36,0,0,0-60.55,23.62,36.56,36.56,0,0,0,.14,6.62H64A16,16,0,0,0,48,72v32.22a35.36,35.36,0,0,0-4-.22,36.12,36.12,0,0,0-26.24,11.36,35.7,35.7,0,0,0-9.69,27,36.08,36.08,0,0,0,33.31,33.6,35.68,35.68,0,0,0,6.62-.14V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V165.31A8,8,0,0,0,220.27,158.54ZM208,208H64V165.31a8,8,0,0,0-11.43-7.23,20,20,0,1,1,0-36.16A8,8,0,0,0,64,114.69V72h46.69a8,8,0,0,0,7.23-11.43,20,20,0,1,1,36.16,0A8,8,0,0,0,161.31,72H208v32.23a35.68,35.68,0,0,0-6.62-.14A36,36,0,0,0,204,176a35.36,35.36,0,0,0,4-.22Z' />
                  </svg>
                </div>
                <div>
                  <p className='text-lg font-semibold text-white'>Seamless Process Integration</p>
                  <p className='mt-2 text-sm text-white/80'>
                    Integrate automated processes for streamlined operations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySection;
