'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const BankBeatingRates = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className='relative flex shrink-0 flex-col items-center justify-start gap-16 self-stretch overflow-hidden bg-gradient-to-r from-[#1D1F2D] to-[#1D1F2E] pt-32 pb-32'>
      <div className='relative flex w-full max-w-7xl shrink-0 flex-col items-center justify-start gap-3 px-8'>
        <motion.div
          className='relative flex shrink-0 flex-col items-center justify-start gap-10 self-stretch'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div
            className='relative flex shrink-0 flex-col items-center justify-start gap-6 self-stretch'
            variants={itemVariants}
          >
            <h2 className='relative w-full max-w-[658px] bg-gradient-to-b from-[#7B7D81] to-white bg-clip-text text-center text-5xl leading-tight font-medium tracking-[-2px] text-transparent md:text-6xl'>
              Save money with our bank-beating rates
            </h2>
            <p className='relative self-stretch text-center text-xl leading-relaxed font-normal tracking-[-0.5px] text-gray-300'>
              Keep more of your hard earned profits with our great exchange rates.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className='relative flex w-full max-w-7xl flex-col items-center justify-start gap-12 px-8 lg:flex-row lg:gap-24'>
        <motion.div
          className='relative flex w-full flex-col items-center justify-start gap-12 lg:w-auto'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className='relative h-auto w-full max-w-[640px] shrink-0 lg:h-[450px]'>
            {/* Placeholder for image/chart - replace with your actual content */}
            <div className='flex h-full w-full items-center justify-center'>
              {/* <span className='text-white'>Comparison chart placeholder</span> */}
              <Image src='/business/Line-and-bar-chart.png' alt='Coins icon' fill />
            </div>

            <p className='mt-6 w-full text-left text-sm leading-5 font-normal tracking-[-0.25px] text-gray-400'>
              *Disclaimer: The comparison savings are based on a single transfer of 10,000 GBP to USD. Savings
              are calculated by comparing the exchange rate including margins and fees provided by each bank
              and SmashPay on the same day (1 August 2023).
            </p>
          </div>
        </motion.div>

        <motion.div
          className='relative flex w-full flex-col items-start justify-start gap-16 lg:flex-1'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className='relative flex shrink-0 flex-col items-start justify-start gap-8 self-stretch'>
            <motion.div
              className='relative flex shrink-0 flex-row items-start justify-start gap-6 self-stretch rounded-[32px]'
              variants={itemVariants}
            >
              <div className='border-stroke-2 border-opacity-20 relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[48px] border'>
                <Image
                  src='/business/coins-10.svg'
                  alt='Coins icon'
                  width={24}
                  height={24}
                  className='h-6 w-6'
                />
              </div>
              <div className='relative flex flex-1 flex-col items-start justify-start gap-3'>
                <h3 className='relative self-stretch text-left text-2xl leading-tight font-medium tracking-[-1px] text-white'>
                  Save on unnecessary bank charges
                </h3>
                <p className='relative w-full text-left text-lg leading-relaxed font-normal tracking-[-0.25px] text-gray-300'>
                  There are no account opening fees, monthly maintenance charges, or minimum transaction
                  requirements.
                </p>
              </div>
            </motion.div>

            <motion.div
              className='relative flex shrink-0 flex-row items-start justify-start gap-6 self-stretch rounded-[32px]'
              variants={itemVariants}
            >
              <div className='border-stroke-2 border-opacity-20 relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[48px] border'>
                <Image
                  src='/business/globe-06-10.svg'
                  alt='Globe icon'
                  width={24}
                  height={24}
                  className='h-6 w-6'
                />
              </div>
              <div className='relative flex flex-1 flex-col items-start justify-start gap-3'>
                <h3 className='relative self-stretch text-left text-2xl leading-tight font-medium tracking-[-1px] text-white'>
                  Global cash management
                </h3>
                <p className='relative self-stretch text-left text-lg leading-relaxed font-normal tracking-[-0.25px] text-gray-300'>
                  Convert held balances to different currencies in just a few clicks and review your global
                  transactions in a single view.
                </p>
              </div>
            </motion.div>

            <motion.div
              className='relative flex shrink-0 flex-row items-start justify-start gap-6 self-stretch rounded-[32px]'
              variants={itemVariants}
            >
              <div className='border-stroke-2 border-opacity-20 relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[48px] border'>
                <Image
                  src='/business/safe-10.svg'
                  alt='Safe icon'
                  width={24}
                  height={24}
                  className='h-6 w-6'
                />
              </div>
              <div className='relative flex flex-1 flex-col items-start justify-start gap-3'>
                <h3 className='relative self-stretch text-left text-2xl leading-tight font-medium tracking-[-1px] text-white'>
                  Know your funds are safe
                </h3>
                <p className='relative self-stretch text-left text-lg leading-relaxed font-normal tracking-[-0.25px] text-gray-300'>
                  Relax knowing that your money is secure and protected with end-to-end encryption and
                  bank-level security.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BankBeatingRates;
