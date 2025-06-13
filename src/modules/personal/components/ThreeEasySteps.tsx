'use client';
import PromotionSection from '@/modules/home/PromotionSection';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Step {
  id: number;
  title: string;
  description: string;
  image: string;
  elements?: {
    src: string;
    className: string;
    style?: React.CSSProperties;
  }[];
}

const ThreeEasySteps = () => {
  const steps: Step[] = [
    {
      id: 1,
      title: '1. Create a SmashPay account',
      description: 'Start your registration online or via the SmashPay app.',
      image: '/personal/Create-account-3.png'
    },
    {
      id: 2,
      title: '2. Enter transfer details',
      description: "Choose an amount to send then add recipient's bank details.",
      image: '/personal/Enter-transfer-details-3.png'
    },
    {
      id: 3,
      title: '3. Pay for your transfer',
      description: 'Funds your money with a bank debit, wire transfer, or a debit or credit card.',
      image: '/personal/Pay-for-transfers-1.png'
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 100
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className='bg-clr-14 relative flex w-full flex-col items-center justify-start gap-16 self-stretch pt-32 pb-8'>
      {/* Header Section */}
      <div className='relative flex w-full max-w-7xl flex-col items-start justify-start gap-24 px-8'>
        <motion.div
          className='flex flex-col items-center justify-start gap-12 self-stretch'
          initial='hidden'
          animate='visible'
          variants={containerVariants}
        >
          <motion.div
            className='flex w-full flex-col items-center justify-start gap-4 md:w-[800px]'
            variants={itemVariants}
          >
            <div className='flex flex-col items-center justify-start gap-6 self-stretch'>
              {/* Title with underline */}
              <motion.div className='flex flex-col items-center justify-center gap-0' variants={itemVariants}>
                <div className='relative h-[23px] w-[210px]'>
                  <h3 className='absolute top-0 left-1/2 -translate-x-1/2 transform text-center text-lg leading-tight font-medium tracking-[-0.25px] text-white'>
                    3 Easy Steps
                  </h3>
                </div>
                <div
                  className='relative -mt-[3px] h-0 w-[110px] border-t-[3px] border-transparent'
                  style={{
                    borderImage: 'linear-gradient(112.59deg, #37425D 0%, #1D2129 50.06%, #29283C 100%) 1'
                  }}
                />
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                className='gradient-text self-stretch text-center text-4xl leading-tight font-bold tracking-[-2px] text-transparent md:text-5xl lg:text-6xl'
                variants={itemVariants}
              >
                Send money abroad in 3 simple steps
              </motion.h2>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Steps Cards */}
      <div className='relative flex w-full max-w-7xl flex-col items-start justify-start gap-24 px-8'>
        <motion.div
          className='grid grid-cols-1 items-start justify-start gap-8 self-stretch md:grid-cols-3'
          initial='hidden'
          animate='visible'
          variants={containerVariants}
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className='bg-gradient-2 flex flex-col items-center justify-start gap-8 overflow-hidden rounded-[32px] px-8 pt-12 pb-16'
              variants={itemVariants}
              whileHover='hover'
            >
              <motion.div className='relative h-64 w-64 overflow-hidden' variants={cardVariants}>
                <Image src={`${step.image}`} alt='' fill />
              </motion.div>

              <div className='flex w-80 flex-col items-start justify-start gap-3 pt-1.5'>
                <h3 className='self-stretch text-left text-2xl leading-tight font-medium tracking-[-1px] text-white'>
                  {step.title}
                </h3>
                <p className='self-stretch text-left text-lg leading-normal tracking-[-0.25px] text-gray-300'>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <PromotionSection />
    </section>
  );
};

export default ThreeEasySteps;
