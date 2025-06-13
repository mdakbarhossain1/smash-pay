'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const MultiCurrencyCardsSection = () => {
  // Animation variants
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

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section
      className='relative flex w-full flex-col items-start justify-start gap-16 overflow-hidden px-5 py-32 md:px-20'
      style={{
        background: 'linear-gradient(90deg, rgba(29, 31, 45, 1) 0%, rgba(29, 31, 46, 1) 100%)'
      }}
    >
      {/* Header Section */}
      <div className='relative mx-auto flex w-full max-w-7xl flex-col items-center justify-start gap-3 px-2 md:px-8'>
        <motion.div
          className='flex w-full flex-col items-center justify-start gap-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div
            className='flex w-full max-w-[800px] flex-col items-start justify-start gap-6'
            variants={itemVariants}
          >
            <div className='m-auto flex flex-col items-center justify-center gap-0'>
              <div className='h-[23px] w-[240px]'>
                <p className='text-start text-lg font-medium tracking-[-0.25px] text-white'>
                  SmashPay card for business
                </p>
              </div>
              <div
                className='relative mt-[-3px] h-0 w-full border-t-[3px] border-r-0 border-b-0 border-l-0'
                style={{
                  borderImage:
                    'linear-gradient(112.59deg, rgba(55, 66, 93, 1) 0%, rgba(29, 33, 41, 1) 50.06%, rgba(41, 40, 60, 1) 100%) 1'
                }}
              ></div>
            </div>
            <h2
              className='gradient-text w-full text-center text-4xl leading-tight font-medium tracking-[-2px] text-transparent md:text-5xl lg:text-6xl'
              // variants={itemVariants}
            >
              Multi-currency cards for your global business
            </h2>
          </motion.div>
        </motion.div>
      </div>

      {/* Cards Section */}
      <div className='relative mx-auto flex w-full max-w-7xl flex-col items-start justify-start gap-8 px-2 md:px-8'>
        {/* Main Feature Card */}
        <motion.div
          className='relative flex w-full flex-col items-center justify-start gap-8 overflow-hidden rounded-[32px] p-8 md:p-12 lg:flex-row'
          style={{
            background: 'linear-gradient(135deg, rgba(63, 66, 77, 1) 0%, rgba(18, 20, 28, 1) 100%)'
          }}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={cardVariants}
        >
          <div className='flex w-full flex-col items-start justify-center gap-10 lg:w-1/2'>
            <div className='flex w-full flex-col items-start justify-start gap-4'>
              <h3 className='gradient-text w-full text-left text-4xl leading-tight font-medium tracking-[-2px] text-transparent md:text-5xl'>
                Empower your team <br /> with business debit <br /> cards
              </h3>
              <p className='w-full text-left text-lg leading-relaxed font-normal tracking-[-0.25px] text-gray-300'>
                Big or small your team is, SmashPay cards have got you <br /> covered. Spend securely with
                physical and virtual debit cards <br /> that you control.
              </p>
            </div>
          </div>
          <div className='relative h-[420px] w-full lg:w-1/2'>
            {/* Card Images with Avatars */}
            <div className=''>
              <Image src='/card-images.svg' alt='Avatar' width={517} height={591} className='absolute' />
            </div>
          </div>
        </motion.div>

        {/* Feature Cards Row */}
        <motion.div
          className='flex w-full flex-col items-start justify-start gap-8 lg:flex-row'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Anti-Fraud Card */}
          <motion.div
            className='relative flex h-[496px] w-full flex-col items-start justify-start gap-8 overflow-hidden rounded-[32px] p-8 lg:w-[280px]'
            style={{
              background: 'linear-gradient(135deg, rgba(63, 66, 77, 1) 0%, rgba(18, 20, 28, 1) 100%)'
            }}
            variants={cardVariants}
          >
            <div className='flex w-full flex-col items-start justify-start gap-3 pt-1.5'>
              <h4 className='gradient-text w-[199px] text-left text-2xl leading-tight font-medium tracking-[-1.5px] text-transparent md:text-3xl'>
                Keep your money safe with our anti-fraud system.
              </h4>
            </div>
            <div className='relative aspect-square w-full rounded-[13.5px]'>
              <div className='absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transform overflow-hidden'>
                <Image
                  src='/group7.svg'
                  alt='Anti-fraud illustration'
                  width={270}
                  height={270}
                  className='absolute top-[3.38px] left-[10.12px] h-auto'
                />
              </div>
            </div>
          </motion.div>

          {/* Cost Optimization Card */}
          <motion.div
            className='relative flex h-[496px] w-full flex-col items-start justify-start gap-8 overflow-hidden rounded-[32px] p-8 lg:w-[280px]'
            style={{
              background: 'linear-gradient(135deg, rgba(63, 66, 77, 1) 0%, rgba(18, 20, 28, 1) 100%)'
            }}
            variants={cardVariants}
          >
            <div className='flex w-full flex-col items-start justify-start gap-3 pt-1.5'>
              <h4 className='gradient-text w-[165px] text-left text-2xl leading-tight font-medium tracking-[-1.5px] text-transparent md:text-3xl'>
                Optimise company costs and manage spending
              </h4>
            </div>
            <div className='relative h-[200px] w-[330px] overflow-hidden'>
              {/* Budget Item 1 */}
              <div className='absolute top-0 left-[26px] flex flex-col items-start justify-start gap-[17.89px] overflow-hidden rounded-[11.93px] bg-white p-[14.91px]'>
                <div className='flex w-full flex-row items-start justify-between'>
                  <span className='text-left text-sm leading-5 font-semibold tracking-[-0.19px] text-green-900'>
                    Business travel
                  </span>
                  <span className='text-right text-sm leading-5 font-normal tracking-[-0.19px] text-green-900'>
                    10,000 USD/20,000 USD
                  </span>
                </div>
                <div className='flex w-full flex-row items-center justify-start gap-[8.95px]'>
                  <div className='relative h-[5.96px] flex-1 rounded-[5.96px]'>
                    <div className='absolute inset-x-0 top-0 h-[5.96px] rounded-[2.98px] bg-gray-100'></div>
                    <div className='absolute top-0 left-0 h-[5.96px] w-[49.06%] rounded-[2.98px] bg-green-900'></div>
                  </div>
                </div>
              </div>
              {/* Budget Item 2 */}
              <div className='absolute top-[100.68px] left-10 flex flex-col items-start justify-start gap-[17.89px] overflow-hidden rounded-[11.93px] bg-white p-[14.91px]'>
                <div className='flex w-full flex-row items-start justify-between'>
                  <span className='text-left text-sm leading-5 font-semibold tracking-[-0.19px] text-green-900'>
                    Advertising
                  </span>
                  <span className='text-right text-sm leading-5 font-normal tracking-[-0.19px] text-green-900'>
                    8,450 USD/10,000 USD
                  </span>
                </div>
                <div className='flex w-full flex-row items-center justify-start gap-[8.95px]'>
                  <div className='relative h-[5.96px] flex-1 rounded-[5.96px]'>
                    <div className='absolute top-[-0.49px] right-[2.09px] left-[0.087890625px] h-1.5 rounded-[2.98px] bg-gray-100'></div>
                    <div className='absolute top-[-0.49px] right-[26.33%] left-[0.03%] h-1.5 w-[73.64%] rounded-[2.98px] bg-green-900'></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Global Spending Card */}
          <motion.div
            className='relative h-[496px] w-full overflow-hidden rounded-[32px] p-8 md:p-12 lg:w-[592px]'
            style={{
              background: 'linear-gradient(135deg, rgba(63, 66, 77, 1) 0%, rgba(18, 20, 28, 1) 100%)'
            }}
            variants={cardVariants}
          >
            <div className='absolute top-0 left-0 h-full w-full overflow-hidden rounded-[32px]'>
              <Image
                src='/image-background-flag.png'
                alt='Italy flag'
                fill
                style={{ objectFit: 'cover' }}
                className='absolute top-8 left-[72px] h-14 w-14'
              />

              {/* Add more flags as needed */}
            </div>
            <div className='absolute top-[206px] left-8 flex w-full flex-col items-start justify-start gap-3 pt-1.5 lg:w-[528px]'>
              <h4 className='gradient-text w-full text-left text-2xl leading-tight font-medium tracking-[-1.5px] text-transparent md:text-3xl lg:w-[460px]'>
                Spend like a local on cards <br /> with great exchange rates
              </h4>
              <p className='w-full text-left text-lg leading-relaxed font-normal tracking-[-0.25px] text-gray-300'>
                Our business debit cards can go the distance abroad. Spend like a local worldwide in 150+
                currencies.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MultiCurrencyCardsSection;
