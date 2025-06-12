'use client';
import { motion } from 'framer-motion';

interface StatItem {
  value: string;
  label: string;
}

const StatsSection = () => {
  const stats: StatItem[] = [
    { value: '10m+', label: 'Personal users' },
    { value: '200k+', label: 'Business users' },
    { value: '150+', label: 'Countries and regions' },
    { value: '35+', label: 'In-app currencies' }
  ];

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
      className='relative flex shrink-0 flex-col items-center justify-start gap-16 self-stretch overflow-hidden pt-24 pb-24'
      style={{
        background: 'linear-gradient(90deg, rgba(29, 31, 45, 1) 0%, rgba(29, 31, 46, 1) 100%)'
      }}
    >
      <div className='relative flex w-full max-w-7xl flex-col items-start justify-start gap-8 px-8'>
        <motion.div
          className='relative flex shrink-0 flex-col items-center justify-start gap-16 self-stretch'
          variants={containerVariants}
        >
          <motion.div
            className='relative grid shrink-0 grid-cols-1 items-start justify-center gap-8 self-stretch sm:grid-cols-2 lg:grid-cols-4'
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className='relative flex flex-1 flex-col items-center justify-start gap-5'
              >
                <div className='relative flex shrink-0 flex-col items-center justify-start gap-3 self-stretch'>
                  <motion.div
                    className='relative self-stretch text-center text-4xl leading-tight font-medium tracking-[-2px] text-white md:text-5xl'
                    whileHover={{ scale: 1.05 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className='relative self-stretch text-center text-lg leading-normal font-normal tracking-[-0.25px] text-white'>
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StatsSection;
