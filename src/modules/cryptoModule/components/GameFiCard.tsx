'use client';
import Image from 'next/image';
import Link from 'next/link';

const GameFiCard = () => {
  return (
    <div className='relative flex h-96 items-start justify-center overflow-hidden rounded-lg py-5'>
      {/* Static Background Image */}
      <Image
        src='/crypto/fabio-unsplash.jpg'
        alt='GameFi background'
        fill
        className='z-0 object-cover'
        priority
      />

      {/* Content */}
      <div className='relative z-10 mx-auto flex h-full max-w-2xl flex-col justify-between bg-black/30 px-6 text-start backdrop-blur-sm'>
        <div>
          <h3 className='gradient-text-2 mb-4 text-3xl font-bold text-lime-300 md:text-4xl lg:text-5xl'>
            GAMEFI
          </h3>
          <p className='mb-8 text-lg text-gray-100 md:text-xl'>
            Supercharge your in-game economies with the most comprehensive crypto payment stack in the world
          </p>
        </div>
        <Link
          href='/gamefi/'
          className='inline-block max-w-[120px] rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition-colors duration-300 hover:bg-blue-700'
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default GameFiCard;
