'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const OffRampSection = () => {
  return (
    <section className='bg-gradient-4 relative flex shrink-0 flex-col items-center justify-start gap-16 self-stretch overflow-hidden py-24'>
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
              className='relative self-stretch text-center text-4xl leading-tight font-bold md:text-5xl lg:text-6xl'
              style={{
                background: 'linear-gradient(180deg, rgba(123, 125, 129, 1) 0%, rgba(255, 255, 255, 1) 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-1.75px'
              }}
            >
              UNLOCK <i className='gradient-text-2'>THE TRUE POTENTIAL</i> OF YOUR CRYPTO ASSETS
            </motion.h2>

            <motion.div
              className='relative flex shrink-0 flex-col items-center justify-start gap-1'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p
                className='gradient-text text-center text-xl leading-snug font-bold text-gray-300 md:text-2xl'
                style={{ letterSpacing: '-0.5px' }}
              >
                Experience the ultimate convenience
              </p>
              <p
                className='text-center text-base leading-normal text-gray-300 md:text-lg'
                style={{ letterSpacing: '-0.25px' }}
              >
                In converting your cryptocurrency to fiat with our seamless, secure, and <br /> speedy
                Off-Ramp solution.
              </p>

              <Image
                src='/crypto/offramp.jpg'
                alt='arrow'
                width={650}
                height={200}
                className='mt-15 mb-5 rounded object-contain'
              />

              <ul className='mt-15 max-w-xl space-y-5'>
                <li className='flex items-start gap-3 text-start text-base leading-normal text-gray-300 md:text-xl'>
                  <Image src='/crypto/right-arrow.svg' height={48} width={48} alt='arrow' />
                  <span>
                    {' '}
                    Smashpay Crypto's Off-Ramp Solution is designed to make cashing out your cryptocurrency as
                    simple as possible
                  </span>
                </li>
                <li className='flex items-start gap-3 text-start text-base leading-normal text-gray-300 md:text-xl'>
                  <Image src='/crypto/right-arrow.svg' height={48} width={48} alt='arrow' />
                  <span>
                    {' '}
                    Effortlessly convert your digital assets to fiat currency in just a few clicks, and enjoy
                    rapid processing and withdrawal times
                  </span>
                </li>
                <li className='flex items-start gap-3 text-start text-base leading-normal text-gray-300 md:text-xl'>
                  <Image src='/crypto/right-arrow.svg' height={35} width={35} alt='arrow' />
                  <span>
                    {' '}
                    With SmashPay Crypto, you can access your funds faster and easier than ever before
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OffRampSection;
