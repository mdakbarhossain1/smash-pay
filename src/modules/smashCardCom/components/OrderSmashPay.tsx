'use client';

import { motion } from 'framer-motion';
import { default as Image } from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

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
    icon: '/home/arrow-right2.svg',
    title: 'Create account',
    description: 'Open a free account in minutes.'
  },
  {
    icon: '/home/arrow-right2.svg',
    title: 'Order your card',
    description: 'Order a card for a one-time fee of $12.'
  },
  {
    icon: '/home/arrow-right2.svg',
    title: 'Start using your SmashPay card',
    description: 'Start spending as soon as your card is activated.'
  }
];

const OrderSmashPay = () => {
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
  const paymentMethods = [
    {
      id: 'apm',
      image: '/crypto/smash-pay-green.png',
      alt: 'apm widget'
    },
    {
      id: 'card',
      image: '/crypto/smash-pay-purple.png',
      alt: 'card widget'
    },
    {
      id: 'banktransfer',
      image: '/crypto/smash-pay-red.png',
      alt: 'bank transfer widget'
    },
    {
      id: 'wallet',
      image: '/crypto/smash-pay-green.png',
      alt: 'wallet widget'
    },
    {
      id: 'sepa',
      image: '/crypto/smash-pay-purple.png',
      alt: 'sepa widget'
    }
  ];

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
          Order your SmashPay card in just 5 minutes
        </h2>
        <p className='text-lg leading-relaxed text-gray-300'>
          Enjoy the flexibility of a SmashPay card. Spend anytime, anywhere around the world.
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
      className='bg-gradient w-full max-w-lg rounded-xl lg:max-w-lg'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-100px' }}
      variants={itemVariants}
    >
      <div className='relative flex aspect-[580/576] h-auto w-full max-w-[640px] items-center'>
        <Swiper
          effect='cards'
          grabCursor={true}
          modules={[EffectCards]}
          initialSlide={4}
          className='h-96 w-72 md:w-96'
        >
          {paymentMethods.map((method) => (
            <SwiperSlide
              key={method.id}
              className='flex items-center justify-center rounded-xl bg-white p-6 shadow-lg'
            >
              <img src={method.image} alt={method.alt} className='h-full w-full object-contain' />
            </SwiperSlide>
          ))}
        </Swiper>
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

export default OrderSmashPay;
