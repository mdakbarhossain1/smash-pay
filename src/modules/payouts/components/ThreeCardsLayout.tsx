'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  color: string;
  delay: number;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, color, delay, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-xl p-8 shadow-xl ${color} flex h-full flex-col ${className}`}
      style={{ zIndex: 10 }}
    >
      <div className='bg-opacity-20 absolute top-4 right-4 h-12 w-12 rounded-full bg-white'></div>
      <h3 className='mb-4 text-2xl font-bold text-white'>{title}</h3>
      <p className='text-opacity-80 text-white'>{description}</p>
    </motion.div>
  );
};

const ThreeCardsLayout: React.FC = () => {
  const cards = [
    {
      title: 'Card 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      color: 'bg-blue-600',
      position: 'md:left-0 md:top-0 md:translate-y-0'
    },
    {
      title: 'Card 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      color: 'bg-purple-600',
      position: 'md:left-1/2 md:top-0 md:-translate-x-1/2 md:-translate-y-8'
    },
    {
      title: 'Card 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      color: 'bg-pink-600',
      position: 'md:right-0 md:top-0 md:translate-y-0'
    }
  ];

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-50 p-8'>
      <div className='relative w-full max-w-6xl'>
        <h2 className='mb-16 text-center text-4xl font-bold text-gray-800'>Three Card Layout</h2>

        <div className='relative h-96'>
          {/* Background decorative element */}
          <div className='absolute inset-0 -z-10 flex items-center justify-center'>
            <div className='h-80 w-80 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-70'></div>
          </div>

          {/* Cards container */}
          <div className='relative h-full'>
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className={`absolute w-full md:w-80 ${card.position}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  title={card.title}
                  description={card.description}
                  color={card.color}
                  delay={index * 0.1}
                  className='h-64'
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeCardsLayout;
