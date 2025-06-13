import { motion } from 'framer-motion';
import Image from 'next/image';

const PromotionSection = () => {
  return (
    <section className='bg-clr-14 relative flex w-full flex-col items-center justify-start gap-16 overflow-hidden px-4 pt-16 pb-16 md:px-8'>
      <div className='relative mx-auto flex w-full max-w-7xl flex-col items-start justify-start gap-8 px-4 md:px-8'>
        <motion.div
          className='relative flex w-full flex-col items-center justify-between gap-8 overflow-hidden rounded-[32px] p-8 md:p-12 lg:flex-row'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, rgba(63, 66, 77, 1) 0%, rgba(18, 20, 28, 1) 100%)'
          }}
        >
          {/* Text Content */}
          <div className='flex w-full flex-col items-start justify-center gap-10 lg:w-1/2'>
            <div className='flex w-full flex-col items-start justify-start gap-4'>
              <div className='flex w-full flex-col items-start justify-start gap-6'>
                <div className='flex flex-col items-center gap-0 md:items-start'>
                  <h3 className='w-[87px] text-lg font-medium tracking-tight text-white'>Promotion</h3>
                  <div className='border-gradient mt-[-3px] h-0 w-full border-t-[3px] border-r-0 border-b-0 border-l-0 border-solid' />
                </div>
                <h2 className='gradient-text text-3xl leading-tight font-medium tracking-tighter text-transparent md:text-4xl lg:text-5xl'>
                  Get a Zero-fee on your first transfer
                </h2>
              </div>
              <p className='text-lg leading-relaxed tracking-tight text-gray-300'>
                Take advantage of a great introductory rate <br /> on your first transfer. Register now to get
                started!
              </p>
            </div>

            {/* Terms and conditions */}
            <div className='flex flex-row items-center justify-start gap-2'>
              <Image src='/home/info0.svg' alt='Information' width={24} height={24} />
              <span className='text-md tracking-tight text-white underline'>
                Terms and disclosures applied
              </span>
            </div>

            {/* Register Button */}
            <motion.button
              className='flex flex-row items-center justify-center gap-2.5 rounded-[64px] border border-[#3c414c] bg-gradient-to-b from-[#151820] to-[#010101] px-8 py-4 transition-opacity hover:opacity-90'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className='text-lg font-semibold tracking-tight text-white'>Register now</span>
              <Image src='/home/arrow-right13.svg' alt='Arrow right' width={22} height={22} />
            </motion.button>
          </div>

          {/* Image */}
          <div className='relative mt-8 aspect-[528/480] h-auto w-full lg:mt-0 lg:w-1/2'>
            <Image src='/home/rectangle-450.png' alt='Promotion visual' fill className='object-cover' />
          </div>
        </motion.div>

        <style jsx>{`
          .border-gradient {
            border-image: linear-gradient(180deg, rgba(123, 125, 129, 1) 0%, rgba(255, 255, 255, 1) 100%);
            border-image-slice: 1;
          }
        `}</style>
      </div>
    </section>
  );
};

export default PromotionSection;
