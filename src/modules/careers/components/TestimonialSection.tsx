'use client';
import { motion } from 'framer-motion';

const TestimonialSection = () => {
  return (
    <section
      className='relative flex shrink-0 flex-col items-center justify-start gap-16 self-stretch overflow-hidden py-24'
      style={{
        background: 'linear-gradient(180deg, rgba(12, 17, 24, 1) 0%, rgba(29, 30, 45, 1) 100%)'
      }}
    >
      <div className='relative flex w-full max-w-7xl shrink-0 flex-col items-start justify-start gap-8 px-8'>
        <motion.div
          className='relative flex flex-col items-center justify-start gap-16 self-stretch'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className='relative flex w-full shrink-0 flex-col items-center justify-start gap-8 lg:w-[864px]'>
            <motion.h2
              className='gradient-text relative self-stretch text-center text-4xl leading-tight font-semibold md:text-5xl lg:text-6xl'
              style={{
                letterSpacing: '-1.75px'
              }}
            >
              “Everyone at SmashPay thinks about creating the best UI/UX first, then works backward from
              there.”
            </motion.h2>

            <motion.div
              className='relative flex shrink-0 flex-col items-center justify-start gap-1'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p
                className='text-center text-xl leading-snug font-medium text-gray-300 md:text-2xl'
                style={{ letterSpacing: '-0.5px' }}
              >
                Dylan Fletcher
              </p>
              <p
                className='text-center text-base leading-normal text-gray-300 md:text-lg'
                style={{ letterSpacing: '-0.25px' }}
              >
                Senior Product Designer
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
