'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TrustedBusinessesSection = () => {
  // Logo data with positioning information
  const logoRows = [
    [
      { src: '/business/group1.svg', width: '35.7%', className: 'w-[35.7%] h-[60%]' },
      { src: '/business/g-43870.svg', width: '20%', className: 'w-[20%] h-full' },
      { src: '/business/group2.svg', width: '65.14%', className: 'w-[65.14%] h-[65%]' },
      { src: '/business/group3.svg', width: '46.41%', className: 'w-[46.41%] h-[69.85%]' }
    ],
    [
      { src: '/business/group4.svg', width: '61.88%', className: 'w-[61.88%] h-[75%]' },
      { src: '/business/group5.svg', width: '50.93%', className: 'w-[50.93%] h-[83.83%]' },
      { src: '/business/group-3210.svg', width: '55.33%', className: 'w-[55.33%] h-[85%]' },
      { src: '/business/logo-20.svg', width: 'auto', className: 'h-auto w-auto max-w-[140px]' }
    ]
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section
      className='bg-clr-14 relative -z-20 flex w-full flex-col items-center justify-start gap-16 overflow-hidden py-24'
      style={{ paddingTop: '275px' }}
    >
      <div className='mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 px-8'>
        <motion.div
          className='flex w-full flex-col items-center justify-center gap-16'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Trusted by text */}
          <motion.p
            className='text-md text-center leading-relaxed tracking-[-0.25px] text-white'
            variants={itemVariants}
          >
            Trusted by thousands of businesses.
          </motion.p>

          {/* Logo grid */}
          <motion.div
            className='flex w-full flex-col items-center justify-center gap-10'
            variants={containerVariants}
          >
            {logoRows.map((row, rowIndex) => (
              <motion.div
                key={rowIndex}
                className='flex w-full flex-row flex-wrap items-center justify-center gap-8 px-10 md:gap-14 lg:gap-28'
                variants={containerVariants}
              >
                {row.map((logo, logoIndex) => (
                  <motion.div
                    key={logoIndex}
                    className='relative flex h-10 w-[150px] items-center justify-center sm:w-[180px] md:w-[200px]'
                    variants={itemVariants}
                  >
                    <div className='relative flex h-full w-full items-center justify-center'>
                      <Image
                        src={logo.src}
                        alt={`Trusted business logo ${rowIndex * 4 + logoIndex + 1}`}
                        fill
                        className={`object-contain ${logo.className}`}
                        sizes='(max-width: 640px) 150px, (max-width: 768px) 180px, 200px'
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBusinessesSection;
