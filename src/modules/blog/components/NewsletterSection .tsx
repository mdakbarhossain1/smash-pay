'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Submitted email:', email);
  };

  return (
    <section className='flex w-full flex-col items-center justify-center gap-2.5 overflow-hidden bg-gradient-to-b from-[#0C1118] to-[#1D1E2D] px-8 py-32 md:px-20'>
      <div className='flex w-full max-w-[1280px] flex-col items-start justify-between gap-8 md:flex-row md:gap-16'>
        {/* Newsletter Content */}
        <motion.div
          className='flex flex-1 flex-col gap-10'
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-6'>
              <div className='relative h-14 w-14'>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <Image src={'/blog/message-icon.png'} alt='message icon' width={56} height={56} />
                </div>
              </div>
              <h2 className='text-4xl leading-tight font-medium tracking-[-2px] text-white md:text-5xl lg:text-6xl'>
                Subscribe to our <span className='text-[#c3f53c]'>newsletter</span>
              </h2>
            </div>
            <p className='text-lg leading-relaxed tracking-[-0.25px] text-gray-300 md:text-xl'>
              Get the latest SmashPay news, releases and tips, interesting articles, and exclusive interviews
              in your email every week.
            </p>
          </div>

          <form onSubmit={handleSubmit} className='mx-auto w-full max-w-3xl'>
            {/* Mobile version (separate borders) */}
            <div className='flex flex-col gap-3 md:hidden'>
              <motion.div
                className='border-stroke-2 overflow-hidden rounded-[32px] border'
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <div className='flex w-full items-center rounded-lg bg-gradient-to-r from-[#1D1F2D] to-[#1D1F2E] px-4 py-3'>
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email address'
                    className='w-full bg-transparent text-base text-gray-500 placeholder-gray-500 outline-none'
                    required
                  />
                </div>
              </motion.div>

              <motion.button
                type='submit'
                className='border-stroke-2 bg-bg bg-clr-14 w-full rounded-[32px] border px-6 py-3 text-base font-semibold whitespace-nowrap text-white'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>

            {/* Desktop version (original design) */}
            <motion.div
              className='border-stroke-2 hidden w-full overflow-hidden rounded-[72px] border md:block'
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <div className='flex w-full flex-col'>
                <div className='border-stroke-2 w-full border-b'>
                  <div className='flex w-full flex-col items-center gap-3 rounded-lg bg-gradient-to-r from-[#1D1F2D] to-[#1D1F2E] p-1.5 md:flex-row'>
                    <div className='flex w-full items-center px-6 py-3'>
                      <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email address'
                        className='w-full bg-transparent text-lg text-gray-500 placeholder-gray-500 outline-none'
                        required
                      />
                    </div>
                    <motion.button
                      type='submit'
                      className='border-stroke-2 bg-bg bg-clr-14 w-full rounded-[64px] border px-8 py-4 text-lg font-semibold whitespace-nowrap text-white md:w-auto'
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Subscribe
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </form>
        </motion.div>

        {/* Email Preview */}
        <motion.div
          className='relative hidden h-[560px] w-full shrink-0 md:block md:w-[560px]'
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className='bg-bg bg-clr-14 absolute right-0 -bottom-10 h-[650px] w-full overflow-hidden rounded-2xl border border-gray-800'>
            {/* Email Header */}
            <div className='relative h-[35.58px] w-full rounded-t-2xl bg-gray-800'>
              <div className='absolute top-3 right-4 flex gap-2'>
                <div className='h-2 w-2 rounded-full bg-gray-500'></div>
                <div className='h-2 w-2 rounded-full bg-gray-500'></div>
                <div className='h-2 w-2 rounded-full bg-gray-500'></div>
              </div>
            </div>

            {/* Email Content */}
            <div className='flex flex-col gap-6 p-8 pb-12'>
              {/* Logo */}
              <div className='relative h-8 w-[181px]'>
                <Image src='/blog/smashpay-logo.png' alt='SmashPay Logo' fill className='object-contain' />
              </div>

              {/* Login Button */}
              <div className='flex justify-end'>
                <button className='border-stroke-2 flex items-center justify-center rounded-[40px] border bg-gradient-to-b from-[#151820] to-[#010101] px-[18px] py-2.5 text-base font-semibold text-white'>
                  Login
                </button>
              </div>

              {/* Featured Image */}
              <div className='relative h-64 w-full overflow-hidden rounded-2xl'>
                <Image src='/blog/smashcard-pay.png' alt='Featured content' fill className='object-cover' />
              </div>

              {/* Email Text */}
              <div className='flex flex-col gap-4 text-gray-300'>
                <h3 className='text-2xl leading-tight font-semibold tracking-tight text-white'>
                  Accept Contactless Payments on iPhone & Android
                </h3>
                <p className='text-base leading-relaxed'>Hello James,</p>
                <p className='text-base leading-relaxed'>
                  We’ve got some big news: <strong className='text-white'>Tap to Pay</strong> is now available
                  on both iPhone and Android through the SmashPay and SmashPay Business apps.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
