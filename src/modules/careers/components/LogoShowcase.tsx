'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const LogoShowcase = () => {
  const logos = [
    { src: '/careers/glassdoor.png', width: 160, height: 48, className: 'left-[25px] top-1 h-auto' },
    { src: '/careers/builtin.png', width: 160, height: 56, className: 'w-[32.32%] h-full left-[33.75%]' },
    { src: '/careers/best-workplace.png', width: 160, height: 48, className: 'left-[23px] top-0 h-auto' },
    { src: '/careers/great-place.png', width: 112, height: 56, className: 'w-[29.37%] h-full left-[35.71%]' },
    {
      src: '/careers/mindful.png',
      width: 160,
      height: 48,
      className: 'w-[58.6%] h-[83.33%] left-[20.62%] top-[8.33%]'
    }
  ];

  return (
    <section className='bg-bg bg-clr-14 relative flex w-full shrink-0 flex-col items-center justify-start gap-16 overflow-hidden py-24'>
      <div className='relative w-full max-w-[1280px] shrink-0 px-8'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='flex w-full flex-col items-center justify-start gap-16'
        >
          {/* Logo Container */}
          <motion.div
            whileInView={{ scale: 1 }}
            initial={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className='flex w-full flex-row flex-wrap items-center justify-center gap-6 md:flex-nowrap'
          >
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className='relative h-12 shrink-0 overflow-hidden md:h-14'
                style={{ width: logo.width, height: logo.height }}
              >
                <Image
                  src={logo.src}
                  alt={`Partner logo ${index + 1}`}
                  fill
                  className={`absolute ${logo.className}`}
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center'
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LogoShowcase;
