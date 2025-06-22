'use client';

import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { motion } from 'framer-motion';
import React from 'react';

type CardData = {
  id: number;
  title: string;
  description: string;
  type: 'stats' | 'image' | 'feature' | 'testimonial' | 'cta';
  image?: string;
  cta?: string;
  stats?: { image: string }[];
  author?: string;
  role?: string;
  gradient?: string;
};

const cardData: CardData[] = [
  {
    id: 1,
    title: 'Robust Security',
    description: 'Advanced security protocols to protect your data and transactions.',
    type: 'stats',
    stats: [
      { image: '/crypto/smash-pay-green.png' },
      { image: '/crypto/smash-pay-purple.png' },
      { image: '/crypto/smash-pay-red.png' }
    ],
    gradient: 'bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500'
  },
  {
    id: 2,
    title: 'Scalable Solutions',
    description: 'Flexible and scalable solutions to grow with your needs.',
    type: 'image'
  },
  {
    id: 3,
    title: 'Secure Transactions',
    description: 'End-to-end encryption for all operations',
    type: 'feature',
    cta: 'Learn more'
  },
  {
    id: 4,
    title: 'End-to-End Encryption',
    description: 'Secure all communications with strong encryption methods.',
    type: 'testimonial',
    author: 'Sarah Johnson',
    role: 'CTO at TechCorp'
  },
  {
    id: 5,
    title: 'Multi-Factor Authentication',
    description: 'Add extra layers of security to protect user accounts.',
    type: 'cta',
    cta: 'Sign Up Now'
  }
];

const cardItems = [
  {
    id: 1,
    title: 'End-to-End Encryption',
    description: 'Secure all communications with strong encryption methods.',
    icon: '🔒',
    gradient: 'from-purple-600 to-blue-500'
  },
  {
    id: 2,
    title: 'Fast Performance',
    description: 'Optimized for speed with minimal latency.',
    icon: '⚡',
    gradient: 'from-amber-500 to-pink-500'
  },
  {
    id: 3,
    title: 'Cross-Platform',
    description: 'Works seamlessly across all your devices.',
    icon: '🔄',
    gradient: 'from-emerald-500 to-cyan-500'
  },
  {
    id: 4,
    title: 'Privacy Focused',
    description: 'No data collection or tracking.',
    icon: '👁️',
    gradient: 'from-violet-600 to-indigo-600'
  }
];
const tickerVariants = {
  animate: {
    x: [0, -1100],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 20,
        ease: 'linear'
      }
    }
  }
};

export default function Grid3DCardLayout() {
  return (
    <div className='w-full bg-gradient-to-r from-[#1d2436] via-[#1d2129] to-[#29283c] py-12'>
      <div className='mx-auto max-w-7xl px-6'>
        {/* Header Section */}
        <div className='mb-5 flex flex-col items-center py-6 text-center'>
          <motion.div
            className='mb-6 inline-block rounded-lg border border-[rgba(191,162,246,0.2)] bg-[rgba(191,162,246,0.1)] px-6 py-3 backdrop-blur-xl'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'easeInOut' }}
          >
            <p className='bg-gradient-to-r from-[rgb(191,162,246)] to-[rgb(80,248,228)] bg-clip-text text-sm font-semibold tracking-wide text-transparent'>
              COMPONENT SHOWCASE
            </p>
          </motion.div>

          <motion.h2
            className='mb-4 text-3xl font-bold text-white md:text-4xl'
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Diverse Component Collection
          </motion.h2>

          <motion.p
            className='max-w-2xl text-base text-gray-300 md:text-lg'
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Explore our variety of interactive components designed for different use cases.
          </motion.p>
        </div>

        {/* Section 1: Card 1, 2, 3 */}
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          {/* Left big card */}
          <div className='md:col-span-2'>
            <CardWrapper className='h-full'>
              <StatsCard {...cardData[0]} />
            </CardWrapper>
          </div>

          {/* Right stacked cards */}
          <div className='flex flex-col gap-6'>
            <CardWrapper>
              <ImageCard {...cardData[1]} />
            </CardWrapper>
            <CardWrapper>
              <FeatureCard {...cardData[2]} />
            </CardWrapper>
          </div>
        </div>

        {/* Section 2: Card 4, 5 */}
        <div className='mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5'>
          <CardWrapper className='sm:col-span-1 md:col-span-2'>
            <TestimonialCard {...cardData[3]} />
          </CardWrapper>
          <CardWrapper className='sm:col-span-1 md:col-span-3'>
            <CTACard {...cardData[4]} />
          </CardWrapper>
        </div>
      </div>
    </div>
  );
}

// 1. Stats Card Component
function StatsCard({ title, description, stats, gradient }: CardData) {
  return (
    <CardContainer className='h-full w-full'>
      <CardBody
        className={`group/card relative h-full w-full overflow-hidden rounded-2xl border border-white/[0.1] p-6 shadow-xl transition-all duration-300 hover:shadow-2xl dark:border-white/[0.2] ${gradient}`}
      >
        <div className='flex h-full flex-col justify-between'>
          <div className='z-50'>
            <CardItem translateZ={30} className='text-xl font-bold text-white'>
              {title}
            </CardItem>
            <CardItem translateZ={20} className='mt-2 mb-6 text-sm text-white/80'>
              {description}
            </CardItem>
          </div>

          {/* Replacing custom cards with image cards */}
          <div className='mb-[-20px] flex items-center justify-center space-x-[-70px]'>
            {stats?.map((stat, index) => (
              <motion.div
                key={index}
                className={`relative aspect-[5/3] w-full max-w-[260px] overflow-hidden rounded-2xl shadow-2xl sm:max-w-[300px] ${index !== 0 ? '-ml-8 sm:-ml-16' : ''}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  rotate: 38,
                  scale: 0.8
                }}
                whileHover={{
                  y: -10,
                  rotate: 43
                  // scale: 0.85
                }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 20
                }}
              >
                <img
                  src={stat.image}
                  alt={`Card ${index + 1}`}
                  className='h-full w-full rounded-2xl object-cover'
                />
              </motion.div>
            ))}
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}

// 2. Image Card Component
function ImageCard({ title, description }: CardData) {
  return (
    <CardContainer className='h-full w-full'>
      <CardBody className='group/card relative h-full w-full overflow-hidden rounded-xl border border-black/[0.1] text-white shadow-lg transition-all duration-300 hover:shadow-xl dark:border-white/[0.2] dark:hover:shadow-emerald-500/[0.1]'>
        <CardItem
          translateZ={50}
          className='h-full w-full rounded-2xl border border-white/10 bg-white/5 shadow-inner backdrop-blur-lg transition-transform duration-300 group-hover/card:scale-[1.01]'
        >
          <div className='flex h-full flex-col justify-between p-8'>
            <div>
              <h3 className='mb-2 text-2xl font-semibold text-white'>{title}</h3>
              <p className='text-lg leading-relaxed text-white/80'>{description}</p>
            </div>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

// 3. Feature Card Component
function FeatureCard({ title, description, cta }: CardData) {
  return (
    <CardContainer className='h-full w-full'>
      <CardBody className='group/card relative h-full w-full overflow-hidden rounded-xl border border-black/[0.1] shadow-lg transition-all duration-300 hover:shadow-xl dark:border-white/[0.2] dark:hover:shadow-emerald-500/[0.1]'>
        <div
          className='flex h-full flex-col items-center justify-center'
          style={{
            backgroundImage: 'linear-gradient(180deg, #1de4d3 0%, #bfa2f6 100%)'
          }}
        >
          <CardItem translateZ={30} className='p-6 text-white backdrop-blur'>
            <div className='flex flex-col gap-2'>
              {/* Title */}
              <h4 className='text-xl font-semibold text-neutral-900 dark:text-white'>
                User-Friendly Interface
              </h4>

              {/* Description */}
              <p className='text-lg text-neutral-600 dark:text-neutral-300'>
                Intuitive design for seamless navigation and usage.
              </p>
            </div>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

// 4. Testimonial Card Component
function TestimonialCard({ title, description }: CardData) {
  return (
    <CardContainer className='h-full w-full'>
      <CardBody className='group/card bg-clr-14 relative h-full w-full overflow-hidden rounded-xl border border-white/[0.1] shadow-lg transition-all duration-300 hover:shadow-xl'>
        {/* Content */}
        <div className='relative z-10 flex h-full flex-col justify-between p-6'>
          <CardItem translateZ={20} className='mb-4'>
            <h2 className='text-3xl font-bold text-white'>{title}</h2>
          </CardItem>
          {/* Description */}
          <CardItem translateZ={20} className='mb-4 text-white/80'>
            {description || 'Intuitive design for seamless navigation and usage.'}
          </CardItem>

          {/* Bottom Globe Image */}
          <CardItem translateZ={10}>
            <img src='/crypto/earth.gif' alt='Globe' className='mx-auto rounded-full object-cover' />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

// 5. CTA Card Component
function CTACard({ title, description, cta }: CardData) {
  return (
    <CardContainer className='h-full w-full'>
      <CardBody className='group/card relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black shadow-xl'>
        {/* Background elements */}
        <div className='absolute inset-0 overflow-hidden opacity-20'>
          <div className='absolute -top-20 -left-20 h-64 w-64 rounded-full bg-purple-500 mix-blend-soft-light'></div>
          <div className='absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-cyan-500 mix-blend-soft-light'></div>
        </div>

        <div className='relative h-full flex-col p-8'>
          {/* Title */}
          <CardItem translateZ={20} className='mb-4'>
            <h2 className='text-3xl font-bold text-white'>{title}</h2>
          </CardItem>

          {/* Description */}
          <CardItem translateZ={20} className='mb-12'>
            <p className='text-lg text-gray-200'>{description}</p>
          </CardItem>

          {/* Animated Cards */}
          <div className='relative h-[220px] w-full overflow-hidden'>
            <motion.div
              className='absolute flex items-center gap-6'
              variants={tickerVariants}
              animate='animate'
            >
              {[...cardItems, ...cardItems, ...cardItems].map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className={`flex h-[180px] w-72 flex-shrink-0 flex-col justify-between rounded-2xl bg-gradient-to-br ${item.gradient} p-6 shadow-lg`}
                >
                  <div className='text-4xl'>{item.icon}</div>
                  <div>
                    <h3 className='mb-2 text-xl font-bold text-white'>{item.title}</h3>
                    <p className='text-gray-100'>{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}

// Grid cell wrapper
function CardWrapper({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}
