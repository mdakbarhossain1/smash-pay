'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

type OfficeLocation = {
  id: string;
  city: string;
  country: string;
  icon: string;
  background?: string;
  iconPosition?: string;
};

const OfficeLocations = () => {
  const offices: OfficeLocation[] = [
    {
      id: 'yogyakarta',
      city: 'Yogyakarta',
      country: 'Indonesia',
      icon: '/careers/yogyakarta.png'
    },
    {
      id: 'san-fransisco',
      city: 'San Fransisco',
      country: 'United States',
      icon: '/careers/san-francisco.png'
    },
    {
      id: 'london',
      city: 'London',
      country: 'United Kingdom',
      icon: '/careers/london.png'
    },
    {
      id: 'berlin',
      city: 'Berlin',
      country: 'Germany',
      icon: '/careers/Berlin.png'
    },
    {
      id: 'dubai',
      city: 'Dubai',
      country: 'United Arab Emirates',
      icon: '/careers/Dubai.png'
    },
    {
      id: 'paris',
      city: 'Paris',
      country: 'France',
      icon: '/careers/Paris.png'
    },
    {
      id: 'beijing',
      city: 'Beijing',
      country: 'China',
      icon: '/careers/beijing.png'
    },
    {
      id: 'singapore',
      city: 'Singapore',
      country: 'Singapore',
      icon: '/careers/singapore.png'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className='bg-bg bg-clr-14 relative flex shrink-0 flex-col items-center justify-start gap-16 self-stretch overflow-hidden pt-32 pb-32'>
      <div className='relative flex w-full max-w-7xl flex-col items-start justify-start gap-24 rounded-[20px] px-8'>
        {/* Header Section */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className='flex w-full flex-col items-center justify-start gap-10'
        >
          <motion.div
            variants={itemVariants}
            className='flex w-full max-w-[760px] flex-col items-center justify-start gap-6'
          >
            <div className='flex w-full flex-col items-center justify-start gap-6'>
              <div className='relative flex flex-col items-center justify-center gap-0'>
                <div className='relative'>
                  <p className='text-center text-lg leading-tight font-medium tracking-[-0.25px] text-white'>
                    Offices
                  </p>
                </div>
                <div
                  className='relative mt-[-3px] h-0 w-full border-t-[3px] border-r-0 border-b-0 border-l-0 border-solid'
                  style={{
                    borderImage:
                      'linear-gradient(112.59deg, rgba(55, 66, 93, 1) 0%, rgba(29, 33, 41, 1) 50.06%, rgba(41, 40, 60, 1) 100%) 1'
                  }}
                ></div>
              </div>
              <h2
                className='w-full text-center text-5xl leading-tight font-medium tracking-[-2px] md:text-6xl'
                style={{
                  background:
                    'linear-gradient(180deg, rgba(123, 125, 129, 1) 0%, rgba(255, 255, 255, 1) 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Where we're located
              </h2>
            </div>
            <motion.p
              variants={itemVariants}
              className='w-full text-center text-xl leading-normal tracking-[-0.5px] text-gray-300'
            >
              You'll find our talented team spread across the globe.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Offices Grid */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className='flex w-full flex-col items-start justify-start gap-10'
        >
          <div className='flex w-full flex-col items-start justify-start gap-20'>
            {/* First Row */}
            <motion.div
              variants={containerVariants}
              className='grid w-full grid-cols-2 gap-6 md:grid-cols-4 md:gap-10'
            >
              {offices.slice(0, 4).map((office) => (
                <motion.div
                  key={office.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className='flex flex-col items-center justify-start gap-6'
                >
                  <div className='relative h-[120px] w-[120px] overflow-hidden'>
                    <Image
                      src={office.icon}
                      alt={`${office.city} icon`}
                      width={120}
                      height={120}
                      className={`absolute h-auto ${office.iconPosition || 'top-0 left-0'}`}
                    />
                  </div>
                  <div className='flex w-full flex-col items-center justify-start gap-1'>
                    <h3 className='text-center text-xl leading-tight font-medium tracking-[-0.5px] text-white'>
                      {office.city}
                    </h3>
                    <p className='text-center text-base leading-normal tracking-[-0.25px] text-gray-300'>
                      {office.country}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Second Row */}
            <motion.div
              variants={containerVariants}
              className='grid w-full grid-cols-2 gap-6 md:grid-cols-4 md:gap-10'
            >
              {offices.slice(4, 8).map((office) => (
                <motion.div
                  key={office.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className='flex flex-col items-center justify-start gap-6'
                >
                  <div className='relative h-[120px] w-[120px] overflow-hidden'>
                    <Image
                      src={office.icon}
                      alt={`${office.city} icon`}
                      width={120}
                      height={120}
                      className='absolute top-0 left-0 h-auto'
                    />
                  </div>
                  <div className='flex w-full flex-col items-center justify-start gap-1'>
                    <h3 className='text-center text-xl leading-tight font-medium tracking-[-0.5px] text-white'>
                      {office.city}
                    </h3>
                    <p className='text-center text-base leading-normal tracking-[-0.25px] text-gray-300'>
                      {office.country}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfficeLocations;
