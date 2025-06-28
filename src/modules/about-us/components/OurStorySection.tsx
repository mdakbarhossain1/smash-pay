'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const OurStorySection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className='bg-bg bg-clr-14 relative flex shrink-0 flex-col items-center justify-start gap-20 self-stretch overflow-hidden px-4 py-20 sm:px-6 md:py-28 lg:py-32'
    >
      <div className='relative flex w-full max-w-7xl flex-col items-center justify-start gap-16 md:px-8 lg:gap-24'>
        {/* Our Story Section */}
        <div className='grid w-full grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24'>
          {/* Text Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='flex flex-col gap-8'
          >
            <h2
              className='gradient-text text-4xl leading-tight font-medium md:text-5xl lg:text-6xl'
              style={{
                letterSpacing: '-2px'
              }}
            >
              Our story
            </h2>
            <p className='text-lg leading-7 font-normal tracking-[-0.25px] text-white'>
              SmashPay began with a simple observation: sending money across borders was far more complicated
              than it needed to be. While traveling through Southeast Asia, our founders witnessed countless
              people—expats, digital nomads, and migrant workers—struggling with high fees, long wait times,
              and confusing paperwork just to move their own money. They realized the financial system wasn't
              built for modern global citizens. <br /> <br />
              Motivated by this gap, they set out to build SmashPay—a digital-first remittance platform that
              eliminates barriers, simplifies international transfers, and puts people first. Today, SmashPay
              empowers individuals and businesses alike to send money abroad in minutes, not days—securely,
              affordably, and transparently.
            </p>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='relative h-[300px] w-full sm:h-[400px] md:h-[500px] lg:h-full lg:min-h-[500px]'
          >
            <Image
              src='/about-us/our-story-image.png'
              alt='Founders of SmashPay'
              fill
              className='rounded-[32px] object-cover'
              quality={90}
              priority
            />
          </motion.div>
        </div>

        {/* Vision & Mission Section */}
        <div className='grid w-full grid-cols-1 gap-12 md:grid-cols-2 md:gap-8'>
          {/* Vision Card */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='flex flex-col gap-6 rounded-3xl bg-gradient-to-br from-[#1E1E1E] to-[#2A2A2A] p-8 shadow-lg'
          >
            <h3 className='text-2xl font-semibold text-white md:text-3xl'>Our Vision</h3>
            <p className='text-base leading-7 text-gray-300'>
              To redefine financial freedom in the digital age by bridging traditional finance and Web3,
              empowering creators, gamers, merchants, and digital natives worldwide with seamless, secure, and
              borderless financial experiences.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='flex flex-col gap-6 rounded-3xl bg-gradient-to-br from-[#1E1E1E] to-[#2A2A2A] p-8 shadow-lg'
          >
            <h3 className='text-2xl font-semibold text-white md:text-3xl'>Our Mission</h3>
            <p className='text-base leading-7 text-gray-300'>
              SmashPay exists to democratize access to next-gen financial infrastructure through a unified
              wallet platform that integrates fiat and crypto payments, embedded banking services, and
              peer-to-peer finance.
            </p>
            <ul className='ml-5 list-disc space-y-2 text-gray-300'>
              <li>Intuitive multi-currency accounts and card solutions</li>
              <li>Frictionless on/off-ramp access for digital assets</li>
              <li>Developer-friendly APIs and white-label tools</li>
              <li>Decentralized lending protocols for underserved markets</li>
              <li>Compliant, secure, and scalable architecture for global use</li>
            </ul>
          </motion.div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='w-full text-center'
        >
          <p className='text-xl font-medium text-white md:text-2xl'>
            At SmashPay, we believe the future of money is open, decentralized, and inclusive — and we're
            building the rails to get there.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OurStorySection;
