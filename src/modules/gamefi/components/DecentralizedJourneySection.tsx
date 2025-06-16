'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const DecentralizedJourneySection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className='bg-clr-14 w-full'>
      <motion.div
        className='mx-auto max-w-4xl px-4 py-12 text-center md:py-20'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Title */}
        <motion.h2
          className='mb-6 text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl'
          variants={itemVariants}
        >
          Join us as we embark on this journey toward a more decentralized future.
        </motion.h2>

        {/* Content */}
        <motion.p className='mx-auto mb-8 max-w-2xl text-lg text-gray-300' variants={itemVariants}>
          Our comprehensive suite of products and services harnesses the transformative power of blockchain to
          enable secure, transparent, and trustless digital economies.
        </motion.p>

        {/* Button */}
        <motion.div variants={itemVariants}>
          <Link
            href='/contact'
            className='inline-flex items-center justify-center rounded-full border border-gray-700 px-6 py-3 text-sm font-medium text-white shadow-[inset_0_0_4px_2px_rgba(63,63,63,0.25)] transition-colors hover:bg-gray-800 md:text-base'
            style={{
              background: 'linear-gradient(180deg, rgba(21, 24, 32, 1) 0%, rgba(1, 1, 1, 1) 100%)'
            }}
          >
            Learn now
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DecentralizedJourneySection;
