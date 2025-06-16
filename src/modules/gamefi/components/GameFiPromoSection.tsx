'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const GameFiPromoSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className='relative w-full overflow-hidden'>
      {/* Static Background Image */}
      <div className='absolute inset-0 -z-10 h-full w-full'>
        <Image
          src='/crypto/cyberpunk-unsplash.jpg'
          alt='GameFi Background'
          fill
          className='object-cover'
          sizes='100vw'
          priority
        />
        {/* Dark Overlay */}
        <div className='absolute inset-0 bg-black/60'></div>
      </div>

      {/* Main Content */}
      <div className='relative z-10 flex min-h-screen items-center justify-center px-4 py-20 text-center md:py-0'>
        <motion.div
          className='mx-auto max-w-4xl'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.h1
            className='mb-6 text-4xl leading-tight font-bold text-white md:text-6xl lg:text-7xl'
            variants={itemVariants}
          >
            SUPERCHARGE YOUR IN‑GAME{' '}
            <motion.span
              className='bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'
              variants={itemVariants}
            >
              ECONOMIES
            </motion.span>
          </motion.h1>

          <motion.p
            className='mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl'
            variants={itemVariants}
          >
            With the most comprehensive crypto payment stack in the world. There is no need to cherry-pick
            providers and wait for multiple people to return your emails.
          </motion.p>

          <motion.div variants={itemVariants}>
            <button
              className='rounded-full bg-gradient-to-r px-8 py-3 font-semibold text-white transition-opacity hover:opacity-90'
              style={{
                background: 'linear-gradient(180deg, rgba(21, 24, 32, 1) 0%, rgba(1, 1, 1, 1) 100%)'
              }}
            >
              Get Started
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Disclaimer */}
      <div className='absolute right-0 bottom-4 left-0 z-10 text-center text-xs text-gray-400'>
        The course indicated in the widget is not real
      </div>
    </section>
  );
};

export default GameFiPromoSection;
