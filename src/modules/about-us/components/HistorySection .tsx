'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
const HistorySection = () => {
  const years = [2019, 2020, 2021, 2022, 2023];
  const [activeYear, setActiveYear] = useState(2019);

  const timelineData: Record<
    number,
    {
      title: string;
      description: string;
      illustration: string;
    }
  > = {
    2019: {
      title: '2019',
      description: 'Our Co-founders Reece James and Phil Jones launch SmashPay',
      illustration: '/about-us/history-ribben.png'
    },
    2020: {
      title: '2020',
      description: 'We expanded into new markets and doubled our team size.',
      illustration: '/about-us/history-ribben.png'
    },
    2021: {
      title: '2021',
      description: 'Launched mobile app and crossed 1 million users.',
      illustration: '/about-us/history-ribben.png'
    },
    2022: {
      title: '2022',
      description: 'Won Fintech Award and improved infrastructure.',
      illustration: '/about-us/history-ribben.png'
    },
    2023: {
      title: '2023',
      description: 'Started global partnerships with financial institutions.',
      illustration: '/about-us/history-ribben.png'
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={containerVariants}
      className='bg-bg bg-clr-14 relative flex flex-col items-center justify-start gap-16 self-stretch overflow-hidden pt-24 pb-24'
    >
      <div className='relative flex w-full max-w-7xl flex-col items-center justify-start gap-3 px-8'>
        <motion.div
          className='relative flex flex-col items-center justify-start gap-10 self-stretch'
          variants={containerVariants}
        >
          <motion.div
            className='relative flex w-full max-w-[800px] flex-col items-center justify-start gap-6'
            variants={itemVariants}
          >
            <h2
              className='self-stretch text-center text-4xl leading-tight font-medium md:text-5xl'
              style={{
                background: 'linear-gradient(180deg, rgba(123, 125, 129, 1) 0%, rgba(255, 255, 255, 1) 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-2px'
              }}
            >
              Our history
            </h2>
            <p className='self-stretch text-center text-lg leading-normal font-normal tracking-[-0.25px] text-gray-300'>
              See how SmashPay has grown our global presence, community and product line over time.
            </p>
          </motion.div>

          <motion.div
            className='relative flex flex-row flex-wrap items-center justify-center gap-3 self-stretch'
            variants={containerVariants}
          >
            {years.map((year) => (
              <motion.div
                key={year}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => setActiveYear(year)}
                  className={`border-stroke-2 flex cursor-pointer items-center justify-center rounded-[40px] border px-[18px] py-2.5 ${
                    activeYear === year
                      ? 'bg-gradient-to-r from-[#1D1F2D] to-[#1D1F2E] text-white'
                      : 'gradient-text-2'
                  }`}
                >
                  <span className='text-base leading-normal font-semibold tracking-[-0.25px]'>{year}</span>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className='relative flex w-full max-w-7xl flex-row items-start justify-start gap-24 px-8'>
        <motion.div
          className='relative flex w-full flex-col items-center justify-start gap-10 self-stretch'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          key={activeYear}
        >
          <div className='relative flex flex-row items-start justify-center gap-5'>
            <div className='bg-stroke-2 bg-clr-4c relative flex h-[480px] w-full flex-col items-center justify-start gap-10 overflow-hidden rounded-[32px]'>
              <div className='relative flex h-[118px] w-80 flex-col items-center justify-start gap-3 pt-8'>
                <h3 className='self-stretch text-center text-2xl leading-tight font-medium tracking-[-1.5px] text-white'>
                  {timelineData[activeYear].title}
                </h3>
                <p className='flex-1 self-stretch text-center text-lg leading-normal font-normal tracking-[-0.25px] text-white'>
                  {timelineData[activeYear].description}
                </p>
              </div>
              <div className='relative h-[290px] self-stretch'>
                <div className='bg-clr relative flex h-[290px] w-full items-center justify-center rounded-2xl'>
                  <Image
                    src={timelineData[activeYear].illustration}
                    alt={`Illustration for ${activeYear}`}
                    width={400}
                    height={240}
                    className='h-auto w-auto object-contain'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='relative flex flex-row items-start justify-start gap-3'>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='border-stroke-2 flex items-center justify-center rounded-[22px] border p-2.5'
              onClick={() => {
                const currentIndex = years.indexOf(activeYear);
                if (currentIndex > 0) setActiveYear(years[currentIndex - 1]);
              }}
            >
              <HiChevronLeft className='h-6 w-6 text-white' />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='border-stroke-2 flex items-center justify-center rounded-[22px] border bg-gradient-to-r from-[#1D1F2D] to-[#1D1F2E] p-2.5'
              onClick={() => {
                const currentIndex = years.indexOf(activeYear);
                if (currentIndex < years.length - 1) setActiveYear(years[currentIndex + 1]);
              }}
            >
              <HiChevronRight className='h-6 w-6 text-white' />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HistorySection;
