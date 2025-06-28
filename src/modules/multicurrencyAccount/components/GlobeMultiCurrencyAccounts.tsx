'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BalanceCard from './BalanceCardProps';
import GlobeAnimation from './GlobeAnimation';

const GlobeMultiCurrencyAccounts = () => {
  const features = [
    {
      icon: '/multicurrency/coins-10.svg',
      title: 'Manage your account',
      description:
        'Access and manage your finances on the go. Move money and track transactions with SmashPay in just a few clicks.'
    },
    {
      icon: '/multicurrency/save0.svg',
      title: 'Avoid unnecessary bank charges',
      description:
        'There are no account opening fees, monthly maintenance charges, or minimum transaction requirements.'
    },
    {
      icon: '/multicurrency/safe-10.svg',
      title: 'Your funds are safe and secure',
      description:
        'Relax knowing that your money is secure and protected with end-to-end encryption and bank-level security.'
    }
  ];

  const currencyData = [
    {
      currency: 'USD',
      amount: '1,799.00',
      accountNumber: '9600012345678901',
      flagSrc: '/flags/united-states.svg'
    },
    {
      currency: 'SEK',
      amount: '10,280.00',
      accountNumber: 'SE45500000000583',
      flagSrc: '/flags/singapore.svg'
    },
    { currency: 'EUR', amount: '950.00', accountNumber: 'BE72123456789012', flagSrc: '/flags/germany.svg' },
    {
      currency: 'GBP',
      amount: '1620.00',
      accountNumber: 'GBKK400515123456',
      flagSrc: '/flags/united-states.svg'
    }
  ];

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
    <section className='relative flex shrink-0 flex-col items-center justify-start gap-16 self-stretch overflow-hidden bg-[linear-gradient(90deg,_rgba(29,_31,_45,_1)_0%,_rgba(29,_31,_46,_1)_100%)] py-32'>
      <div className='relative mx-auto flex w-full max-w-7xl flex-col items-center justify-start gap-16 px-8 lg:flex-row lg:gap-24'>
        <motion.div
          className='relative flex w-full flex-col items-start justify-start gap-16 lg:flex-1'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div
            className='relative flex w-full flex-col items-start justify-start gap-6'
            variants={itemVariants}
          >
            <h2 className='gradient-text w-full text-left text-4xl leading-tight font-medium tracking-tight text-transparent md:text-5xl lg:text-6xl'>
              Multi-currency accounts with local bank details
            </h2>
          </motion.div>

          <motion.div
            className='relative flex w-full flex-col items-start justify-start gap-8'
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className='relative flex w-full flex-col items-start justify-start gap-6 rounded-3xl sm:flex-row'
                variants={itemVariants}
              >
                <div className='relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-gray-700'>
                  <Image src={`${feature.icon}`} alt='' width={24} height={24} className='h-6 w-6' />
                </div>
                <div className='relative flex flex-1 flex-col items-start justify-start gap-3'>
                  <h3 className='w-full text-left text-xl leading-snug font-medium tracking-tight text-white md:text-2xl'>
                    {feature.title}
                  </h3>
                  <p className='w-full text-left text-lg leading-relaxed tracking-tight text-gray-300'>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className='relative flex w-full flex-col items-center justify-start gap-12 lg:w-auto'
          initial={{ opacity: 0, x: 100, y: 0 }}
          whileInView={{ opacity: 1, x: 0, y: 100 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <GlobeAnimation />

          <div className='hidden md:block'>
            <div className='absolute top-10 left-0'>
              <BalanceCard
                currency={'USD'}
                amount={'1,799.00'}
                accountNumber='9600012345678901'
                flagSrc='/flags/united-states.svg'
              />
            </div>
            <div className='absolute top-60 left-20'>
              <BalanceCard
                currency={'SEK'}
                amount='10,280.00'
                accountNumber='SE45500000000583'
                flagSrc='/flags/singapore.svg'
              />
            </div>
            <div className='absolute top-40 right-20'>
              <BalanceCard
                currency={'EUR'}
                amount='950.00'
                accountNumber='BE72123456789012'
                flagSrc='/flags/germany.svg'
              />
            </div>
            <div className='absolute right-30 bottom-30'>
              <BalanceCard
                currency={'GBP'}
                amount='1620.00'
                accountNumber='GBKK400515123456'
                flagSrc='/flags/united-states.svg'
              />
            </div>
          </div>
          <div className='space-y-3 md:hidden'>
            {currencyData.map((item, index) => (
              <div key={index}>
                <BalanceCard
                  currency={item.currency}
                  amount={item.amount}
                  accountNumber={item.accountNumber}
                  flagSrc={item.flagSrc}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobeMultiCurrencyAccounts;
