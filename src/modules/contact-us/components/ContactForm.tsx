'use client';
import { fadeIn, staggerContainer } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ContactForm = () => {
  const socialIcons: Record<string, string> = {
    facebook: '/contact-us/fb_Social icon.png',
    twitter: '/contact-us/twitter_Social icon.png',
    instagram: '/contact-us/instagram_Social icon.png',
    youtube: '/contact-us/youtube_Social icon.png'
  };

  return (
    <motion.section
      variants={staggerContainer(0.1, 0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className='relative flex shrink-0 flex-col items-center justify-center gap-16 self-stretch px-4 pt-24 pb-32 sm:px-6 lg:px-8'
      style={{
        background: 'linear-gradient(180deg, rgba(12, 17, 24, 1) 0%, rgba(29, 30, 45, 1) 100%)'
      }}
    >
      <div className='relative flex w-full max-w-[1280px] flex-col items-center justify-center gap-16 lg:flex-row lg:gap-24'>
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className='flex w-full flex-1 flex-col items-start justify-start gap-10 lg:max-w-[512px]'
        >
          <div className='flex w-full flex-col items-start justify-start gap-6'>
            <div className='flex w-full flex-col items-start justify-start gap-6'>
              <h2 className='bg-gradient-to-b from-gray-500 to-white bg-clip-text text-left text-5xl leading-tight font-medium tracking-tight text-transparent sm:text-6xl md:text-7xl'>
                Contact us
              </h2>
            </div>
            <p className='w-full text-left text-xl leading-relaxed tracking-tight text-gray-300'>
              Tell us a bit about yourself, and we'll tell you a lot more about us.
            </p>
          </div>

          <div className='flex w-full flex-col items-start justify-start gap-8 md:flex-row'>
            <motion.div
              whileHover={{ y: -5 }}
              className='border-stroke-2 flex w-full flex-1 flex-col items-start justify-start gap-6 rounded-2xl border bg-gradient-to-r from-gray-900 to-gray-900/95 p-6'
            >
              <div className='relative h-12 w-12 shrink-0'>
                <Image
                  src='/contact-us/question.svg'
                  alt='Contact Question Message'
                  layout='fill'
                  objectFit='contain'
                />
              </div>
              <div className='flex w-full flex-col items-start justify-start gap-3'>
                <h3 className='text-left text-lg leading-relaxed font-medium tracking-tight text-white'>
                  Have a questions?
                </h3>
                <p className='text-left text-base leading-normal tracking-tight text-gray-300'>
                  Find the answers to frequently asked questions here.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className='border-stroke-2 flex w-full flex-1 flex-col items-start justify-start gap-6 rounded-2xl border bg-gradient-to-r from-gray-900 to-gray-900/95 p-6'
            >
              <div className='relative h-12 w-12 shrink-0'>
                <Image
                  src='/contact-us/book.svg'
                  alt='Mobile App Preview'
                  layout='fill'
                  objectFit='contain'
                />
              </div>
              <div className='flex w-full flex-col items-start justify-start gap-3'>
                <h3 className='text-left text-lg leading-relaxed font-medium tracking-tight text-white'>
                  SmashPay Blog
                </h3>
                <p className='text-left text-base leading-normal tracking-tight text-gray-300'>
                  Keep up with the latest news and trends.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn('up', 'tween', 0.4, 1)}
            className='flex w-full flex-col items-start justify-start gap-4'
          >
            <h3 className='text-left text-xl leading-relaxed font-medium tracking-tight text-white'>
              Follow us
            </h3>
            <div className='flex flex-row items-center justify-start gap-6'>
              {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                <motion.div
                  key={social}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className='relative h-12 w-12 shrink-0'
                >
                  <div className='border-stroke-2 absolute top-0 left-0 h-12 w-12 rounded-full border'></div>
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <Image
                      src={socialIcons[social]}
                      alt={`${social} icon`}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className='border-stroke-2 flex w-full flex-col items-start justify-start gap-12 rounded-[32px] border bg-gradient-to-r from-gray-900 to-gray-900/95 p-8 lg:w-[512px]'
        >
          <div className='flex w-full flex-col items-start justify-start gap-8'>
            <div className='flex w-full flex-col items-start justify-start gap-4'>
              <div className='flex w-full flex-col items-start justify-start gap-4 sm:flex-row'>
                <div className='flex w-full flex-col items-start justify-start gap-1.5'>
                  <label className='text-left text-sm leading-normal tracking-tight text-gray-300'>
                    First name
                  </label>
                  <div className='bg-bg border-stroke-2 bg-clr-14 flex w-full items-center justify-start rounded-lg border p-3'>
                    <input
                      type='text'
                      defaultValue='John'
                      className='w-full bg-transparent text-left text-base leading-normal tracking-tight text-gray-300 outline-none'
                    />
                  </div>
                </div>
                <div className='flex w-full flex-col items-start justify-start gap-1.5'>
                  <label className='text-left text-sm leading-normal tracking-tight text-gray-300'>
                    Last name
                  </label>
                  <div className='bg-bg bg-clr-14 border-stroke-2 flex w-full items-center justify-start rounded-lg border p-3'>
                    <input
                      type='text'
                      defaultValue='Doe'
                      className='w-full bg-transparent text-left text-base leading-normal tracking-tight text-gray-300 outline-none'
                    />
                  </div>
                </div>
              </div>

              <div className='flex w-full flex-col items-start justify-start gap-1.5'>
                <label className='text-left text-sm leading-normal tracking-tight text-gray-300'>
                  Email address
                </label>
                <div className='bg-bg border-stroke-2 bg-clr-14 flex w-full items-center justify-start rounded-lg border p-3'>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    className='w-full bg-transparent text-left text-base leading-normal tracking-tight text-gray-300 outline-none'
                  />
                </div>
              </div>

              <div className='flex w-full flex-col items-start justify-start gap-1.5'>
                <label className='text-left text-sm leading-normal font-medium tracking-tight text-gray-300'>
                  Phone number
                </label>
                <div className='bg-bg bg-clr-14 border-stroke-2 flex w-full items-center justify-start overflow-hidden rounded-lg border'>
                  <div className='border-stroke-2 flex items-center justify-between border-r p-3'>
                    <span className='text-left text-base leading-normal tracking-tight text-gray-300'>
                      US
                    </span>
                    <svg className='ml-2 h-5 w-5 text-white' viewBox='0 0 20 20' fill='currentColor'>
                      <path
                        fillRule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <input
                    type='tel'
                    defaultValue='+1 (555) 000-0000'
                    className='w-full bg-transparent p-3 text-left text-base leading-normal tracking-tight text-gray-300 outline-none'
                  />
                </div>
              </div>

              <div className='flex w-full flex-col items-start justify-start gap-1.5'>
                <label className='text-left text-sm leading-normal tracking-tight text-gray-300'>
                  Which products are you considering?
                </label>
                <div className='flex w-full flex-col items-start justify-start gap-3 sm:flex-row'>
                  <div className='bg-bg bg-clr-14 border-stroke-2 flex w-full items-center justify-start rounded-lg border p-3'>
                    <div className='flex items-center gap-3'>
                      <div className='border-stroke-2 flex h-5 w-5 items-center justify-center rounded-md border'>
                        <svg className='h-3 w-3 text-white' viewBox='0 0 12 12' fill='currentColor'>
                          <path
                            fillRule='evenodd'
                            d='M10.293 3.293a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L5 8.586l5.293-5.293z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </div>
                      <span className='text-left text-base leading-normal tracking-tight text-gray-300'>
                        Personal
                      </span>
                    </div>
                  </div>
                  <div className='bg-bg bg-clr-14 border-stroke-2 flex w-full items-center justify-start rounded-lg border p-3'>
                    <div className='flex items-center gap-3'>
                      <div className='border-stroke-2 h-5 w-5 rounded-md border'></div>
                      <span className='text-left text-base leading-normal tracking-tight text-gray-300'>
                        Business
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex w-full flex-col items-start justify-start gap-1.5'>
                <label className='text-left text-sm leading-normal font-medium tracking-tight text-gray-300'>
                  Message
                </label>
                <div className='bg-bg bg-clr-14 border-stroke-2 flex h-36 w-full flex-col justify-between rounded-lg border p-4'>
                  <textarea
                    placeholder='Your message here...'
                    className='h-full w-full resize-none bg-transparent text-left text-base leading-normal tracking-tight text-gray-300 outline-none'
                  />
                  <div className='flex justify-end'>
                    <svg className='h-4 w-4' viewBox='0 0 16 16' fill='currentColor'>
                      <path
                        fillRule='evenodd'
                        d='M8 0a8 8 0 100 16A8 8 0 008 0zM4.5 7.5a.5.5 0 000 1h7a.5.5 0 000-1h-7z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='border-stroke-2 w-full rounded-[64px] border bg-gradient-to-b from-gray-800 to-black px-8 py-4'
            >
              <span className='text-left text-lg leading-relaxed font-semibold tracking-tight text-white'>
                Submit
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactForm;
