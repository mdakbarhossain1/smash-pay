'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const IndustrySolutionsSection = () => {
  const industryCategories = [
    [
      { image: '/business/image5.png', title: 'Accountancy' },
      { image: '/business/image6.png', title: 'E-Commerce' },
      { image: '/business/image7.png', title: 'Financial Institutions' }
    ],
    [
      { image: '/business/image8.png', title: 'Education' },
      { image: '/business/image9.png', title: 'Healthcare' },
      { image: '/business/image10.png', title: 'Travel' }
    ],
    [
      { image: '/business/image11.png', title: 'Manufacturing' },
      { image: '/business/image12.png', title: 'SaaS' },
      { image: '/business/image13.png', title: 'Real Estate' }
    ]
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: 'beforeChildren'
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

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className='relative flex w-full flex-col items-center justify-start gap-16 bg-gradient-to-b from-[#0c1118] to-[#1d1e2d] py-32'>
      <div className='mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-3 px-8'>
        <motion.div
          className='flex w-full flex-col items-center justify-center gap-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div
            className='flex w-full flex-col items-center justify-center gap-6'
            variants={containerVariants}
          >
            <motion.div className='flex flex-col items-center justify-center gap-0' variants={titleVariants}>
              <div className='relative'>
                <span className='text-lg leading-tight font-medium tracking-[-0.25px] text-white'>
                  Industry solutions
                </span>
              </div>
              <div className='mt-[-3px] h-[3px] w-full bg-gradient-to-r from-[#37425d] via-[#1d2129] to-[#29283c]' />
            </motion.div>

            <motion.h2
              className='gradient-text text-center text-4xl leading-tight font-medium tracking-[-2px] text-transparent md:text-5xl lg:text-6xl'
              variants={titleVariants}
            >
              As your business grows, so do our global payment solutions.
            </motion.h2>
          </motion.div>
        </motion.div>
      </div>

      {/* Industry Cards */}
      <motion.div
        className='mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-12 rounded-[20px] px-8'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {industryCategories.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className='flex w-full flex-col items-center justify-center gap-8 md:flex-row'
            variants={containerVariants}
          >
            {row.map((industry, industryIndex) => (
              <motion.div
                key={industryIndex}
                className='flex w-full max-w-[384px] flex-col items-center justify-start gap-4 rounded-[32px]'
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className='relative aspect-[384/260] w-full overflow-hidden rounded-2xl'>
                  <Image
                    src={industry.image}
                    alt={`${industry.title} industry solution`}
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 384px'
                  />
                </div>
                <h3 className='w-full text-left text-xl leading-tight font-medium tracking-[-1px] text-white'>
                  {industry.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default IndustrySolutionsSection;
