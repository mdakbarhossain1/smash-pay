'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const CryptoHero = () => {
  return (
    <div className='relative w-full overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white'>
      {/* Overlay */}
      <div className='absolute inset-0 z-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/30' />

      <div className='relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8'>
        <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2'>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='mb-6 text-4xl leading-tight font-bold md:text-6xl'>
              The Future of{' '}
              <span className='bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'>
                Crypto
              </span>{' '}
              is Here
            </h1>
            <p className='mb-8 text-lg text-gray-300 md:text-xl'>
              Experience seamless crypto trading with zero fees, instant transactions, and military-grade
              security. Join the revolution with our next-generation platform.
            </p>

            <div className='flex flex-col gap-4 sm:flex-row'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 font-medium text-white shadow-lg transition-all hover:shadow-xl'
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='rounded-lg border-2 border-purple-500 px-8 py-3 font-medium text-white transition-all hover:bg-purple-900/30'
              >
                Learn More
              </motion.button>
            </div>

            {/* Stats */}
            <div className='mt-12 mr-auto grid grid-cols-3 gap-4'>
              <div>
                <div className='text-3xl font-bold text-purple-400'>$10B+</div>
                <div className='text-sm text-gray-400'>24h Volume</div>
              </div>
              <div>
                <div className='text-3xl font-bold text-pink-400'>500+</div>
                <div className='text-sm text-gray-400'>Assets Listed</div>
              </div>
              <div>
                <div className='text-3xl font-bold text-white'>10M+</div>
                <div className='text-sm text-gray-400'>Users</div>
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='relative h-80 w-full md:h-[500px]'
          >
            <Image
              src='/crypto/bitcoin-3d-man.png'
              alt='Crypto trading interface'
              fill
              className='object-contain'
              priority
            />

            {/* Floating Bitcoin */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className='absolute top-20 left-0 h-16 w-16'
            >
              <Image
                src='/crypto/logos/BTC.svg'
                alt='Bitcoin floating'
                width={64}
                height={64}
                className='h-full w-full'
              />
            </motion.div>

            {/* Floating Ethereum */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5
              }}
              className='absolute right-10 bottom-20 h-12 w-12'
            >
              <Image
                src='/crypto/logos/ETH.svg'
                alt='Ethereum floating'
                width={48}
                height={48}
                className='h-full w-full'
              />
            </motion.div>

            {/* Floating Solana */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className='absolute top-0 right-1/2 h-12 w-12'
            >
              <Image
                src='/crypto/logos/SOL.svg'
                alt='Solana floating'
                width={40}
                height={40}
                className='h-full w-full'
              />
            </motion.div>

            {/* Floating Tether */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.3
              }}
              className='absolute bottom-10 left-10 h-12 w-12'
            >
              <Image
                src='/crypto/logos/USDT.svg'
                alt='Tether floating'
                width={48}
                height={48}
                className='h-full w-full'
              />
            </motion.div>

            {/* Floating Cardano */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.7
              }}
              className='absolute top-1/5 left-7/8 h-14 w-14'
            >
              <Image
                src='/crypto/logos/DOT.svg'
                alt='Cardano floating'
                width={56}
                height={56}
                className='h-full w-full'
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CryptoHero;
