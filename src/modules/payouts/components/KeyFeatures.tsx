'use client';

import ReusableInfoCard from '@/shared/components/ReusableInfoCard';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const KeyFeatures = () => {
  return (
    <section className='bg-clr-14 w-full px-4 py-16 text-white md:py-20 lg:py-24'>
      <motion.header
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, margin: '-100px' }}
        variants={container}
        className='mx-auto mb-12 max-w-3xl text-center md:mb-16 lg:mb-20'
      >
        <motion.h2
          className='text-3xl leading-tight font-bold md:text-4xl lg:text-5xl'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
          }}
          viewport={{ once: true }}
        >
          Key <mark className='bg-transparent text-gray-200'>features</mark> and{' '}
          <mark className='bg-transparent text-gray-200'>benefits</mark>
        </motion.h2>
        <motion.p
          className='mt-4 text-base text-gray-300 md:text-lg'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.6 }
          }}
          viewport={{ once: true }}
        >
          Discover how our offerings empower your business with flexibility, scalability, and innovation.
        </motion.p>
      </motion.header>
      <div className='bg-clr-14 w-full'>
        <div className=''>
          <ReusableInfoCard
            heading='Global and local reach'
            subheading='Scale payouts in APAC, LATAM, Africa, Europe, and India through a single API integration.'
            image='/payouts/second-card-image.png'
            imageAlt='Mobile payment illustration'
            imageLeft={true}
          />
          <ReusableInfoCard
            heading='Improve customer and workforce experience'
            subheading='Send payments through local and global APMs, major card schemes, bank transfers, e-wallets, and instant payment rails to your workforce in new markets.'
            image='/smashpay/image1.png'
            imageAlt='Mobile payment illustration'
          />
          <ReusableInfoCard
            heading='Secure and compliant globally'
            subheading='In-house transaction and fraud monitoring to deliver you the highest level of payout experience.'
            image='/smashpay/image0.png'
            imageAlt='Mobile payment illustration'
            imageLeft={true}
          />
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
