'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const StayAheadSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section className='bg-clr-14 w-full'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-20'>
        <motion.div
          className='flex flex-col-reverse items-center justify-between gap-10 lg:flex-row'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {/* Left Content */}
          <motion.div className='w-full lg:w-1/2' variants={fadeInUp}>
            <motion.h3
              className='mb-6 text-3xl leading-tight font-bold text-white sm:text-4xl md:text-5xl'
              variants={fadeInUp}
            >
              Stay ahead of the <span className='text-primary-500'>competition</span>
            </motion.h3>

            <motion.p className='mb-8 max-w-lg text-lg text-gray-300' variants={fadeInUp}>
              Stay ahead of the competition by using the latest payment technology that streamlines the
              payment process, allowing a game publisher to accept more transactions.
            </motion.p>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            className='w-full max-w-md overflow-hidden rounded-xl bg-gray-800 shadow-md lg:w-1/2'
            variants={fadeInUp}
          >
            <div className='relative aspect-video w-full'>
              <Image
                src='/crypto/game-unsplash.jpg'
                alt='Game illustration'
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px'
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StayAheadSection;
