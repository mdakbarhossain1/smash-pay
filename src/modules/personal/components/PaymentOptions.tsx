'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface PaymentOption {
  id: string;
  title: string;
  description: string;
  icon: {
    main: string;
  };
}

const PaymentOptions = () => {
  const paymentOptions: PaymentOption[] = [
    {
      id: 'direct-debit',
      title: 'Direct Debit ACH',
      description:
        'Direct Debit, or Automated Clearing House (ACH) payments take funds directly from your bank account.',
      icon: {
        main: '/personal/bank-icon.png'
      }
    },
    {
      id: 'bank-transfer',
      title: 'Bank Transfer',
      description:
        'Bank transfers will move money by transferring from your bank to ours. We usually receive money in 24 hours.',
      icon: {
        main: '/personal/bank-icon.png'
      }
    },
    {
      id: 'debit-card',
      title: 'Debit Card',
      description:
        "Paying for your transfer with a debit card is easy and fast. It's also usually cheaper than credit card, as credit cards are more expensive to process.",
      icon: {
        main: '/personal/option-icon-1.png'
      }
    },
    {
      id: 'credit-card',
      title: 'Credit Card',
      description:
        'Paying for your transfer with a credit card is easy and fast. SmashPay accepts Visa, Mastercard and some Maestro cards.',
      icon: {
        main: '/personal/option-icon-2.png'
      }
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

  const cardVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section className='bg-clr-14 relative flex w-full flex-col items-center justify-start gap-16 self-stretch pt-16 pb-32'>
      {/* Header Section */}
      <div className='relative flex w-full max-w-7xl flex-col items-center justify-start gap-3 px-8'>
        <motion.div
          className='flex flex-col items-center justify-start gap-10 self-stretch'
          initial='hidden'
          animate='visible'
          variants={containerVariants}
        >
          <motion.div
            className='flex flex-col items-center justify-start gap-6 self-stretch'
            variants={itemVariants}
          >
            {/* Title with underline */}
            <div className='flex flex-col items-center justify-center gap-0'>
              <div className='relative h-[23px] w-[141px]'>
                <h3 className='absolute top-0 left-0 text-left text-lg leading-tight font-medium tracking-[-0.25px] text-white'>
                  Payment options
                </h3>
              </div>
              <div
                className='relative -mt-[3px] h-0 w-full border-t-[3px] border-transparent'
                style={{
                  borderImage: 'linear-gradient(112.59deg, #37425D 0%, #1D2129 50.06%, #29283C 100%) 1'
                }}
              />
            </div>

            {/* Main Heading */}
            <motion.h2
              className='gradient-text self-stretch text-center text-4xl leading-tight font-bold tracking-[-2px] text-transparent md:text-5xl'
              variants={itemVariants}
            >
              Best ways to send money abroad
            </motion.h2>
          </motion.div>
        </motion.div>
      </div>

      {/* Payment Options Grid */}
      <div className='relative flex w-full max-w-7xl flex-col items-start justify-start gap-24 px-8'>
        <motion.div
          className='flex flex-col items-start justify-start gap-8 self-stretch'
          initial='hidden'
          animate='visible'
          variants={containerVariants}
        >
          {/* First Row */}
          <motion.div
            className='grid grid-cols-1 items-start justify-start gap-8 self-stretch md:grid-cols-2'
            variants={containerVariants}
          >
            {paymentOptions.slice(0, 2).map((option) => (
              <motion.div
                key={option.id}
                className='relative flex h-auto w-full flex-col items-start justify-start gap-6 rounded-[32px] p-12 md:h-56 md:flex-row'
                style={{
                  background: 'linear-gradient(135deg, rgba(63, 66, 77, 1) 0%, rgba(18, 20, 28, 1) 100%)'
                }}
                variants={itemVariants}
                whileHover='hover'
              >
                {/* Icon */}
                <motion.div className='relative h-12 w-12 shrink-0 overflow-hidden' variants={cardVariants}>
                  <Image src={`${option.icon.main}`} alt='' fill />
                </motion.div>

                {/* Content */}
                <div className='flex flex-1 flex-col items-start justify-start gap-3'>
                  <h3 className='self-stretch text-left text-2xl leading-tight font-medium tracking-[-1px] text-white'>
                    {option.title}
                  </h3>
                  <p className='self-stretch text-left text-lg leading-normal tracking-[-0.25px] text-gray-300'>
                    {option.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Second Row */}
          <motion.div
            className='grid grid-cols-1 items-start justify-start gap-8 self-stretch md:grid-cols-2'
            variants={containerVariants}
          >
            {paymentOptions.slice(2, 4).map((option) => (
              <motion.div
                key={option.id}
                className='relative flex h-auto w-full flex-col items-start justify-start gap-6 rounded-[32px] p-12 md:h-56 md:flex-row'
                style={{
                  background: 'linear-gradient(135deg, rgba(63, 66, 77, 1) 0%, rgba(18, 20, 28, 1) 100%)'
                }}
                variants={itemVariants}
                whileHover='hover'
              >
                {/* Icon */}
                <motion.div className='relative h-12 w-12 shrink-0 overflow-hidden' variants={cardVariants}>
                  <Image src={`${option.icon.main}`} alt='' fill />
                </motion.div>

                {/* Content */}
                <div className='flex flex-1 flex-col items-start justify-start gap-3'>
                  <h3 className='self-stretch text-left text-2xl leading-tight font-medium tracking-[-1px] text-white'>
                    {option.title}
                  </h3>
                  <p className='self-stretch text-left text-lg leading-normal tracking-[-0.25px] text-gray-300'>
                    {option.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentOptions;
