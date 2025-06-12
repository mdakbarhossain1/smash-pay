'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
            <h2 className='w-full bg-[linear-gradient(180deg,_rgba(123,_125,_129,_1)_0%,_rgba(255,_255,_255,_1)_100%)] bg-clip-text text-left text-4xl leading-tight font-medium tracking-tight text-transparent md:text-5xl lg:text-6xl'>
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
          <Image src={`/multicurrency/globe.svg`} alt='' width={640} height={710} />
        </motion.div>
      </div>
    </section>
  );
};

export default GlobeMultiCurrencyAccounts;
