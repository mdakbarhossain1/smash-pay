'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CTASupportSection() {
  return (
    <section className='w-full bg-gradient-to-b from-[#0c1118] to-[#1d1e2d] px-5 py-14 md:px-20'>
      <div className='bg-clr-14 mx-auto max-w-7xl rounded-2xl px-6 py-10 md:px-12 md:py-14'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='flex flex-col justify-between gap-6 md:flex-row md:items-center'
        >
          {/* Text Section */}
          <div className='flex flex-col gap-3 text-left'>
            <h3 className='text-2xl font-semibold tracking-tight text-white md:text-3xl'>
              Can't find your answer?
            </h3>
            <p className='text-md text-gray-300'>Our customer support team is here to help.</p>
          </div>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='group mt-2 inline-flex items-center gap-2.5 rounded-full border border-[#3c414c] bg-gradient-to-b from-[#151820] to-[#010101] px-8 py-4 transition-opacity hover:opacity-90'
          >
            <span className='text-lg font-semibold tracking-tight text-white'>Contact Us</span>
            <Image
              src='/home/arrow-right0.svg'
              alt='Arrow right'
              width={22}
              height={22}
              className='transition-transform group-hover:translate-x-1'
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
