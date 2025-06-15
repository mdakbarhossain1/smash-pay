'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const GameFiCard = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays when component mounts
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
        }
      } catch (err) {
        console.error('Video autoplay failed:', err);
        // Fallback: Show poster image if video can't play
        if (videoRef.current) {
          videoRef.current.poster =
            'https://www.crypto.unlimit.com/wp-content/themes/unl-crypto/assets/images/page-main/forward-thinking/gamefi-bg.jpeg';
        }
      }
    };

    playVideo();
  }, []);

  return (
    <div className='relative flex h-96 items-start justify-center overflow-hidden rounded-lg py-5'>
      {/* Video Background with fallback */}
      <video
        ref={videoRef}
        className='absolute inset-0 z-0 h-full w-full object-cover'
        autoPlay
        playsInline
        muted
        loop
        preload='auto'
        poster='https://www.crypto.unlimit.com/wp-content/themes/unl-crypto/assets/images/page-main/forward-thinking/gamefi-bg.jpeg'
      >
        <source
          src='https://www.crypto.unlimit.com/wp-content/themes/unl-crypto/assets/images/page-main/forward-thinking/gamefi-bg.mp4'
          type='video/mp4'
        />
        {/* Fallback image if video doesn't load */}
        <img
          src='https://www.crypto.unlimit.com/wp-content/themes/unl-crypto/assets/images/page-main/forward-thinking/gamefi-bg.jpeg'
          alt='GameFi background'
          className='absolute inset-0 h-full w-full object-cover'
        />
      </video>
      {/* Content */}
      <div className='relative z-10 mx-auto flex h-full max-w-2xl flex-col justify-between px-6 text-start'>
        <div className=''>
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
