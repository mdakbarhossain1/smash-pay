'use client';
import Image from 'next/image';

const ForwardThinkingCard = () => {
  return (
    <div className='bg-clr-14 relative overflow-hidden rounded-lg p-8 md:p-12'>
      {/* Background Image */}
      <Image
        src='/crypto/viktor-unsplash.jpg'
        alt='Background'
        fill
        priority
        quality={90}
        className='object-cover object-center opacity-70'
      />

      {/* Content */}
      <div className='relative z-10 pt-[200px]'>
        <h3 className='mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl'>
          <span className='gradient-text-2'>STOP WAITING ON SOMEONE</span> WHO'S WAITING ON SOMEONE
        </h3>
        <p className='max-w-2xl text-lg text-gray-200 md:text-xl'>
          We possess complete control over every aspect of our payment procedures, including crypto liquidity
        </p>
      </div>
    </div>
  );
};

export default ForwardThinkingCard;
