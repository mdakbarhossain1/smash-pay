'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhySmashPay = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const featureItems = [
    {
      title: 'Fast, reliable transfers',
      description: 'Get same-day transfers on most major currencies.',
      icon: '/home/Reporting-and-data2.png'
    },
    {
      title: 'Global coverage',
      description: 'Collect and pay like a local, hold up to 35 currencies.',
      icon: `/home/Global-coverage3.png`
    },
    {
      title: 'Bank-beating rates',
      description: 'SmashPay exchange rate are cheaper than bank.',
      icon: `/home/Reporting-and-data1.png`
    },
    {
      title: 'Secure & Trusted',
      description: 'Our security is based on the highest international standards.',
      icon: ` /home/Secured-and-trusted2.png`
    }
  ];

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className='relative w-full overflow-hidden py-16 md:py-32'
      style={{
        background: 'linear-gradient(90deg, rgba(29, 31, 45, 1) 0%, rgba(29, 31, 46, 1) 100%)'
      }}
    >
      <div className='mx-auto flex max-w-7xl flex-col gap-12 px-4 md:gap-24 md:px-8'>
        {/* Header Section */}
        <motion.div className='flex flex-col items-start gap-6 md:gap-5' variants={itemVariants}>
          <div className='flex flex-col items-start gap-0'>
            <motion.h3 className='text-lg font-medium text-white md:text-xl' variants={itemVariants}>
              Why SmashPay?
            </motion.h3>
            <motion.div
              className='mt-1 h-[3px] w-[120px]'
              style={{
                background:
                  'linear-gradient(112.59deg, rgba(55, 66, 93, 1) 0%, rgba(29, 33, 41, 1) 50.06%, rgba(41, 40, 60, 1) 100%)'
              }}
              variants={itemVariants}
            />
          </div>

          <motion.h2
            className='bg-gradient-to-b from-gray-400 to-white bg-clip-text text-left text-3xl leading-tight font-medium text-transparent md:text-5xl lg:text-6xl'
            variants={itemVariants}
          >
            We are the best international <br /> money transfer provider
          </motion.h2>

          <motion.p className='max-w-[760px] text-lg text-gray-300 md:text-xl' variants={itemVariants}>
            Fast, flexible and secure international money transfers across the world.
          </motion.p>

          <motion.button
            className='mt-4 flex items-center gap-2.5 rounded-[64px] border border-[#3c414c] px-6 py-4 md:px-8'
            style={{
              background: 'linear-gradient(180deg, rgba(21, 24, 32, 1) 0%, rgba(1, 1, 1, 1) 100%)'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            <span className='bg-gradient-to-b from-gray-400 to-white bg-clip-text text-lg font-semibold text-transparent'>
              Create account
            </span>
            <img className='relative h-5 w-5 shrink-0 overflow-visible' src='/home/arrow-right0.svg' />
          </motion.button>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className='grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-4'
          variants={containerVariants}
        >
          {featureItems.map((feature, index) => (
            <motion.div key={index} className='flex flex-col items-start gap-6' variants={itemVariants}>
              <div className='relative h-20 w-20'>
                <div className='absolute inset-0 rounded-full border border-gray-600 opacity-20' />
                <div className='absolute inset-2 rounded-full border border-gray-600 opacity-20' />
                <div className='absolute inset-0 flex items-center justify-center text-white'>
                  <img
                    className='absolute top-[0.62%] right-[0.62%] bottom-[0.62%] left-[0.62%] h-[98.75%] w-[98.75%] overflow-visible'
                    src={`${feature.icon}`}
                  />
                </div>
              </div>

              <div className='flex flex-col gap-3'>
                <h3 className='bg-gradient-to-b from-gray-400 to-white bg-clip-text text-xl font-medium text-transparent md:text-2xl'>
                  {feature.title}
                </h3>
                <p className='text-base text-gray-400 md:text-lg'>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WhySmashPay;
