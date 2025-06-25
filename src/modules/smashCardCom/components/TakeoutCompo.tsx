'use client';

import { motion } from 'framer-motion';
import { default as Image } from 'next/image';
import Link from 'next/link';

type Feature = {
  icon: string;
  title: string;
  description: string;
};
//  { image: '/crypto/smash-pay-green.png' },
//   { image: '/crypto/smash-pay-purple.png' },
//   { image: '/crypto/smash-pay-red.png' }

const features: Feature[] = [
  {
    icon: '/smashpay/bank-note-03-10.svg',
    title: 'No minimum balance',
    description: 'You can use SmashPay card everywhere without minimum balance.'
  },
  {
    icon: '/smashpay/globe-020.svg',
    title: 'Globally Accepted',
    description: 'SmashPay cards takes the hassle-free of using ATMs abroad.'
  }
];

const TakeoutCompo = () => {
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

  const TextSection = (
    <motion.div
      className='relative flex w-full flex-col items-start justify-start gap-10 lg:flex-1'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <motion.div className='flex flex-col items-start justify-start gap-6' variants={itemVariants}>
        <h2 className='text-4xl leading-tight font-bold tracking-tight text-white md:text-5xl lg:text-6xl'>
          Take out up to $200 in cash with no hidden fees
        </h2>
        <p className='text-lg leading-relaxed text-gray-300'>
          You’ll quickly find that we make a great travel companion on all your adventures. Use your card to
          withdraw money anywhere in the world, with no hidden fees or bad exchange rates for spending abroad.
          Spend and enjoy your money internationally with total peace of mind.
        </p>
      </motion.div>

      <motion.div className='flex flex-col gap-6' variants={itemVariants}>
        {features?.map((feature, index) => (
          <motion.div key={index} className='flex items-start gap-5' variants={itemVariants}>
            <div className='flex h-12 w-12 items-center justify-center rounded-full border border-gray-600'>
              <Image src={feature.icon} alt={`${feature.title} icon`} width={24} height={24} />
            </div>
            <div className='flex flex-col'>
              <h3 className='text-xl font-semibold text-white'>{feature.title}</h3>
              <p className='text-gray-300'>{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className='mt-4' variants={itemVariants}>
        <Link href={'/contact-us'}>
          <motion.button
            className='flex cursor-pointer items-center gap-2 rounded-full border border-gray-700 bg-gradient-to-b from-[#151820] to-[#010101] px-6 py-3 text-white transition hover:opacity-90'
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className='text-base font-semibold'>Get started</span>
            <Image src={'/home/arrow-right2.svg'} alt='button icon' width={20} height={20} />
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );

  const ImageSection = (
    <motion.div
      className='bg-gradient w-full max-w-lg rounded-xl p-4 lg:max-w-lg'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-100px' }}
      variants={itemVariants}
    >
      <div className='relative aspect-[580/576] h-auto w-full max-w-[640px]'>
        <Image
          src='/crypto/smash-pay-green.png'
          alt='SmashPay Card'
          fill
          className='object-contain'
          style={{
            boxShadow: '0px 24px 48px -12px rgba(16, 24, 40, 0.18)'
          }}
        />
      </div>
    </motion.div>
  );

  return (
    <section className='bg-clr-14 w-full px-6 py-16 text-white'>
      <div
        className={`mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 lg:flex-row-reverse lg:gap-24`}
      >
        {TextSection}
        {ImageSection}
      </div>
    </section>
  );
};

export default TakeoutCompo;
