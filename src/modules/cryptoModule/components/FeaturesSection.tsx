'use client';

import { motion } from 'framer-motion';
import FeatureTabs from './FeatureTabs';

const FeaturesSection = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='bg-gradient flex w-full flex-col items-center px-4 py-16 text-center md:py-24 lg:py-32'
      >
        {/* Header Box with border and blur */}
        <motion.div
          className='mb-6 rounded-lg border border-[rgba(191,162,246,0.2)] bg-[rgba(191,162,246,0.1)] px-6 py-4 backdrop-blur-xl'
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className='bg-gradient-to-r from-[rgb(191,162,246)] to-[rgb(80,248,228)] bg-clip-text text-sm font-semibold tracking-wide text-transparent'>
            TAB CONTENT SECTION
          </p>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          className='mb-4 text-3xl font-bold text-white md:text-4xl'
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Features and Innovations
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className='max-w-2xl text-base text-gray-300 md:text-lg'
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Discover the innovative features our product offers. Each one is designed to provide you with the
          best experience by leveraging the power of blockchain technology.
        </motion.p>
        <FeatureTabs />
      </motion.section>
    </>
  );
};

export default FeaturesSection;
