'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

type Feature = {
  icon: string;
  text: string;
};

type Props = {
  title: string;
  description: string;
  features: Feature[];
  buttonText: string;
  buttonIcon?: string;
  imageSrc: string;
  imageAlt?: string;
  imageBackgroundColor?: string;
  imageSide?: 'left' | 'right';
};

const ReusableInfoSection: React.FC<Props> = ({
  title,
  description,
  features,
  buttonText,
  buttonIcon = '/home/arrow-right2.svg',
  imageSrc,
  imageAlt = 'Visual mockup',
  imageBackgroundColor = 'bg-gradient-to-b from-[#0c1118] to-[#1d1e2d]',
  imageSide = 'right'
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, when: 'beforeChildren' }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };
  const hasBackground = Boolean(imageBackgroundColor?.trim());

  console.log('Image Background hasBackground:', hasBackground);
  const TextSection = (
    <motion.div
      className='flex w-full flex-col items-start justify-start gap-10 lg:w-1/2'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <motion.h2
        className='bg-gradient-to-b from-[#7b7d81] to-white bg-clip-text text-left text-4xl font-medium tracking-[-2px] text-transparent md:text-5xl lg:text-6xl'
        variants={itemVariants}
        style={{ maxWidth: '540px' }}
      >
        {title}
      </motion.h2>

      <motion.p
        className='w-full text-left text-lg leading-relaxed tracking-[-0.25px] text-gray-300'
        variants={itemVariants}
      >
        {description}
      </motion.p>

      <motion.div
        className='flex w-full flex-col items-start justify-start gap-5'
        variants={containerVariants}
      >
        {features.map((feature, index) => (
          <motion.div key={index} className='flex flex-row items-start gap-3' variants={itemVariants}>
            <div className='relative h-7 w-7 shrink-0'>
              <Image src={feature.icon} alt='' width={28} height={28} className='object-contain' />
            </div>
            <p className='text-left text-lg leading-relaxed tracking-[-0.25px] text-gray-300'>
              {feature.text}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className='flex flex-row items-center gap-4' variants={itemVariants}>
        <button className='flex flex-row items-center gap-2.5 rounded-[64px] border border-[#3c414c] bg-gradient-to-b from-[#151820] to-[#010101] px-8 py-4 transition-opacity hover:opacity-90'>
          <span className='text-lg font-semibold tracking-[-0.25px] text-white'>{buttonText}</span>
          <Image src={buttonIcon} alt='' width={22} height={22} className='object-contain' />
        </button>
      </motion.div>
    </motion.div>
  );

  // const ImageSection = (
  //   <motion.div
  //     className='relative flex w-full flex-col items-center justify-start lg:w-1/2'
  //     initial='hidden'
  //     whileInView='visible'
  //     viewport={{ once: true, margin: '-100px' }}
  //     variants={imageVariants}
  //   >
  //     <div
  //       className={`relative aspect-[640/720] w-full max-w-[640px] overflow-hidden rounded-[32px] ${imageBackgroundColor}`}
  //     >
  //       <div className='absolute top-20 left-1/2 w-full max-w-[384px] -translate-x-1/2'>
  //         <Image src={imageSrc} alt={imageAlt} width={345.94} height={746.5} className='object-cover' />
  //       </div>
  //     </div>
  //   </motion.div>
  // );

  const ImageSection = (
    <motion.div
      className='relative flex w-full flex-col items-center justify-start lg:w-1/2'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-100px' }}
      variants={imageVariants}
    >
      <div
        className={`relative overflow-hidden rounded-[32px] ${
          hasBackground
            ? `aspect-[640/720] w-full max-w-[640px] ${imageBackgroundColor}`
            : 'h-[592px] w-[640px]'
        }`}
      >
        <div
          className={`absolute inset-0 left-1/2 w-full max-w-[384px] -translate-x-1/2 ${hasBackground ? 'top-20' : 'top-0 h-[592px] w-[640px]'}`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={hasBackground ? 345.94 : undefined}
            height={hasBackground ? 746.5 : undefined}
            fill={!hasBackground}
            className='object-contain'
          />
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className='mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-12 px-8 lg:flex-row lg:gap-24'>
      {imageSide === 'left' ? (
        <>
          {ImageSection}
          {TextSection}
        </>
      ) : (
        <>
          {TextSection}
          {ImageSection}
        </>
      )}
    </div>
  );
};

export default ReusableInfoSection;
