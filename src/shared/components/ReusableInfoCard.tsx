'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Feature = {
  icon: string;
  title: string;
  description: string;
};

type MobilePaySectionProps = {
  heading: string;
  subheading: string;
  features: Feature[];
  buttonText: string;
  buttonIcon: string;
  image: string;
  imageAlt: string;
  imageLeft?: boolean; // If true, image comes before the text
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

  const cardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 }
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
      <motion.div
        className='flex flex-col items-start justify-start gap-8 self-stretch'
        variants={itemVariants}
      >
        <h2 className='bg-gradient-to-b from-[#7B7D81] to-white bg-clip-text text-4xl leading-tight font-medium tracking-[-2px] text-transparent md:text-5xl lg:text-6xl'>
          {heading}
        </h2>
        <p className='text-lg leading-relaxed tracking-[-0.25px] text-gray-300'>{subheading}</p>
      </motion.div>

      <motion.div className='flex flex-col gap-8 self-stretch' variants={itemVariants}>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className='flex flex-row items-start gap-6 rounded-3xl'
            variants={cardVariants}
          >
            <div className='border-stroke-2 border-opacity-20 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border'>
              <Image src={feature.icon} alt={`${feature.title} icon`} width={24} height={24} />
            </div>
            <div className='flex flex-1 flex-col gap-3'>
              <h3 className='text-2xl leading-tight font-medium tracking-[-1px] text-white'>
                {feature.title}
              </h3>
              <p className='text-lg leading-relaxed tracking-[-0.25px] text-gray-300'>
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className='flex items-center gap-4' variants={itemVariants}>
        <motion.button
          className='border-opacity-20 border-stroke-2 flex items-center gap-2.5 rounded-full border bg-gradient-to-b from-[#151820] to-[#010101] px-8 py-4 transition-opacity hover:opacity-90'
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className='text-lg font-semibold tracking-[-0.25px] text-white'>{buttonText}</span>
          <Image src={buttonIcon} alt='button icon' width={22} height={22} />
        </motion.button>
      </motion.div>
    </motion.div>
  );

  const ImageSection = (
    <motion.div
      className='relative flex w-full flex-col items-center justify-start gap-12 lg:w-auto'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-100px' }}
      variants={imageVariants}
    >
      <div className='relative h-auto w-full max-w-[640px] overflow-hidden rounded-3xl lg:h-[720px]'>
        <Image
          src={image}
          alt={imageAlt}
          width={640}
          height={720}
          className='h-full w-full object-cover'
          priority
        />
      </div>
    </motion.div>
  );

  return (
    <div
      className={`relative mx-auto flex w-full max-w-7xl flex-col items-center justify-start gap-12 px-8 py-16 lg:flex-row lg:gap-24 ${
        imageLeft ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {TextSection}
      {ImageSection}
    </div>
  );
};

export default ReusableInfoCard;
