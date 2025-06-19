'use client';
import { fadeIn, staggerContainer } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const QuickBuy = () => {
  const navigate = useRouter();
  const topics = [
    {
      icon: '/crypto/logos/BTC.svg',
      title: 'BTC'
    },
    {
      icon: '/crypto/logos/BNB.svg',
      title: 'BNB'
    },
    {
      icon: '/crypto/logos/DOGE.svg',
      title: 'DOGE'
    },
    {
      icon: '/crypto/logos/DOT.svg',
      title: 'DOT'
    },
    {
      icon: '/crypto/logos/ETH.svg',
      title: 'ETH'
    },
    {
      icon: '/crypto/logos/FLOW.svg',
      title: 'FLOW'
    },
    {
      icon: '/crypto/logos/IMX.svg',
      title: 'IMX'
    },
    {
      icon: '/crypto/logos/KSM.svg',
      title: 'KSM'
    },
    {
      icon: '/crypto/logos/LTC.svg',
      title: 'LTC'
    },
    {
      icon: '/crypto/logos/MAGIC.svg',
      title: 'MAGICC'
    },
    {
      icon: '/crypto/logos/MATIC.svg',
      title: 'MATIC'
    },
    {
      icon: '/crypto/logos/SOL.svg',
      title: 'SOL'
    },
    {
      icon: '/crypto/logos/UNI.svg',
      title: 'UNI'
    },
    {
      icon: '/crypto/logos/USDC.svg',
      title: 'USDC'
    },
    {
      icon: '/crypto/logos/USDT.svg',
      title: 'USDT'
    },
    {
      icon: '/crypto/logos/XRP.svg',
      title: 'XRP'
    }
  ];

  return (
    <motion.section
      variants={staggerContainer(0.1, 0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className='bg-clr-14 flex shrink-0 flex-col items-center justify-start gap-16 self-stretch px-4 py-4 sm:px-6 lg:px-8'
    >
      <div className='relative flex w-full max-w-7xl flex-col items-center justify-start gap-8'>
        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className='flex w-full flex-col justify-start gap-4'
        >
          <p className='gradient-text text-center text-base leading-relaxed font-bold tracking-tight md:text-5xl'>
            Quick{' '}
            <span className='gradient-text rounded-lg border border-[#3c414c] px-2 py-1 text-base font-bold text-white transition-colors hover:bg-[#2a2e38] md:text-xl'>
              Buy
            </span>
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 'tween', 0.4, 1)}
          className='flex w-full max-w-4xl cursor-pointer grid-cols-1 flex-wrap items-center justify-center gap-3'
        >
          {topics.map((topic, index) => (
            <button
              key={index}
              className='mt-3 flex cursor-pointer items-center justify-center gap-3 rounded-[40px] border border-[#3c414c] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2a2e38] md:text-base'
            >
              <div className='relative h-8 w-8 shrink-0'>
                <Image
                  src={topic.icon}
                  alt={topic.title}
                  width={32}
                  height={32}
                  className='h-full w-full object-contain'
                />
              </div>
              {topic.title}
            </button>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default QuickBuy;
