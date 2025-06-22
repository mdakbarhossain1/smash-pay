'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const MultiCurrency = () => {
  const features = ['One account, multiple currencies', 'Regulated & secure', 'Trade on your own terms'];

  return (
    <section className='bg-clr-14 relative flex shrink-0 flex-col items-center justify-start gap-16 self-stretch overflow-hidden px-4 pt-32 pb-32 md:px-8'>
      <div className='flex w-full max-w-7xl flex-col items-center justify-start gap-12 lg:flex-row lg:gap-24'>
        <motion.div
          className='flex w-full flex-col items-start justify-start gap-10 lg:w-1/2'
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className='flex w-full flex-col items-start justify-start gap-6'>
            <div className='flex w-full flex-col items-start justify-start gap-6'>
              <div className='flex flex-col items-center justify-center gap-0'>
                <h3 className='text-lg font-medium tracking-tight text-white'>Multi-currency account </h3>
                <div className='border-gradient h-0 w-full border-t-[3px] border-r-0 border-b-0 border-l-0 border-solid' />
              </div>
              <h2 className='gradient-text text-4xl leading-tight font-medium tracking-tight text-transparent md:text-6xl'>
                One account for <br /> 35+ currencies around the world
              </h2>
            </div>
            <p className='text-lg leading-relaxed tracking-tight text-gray-300'>
              Hold over 35 currencies and exchange to the currency you <br /> need, when you need it.
            </p>
            <div className='flex w-full flex-col items-start justify-start gap-5'>
              {features.map((feature, index) => (
                <div key={index} className='flex w-full flex-row items-start justify-start gap-3'>
                  <div className='relative h-7 w-7 shrink-0 rounded-[14px]'>
                    <Image src={`/home/check-icon0.svg`} alt='Checkmark' width={28} height={28} />
                  </div>
                  <p className='flex-1 text-lg leading-relaxed tracking-tight text-gray-300'>{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <Link href={'/multicurrency-account'}>
            <motion.button
              className='flex cursor-pointer flex-row items-center justify-center gap-2.5 rounded-[64px] border border-[#3c414c] bg-gradient-to-b from-[#151820] to-[#010101] px-8 py-4 transition-opacity hover:opacity-90'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className='gradient-text text-lg font-semibold tracking-tight text-transparent'>
                Learn More
              </span>
              <div className='relative h-[22px] w-[22px]'>
                <img className='relative h-6 w-6 shrink-0 overflow-visible' src='/home/arrow-right0.svg' />
              </div>
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          className='flex w-full flex-col items-center justify-start gap-12 lg:w-1/2'
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className='flex h-full w-full items-center justify-center text-gray-400'>
            <img src='/home/multi-currency-img.svg' alt='' />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .border-gradient {
          border-image: linear-gradient(
            112.59deg,
            rgba(55, 66, 93, 1) 0%,
            rgba(29, 33, 41, 1) 50.06%,
            rgba(41, 40, 60, 1) 100%
          );
          border-image-slice: 1;
          margin-top: -3px;
        }
      `}</style>
    </section>
  );
};

export default MultiCurrency;
