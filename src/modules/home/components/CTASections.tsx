'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function CTASections() {
  return (
    <div className='bg-gradient w-full px-5 pt-24 pb-24 md:px-20'>
      <div className='mx-auto max-w-7xl'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='flex flex-col items-center gap-10'
        >
          <div className='flex w-full max-w-4xl flex-col items-center gap-6'>
            <div className='flex flex-col items-center'>
              <span className="relative text-lg font-medium tracking-tight text-white after:mt-[-3px] after:block after:h-px after:w-full after:bg-gradient-to-r after:from-[#37425d] after:via-[#1d2129] after:to-[#29283c] after:content-['']">
                Ready to get started?
              </span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='gradient-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl lg:text-6xl'
            >
              Set up and Save money on your transfers with SmashPay
            </motion.h2>
          </div>

          <Link href='/contact-us'>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='group flex cursor-pointer items-center gap-2.5 rounded-full border border-[#3c414c] bg-gradient-to-b from-[#151820] to-[#010101] px-8 py-4 transition-opacity hover:opacity-90'
            >
              <span className='text-lg font-semibold tracking-tight text-white'>Get started now</span>
              <Image
                src='/home/arrow-right0.svg'
                alt='Arrow right'
                width={22}
                height={22}
                className='transition-transform group-hover:translate-x-1'
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
