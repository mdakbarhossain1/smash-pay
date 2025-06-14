'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Service {
  id: string;
  name: string;
  logo: string;
  recipientAmount: string;
  difference: string;
  differenceType: 'positive' | 'negative';
  fee: string;
  exchangeRate: string;
}

const PricingComparison = () => {
  const services: Service[] = [
    {
      id: 'smashpay',
      name: 'SmashPay',
      logo: '/personal/smashpay.png',
      recipientAmount: '898.20 EUR',
      difference: 'Save up to 28.54 EUR',
      differenceType: 'positive',
      fee: 'Zero-fee',
      exchangeRate: '0.89820'
    },
    {
      id: 'western-union2',
      name: 'Western Union',
      logo: '/personal/logo1.svg',
      recipientAmount: '889.36 EUR',
      difference: '- 8.84 EUR',
      differenceType: 'negative',
      fee: '1.99 USD',
      exchangeRate: '0.89135'
    },
    {
      id: 'Revolut',
      name: 'Revolut',
      logo: '/personal/Revolut.png',
      recipientAmount: '883.22 EUR',
      difference: '- 14.98 EUR',
      differenceType: 'negative',
      fee: '2.99 USD',
      exchangeRate: '0.88621'
    },
    {
      id: 'Wise',
      name: 'Wise',
      logo: '/personal/wise.png',
      recipientAmount: '883.36 EUR',
      difference: '- 14.84 EUR',
      differenceType: 'negative',
      fee: '3.25 USD',
      exchangeRate: '0.88661'
    },
    {
      id: 'MoneyGram',
      name: 'MoneyGram',
      logo: '/personal/MoneyGram.png',
      recipientAmount: '880.89 EUR',
      difference: '- 17.31 EUR',
      differenceType: 'negative',
      fee: '3.57 USD',
      exchangeRate: '0.88446'
    },
    {
      id: 'Remitly',
      name: 'Remitly',
      logo: '/personal/Remitly.png',
      recipientAmount: '880.46 EUR',
      difference: '- 17.74 EUR',
      differenceType: 'negative',
      fee: '3.75 USD',
      exchangeRate: '0.88421'
    },
    {
      id: 'Xe',
      name: 'Xe',
      logo: '/personal/Xe.png',
      recipientAmount: '873.37 EUR',
      difference: '- 24.83 EUR',
      differenceType: 'negative',
      fee: '3.99 USD',
      exchangeRate: '0.87736'
    },
    {
      id: 'OFX',
      name: 'OFX',
      logo: '/personal/OFX.png',
      recipientAmount: '869.22 EUR',
      difference: '- 28.98 EUR',
      differenceType: 'negative',
      fee: '4.25 USD',
      exchangeRate: '0.87347'
    },
    {
      id: 'Chase',
      name: 'Chase',
      logo: '/personal/Chase.png',
      recipientAmount: '866.50 EUR',
      difference: '- 31.70 EUR',
      differenceType: 'negative',
      fee: '5.00 USD',
      exchangeRate: '0.87150'
    },
    {
      id: 'Paypal',
      name: 'Paypal',
      logo: '/personal/Paypal.png',
      recipientAmount: '855.65 EUR',
      difference: '- 42.55 EUR',
      differenceType: 'negative',
      fee: '4.99 USD',
      exchangeRate: '0.86064'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section className='bg-clr-14 relative flex w-full flex-col items-center justify-start gap-16 self-stretch overflow-hidden pt-32 pb-32'>
      <motion.div
        className='relative flex w-full max-w-7xl flex-col items-start justify-start gap-24 px-8'
        initial='hidden'
        animate='visible'
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div
          className='relative flex flex-col items-center justify-start gap-10 self-stretch'
          variants={itemVariants}
        >
          <div className='relative flex w-full flex-col items-center justify-start gap-6 lg:w-[760px]'>
            <h2 className='gradient-text relative self-stretch text-center text-4xl leading-tight font-bold tracking-[-2px] text-transparent md:text-5xl'>
              Compare our pricing
            </h2>
            <p className='relative self-stretch text-center text-xl leading-7 font-normal tracking-[-0.5px] text-gray-300'>
              How much can you save when sending international money transfers with SmashPay?
            </p>
          </div>
        </motion.div>

        {/* Pricing Table */}
        <motion.div
          className='relative flex flex-col items-start justify-start gap-10 self-stretch lg:flex-row'
          variants={itemVariants}
        >
          <div className='w-full overflow-hidden rounded-[40px] bg-gradient-to-r from-[#1D1F2D] to-[#1D1F2E] p-8'>
            <motion.div className='grid w-full grid-cols-2 gap-0 md:grid-cols-4' variants={containerVariants}>
              {/* Column Headers */}
              <motion.div className='flex flex-col gap-0' variants={itemVariants}>
                <div className='flex h-20 items-center justify-start p-5'>
                  <p className='text-md text-left leading-tight font-normal tracking-[-0.25px] text-white'>
                    Sending 1,000.00 USD with
                  </p>
                </div>
                {services.map((service) => (
                  <motion.div
                    key={service.id}
                    className={`bg-bg flex h-20 items-center gap-4 rounded-tl-xl rounded-bl-xl p-5`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`flex items-center justify-center rounded-[40px] bg-white`}>
                      <Image
                        src={service.logo}
                        alt={service.name}
                        width={40}
                        height={40}
                        className='object-cover'
                      />
                    </div>
                    <p className='hidden text-left text-lg leading-tight font-medium tracking-[-0.25px] text-white md:block'>
                      {service.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Recipient Gets Column */}
              <motion.div className='flex flex-col gap-0' variants={itemVariants}>
                <div className='flex h-20 items-center justify-end p-5'>
                  <p className='text-md text-right leading-tight font-normal tracking-[-0.25px] text-white'>
                    Recipient gets
                  </p>
                </div>
                {services.map((service) => (
                  <motion.div
                    key={service.id}
                    className={`flex h-20 items-center justify-end p-5 ${
                      service.id === 'smashpay' ? 'bg-bg' : ''
                    }`}
                    variants={itemVariants}
                  >
                    <div className='flex flex-col items-end'>
                      <p className='text-right text-lg leading-tight font-medium tracking-[-0.25px] text-white'>
                        {service.recipientAmount}
                      </p>
                      <div
                        className={`flex items-center ${
                          service.differenceType === 'positive' ? 'text-lime-300' : 'text-[#E4187D]'
                        }`}
                      >
                        {service.differenceType === 'negative' && (
                          <Image
                            src='/personal/arrow-down1.svg'
                            alt='Decrease'
                            width={16}
                            height={16}
                            className='mr-1.5'
                          />
                        )}
                        <p className='text-right text-sm leading-tight font-normal tracking-[-0.25px]'>
                          {service.difference}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Fee Column */}
              <motion.div className='hidden flex-col gap-0 md:flex' variants={itemVariants}>
                <div className='flex h-20 items-center justify-end p-5'>
                  <p className='text-md text-right leading-tight font-normal tracking-[-0.25px] text-white'>
                    Fee
                  </p>
                </div>
                {services.map((service) => (
                  <motion.div
                    key={service.id}
                    className={`flex h-20 items-center justify-end p-4 ${
                      service.id === 'smashpay' ? 'bg-bg' : ''
                    }`}
                    variants={itemVariants}
                  >
                    <p className='text-md text-right leading-tight font-medium tracking-[-0.25px] text-white'>
                      {service.fee}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Exchange Rate Column */}
              <motion.div className='hidden flex-col gap-0 md:flex' variants={itemVariants}>
                <div className='flex h-20 items-center justify-end p-5'>
                  <p className='text-md text-right leading-tight font-normal tracking-[-0.25px] text-white'>
                    Exchange rate
                  </p>
                </div>
                {services.map((service) => (
                  <motion.div
                    key={service.id}
                    className={`flex h-20 items-center justify-end gap-1.5 p-4 ${
                      service.id === 'smashpay' ? 'bg-bg rounded-tr-xl rounded-br-xl' : ''
                    }`}
                    variants={itemVariants}
                  >
                    <p className='text-md text-right leading-tight font-medium tracking-[-0.25px] text-white'>
                      {service.exchangeRate}
                    </p>
                    <div
                      className={`h-2.5 w-2.5 rounded-full ${
                        service.differenceType === 'positive' ? 'bg-lime-300' : 'bg-[#E4187D]'
                      }`}
                    ></div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Disclaimer Section */}
        <motion.div
          className='relative flex flex-col items-center justify-start gap-10 self-stretch'
          variants={itemVariants}
        >
          <div className='relative flex w-full flex-col items-center justify-start gap-6 lg:w-[720px]'>
            <p className='text-center text-base leading-6 font-normal tracking-[-0.25px] text-gray-400'>
              <span className='text-white'>*Disclaimer:</span> The above Information is based on competitor
              websites as of 7/24/2023 5 AM. provided for your convenience and information purpose only.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PricingComparison;
