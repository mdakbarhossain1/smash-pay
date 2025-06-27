'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type CardProps = {
  title: string;
  content: string;
  bgColor: string;
  rotate: string;
  position: string;
  zIndex: string;
  delay: number;
};

const cards: CardProps[] = [
  {
    title: 'Borderless Spending',
    content: 'SmashPay lets you spend globally without hidden fees.',
    bgColor: 'bg-[#f3f4f6]', // Light gray
    rotate: '-rotate-[8deg]',
    position: '-translate-x-10 translate-y-6',
    zIndex: 'z-10',
    delay: 0
  },
  {
    title: 'SmashPay Card',
    content: 'No minimum balance. No hassle. Just payments.',
    bgColor: 'bg-white',
    rotate: 'rotate-0',
    position: 'translate-x-0 translate-y-0',
    zIndex: 'z-30',
    delay: 0.15
  },
  {
    title: 'Global Acceptance',
    content: 'Accepted in 180+ countries. Your money, your control.',
    bgColor: 'bg-[#fef3c7]', // Light yellow
    rotate: 'rotate-[8deg]',
    position: 'translate-x-10 translate-y-6',
    zIndex: 'z-20',
    delay: 0.3
  }
];

const CardStack = () => {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gradient-to-br from-[#f9fafb] to-[#e5e7eb] px-4'>
      <div className='relative h-[260px] w-full max-w-md'>
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: card.delay }}
            className={`absolute h-full w-full rounded-3xl p-6 shadow-2xl ${card.bgColor} ${card.position} ${card.zIndex}`}
          >
            <Image src={'/crypto/smash-pay-green.png'} fill alt='imag' objectFit='contain' />
            {/* <h3 className='mb-2 text-xl font-bold text-gray-800'>{card.title}</h3>
            <p className='text-sm text-gray-600'>{card.content}</p> */}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardStack;
