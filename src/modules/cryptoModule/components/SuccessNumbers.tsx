'use client';

import React from 'react';
import EcosystemSlider from './EcosystemSlider';

const stats = [
  {
    number: '124K+',
    label: 'Aggregate Agreement Authors'
  },
  {
    number: '5.67B+',
    label: 'Total Transactions'
  },
  {
    number: '982.15M+',
    label: 'Unique Addresses'
  },
  {
    number: '42.16M+',
    label: 'Smart Contracts Completed'
  }
];

const SuccessNumbers: React.FC = () => {
  return (
    <section className='relative z-10 w-full overflow-hidden bg-[#0a0d14] px-4 py-20 text-center md:py-16 lg:px-20'>
      {/* Background Circles */}
      <div className='absolute -top-40 -left-40 h-96 w-96 rounded-full bg-green-300/10 blur-3xl' />
      <div className='absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-purple-400/10 blur-3xl' />
      {/* NUMBERS Tag */}
      <div className='mb-4 inline-block rounded border border-purple-300/20 bg-purple-300/10 px-4 py-1 backdrop-blur'>
        <p className='bg-gradient-to-l from-purple-300 to-teal-300 bg-clip-text font-semibold tracking-wider text-transparent'>
          NUMBERS
        </p>
      </div>

      {/* Heading */}
      <h2 className='mb-2 text-3xl font-bold text-white md:text-4xl'>Discover Our Success Stories</h2>
      <p className='mx-auto mb-12 max-w-xl text-gray-300'>
        Discover our milestones and successes that demonstrate our commitment to excellence and innovation.
      </p>

      {/* Stats */}
      <div className='mx-auto mb-24 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className='flex flex-col items-center rounded border border-purple-300/20 bg-purple-300/5 p-6 backdrop-blur'
          >
            <h3 className='mb-2 bg-gradient-to-r from-teal-300 to-purple-300 bg-clip-text text-2xl font-bold text-transparent md:text-3xl'>
              {stat.number}
            </h3>
            <p className='text-center text-sm text-gray-300'>{stat.label}</p>
          </div>
        ))}
      </div>
      <EcosystemSlider />
    </section>
  );
};

export default SuccessNumbers;
