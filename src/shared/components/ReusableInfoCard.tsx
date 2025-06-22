'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type Feature = {
  icon: string;
  title: string;
  description: string;
};

type MobilePaySectionProps = {
  heading: string;
  subheading: string;
  features?: Feature[];
  buttonText?: string;
  buttonIcon?: string;
  image: string;
  imageAlt: string;
  imageLeft?: boolean;
};

const ReusableInfoCard = ({
  heading,
  subheading,
  features,
  buttonText,
  buttonIcon,
  image,
  imageAlt,
  imageLeft = false
}: MobilePaySectionProps) => {
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
          {heading}
        </h2>
        <p className='text-lg leading-relaxed text-gray-300'>{subheading}</p>
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

      {buttonText && (
        <motion.div className='mt-4' variants={itemVariants}>
          <Link href={'/contact-us'}>
            <motion.button
              className='flex cursor-pointer items-center gap-2 rounded-full border border-gray-700 bg-gradient-to-b from-[#151820] to-[#010101] px-6 py-3 text-white transition hover:opacity-90'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className='text-base font-semibold'>{buttonText}</span>
              {buttonIcon && <Image src={buttonIcon} alt='button icon' width={20} height={20} />}
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );

  const ImageSection = (
    <motion.div
      className='w-full max-w-lg lg:max-w-md'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-100px' }}
      variants={itemVariants}
    >
      <div className='overflow-hidden rounded-3xl'>
        <Image
          src={image}
          alt={imageAlt}
          width={640}
          height={720}
          className='h-auto w-full object-cover'
          priority
        />
      </div>
    </motion.div>
  );

  return (
    <section className='bg-clr-14 w-full px-6 py-16 text-white'>
      <div
        className={`mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 lg:flex-row lg:gap-24 ${
          imageLeft ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {TextSection}
        {ImageSection}
      </div>
    </section>
  );
};

export default ReusableInfoCard;
