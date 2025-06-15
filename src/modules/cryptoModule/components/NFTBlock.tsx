'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const NFTBlock = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
        }
      } catch (err) {
        console.error('Video autoplay failed:', err);
        if (videoRef.current) {
          videoRef.current.poster =
            'https://www.crypto.unlimit.com/wp-content/themes/unl-crypto/assets/images/page-main/forward-thinking/nft-bg.jpeg';
        }
      }
    };

    playVideo();
  }, []);

  return (
    <div
      className='relative h-96 overflow-hidden rounded-lg'
      style={{
        background: 'linear-gradient(135deg, #595959 0%, #000 33.31%)'
      }}
    >
      {/* Video Background positioned at bottom right */}
      <div className='absolute right-0 bottom-0 h-1/2 w-1/2 overflow-hidden'>
        <video
          ref={videoRef}
          className='h-full w-full object-contain'
          autoPlay
          playsInline
          muted
          loop
          preload='auto'
          poster='https://www.crypto.unlimit.com/wp-content/themes/unl-crypto/assets/images/page-main/forward-thinking/nft-bg.jpeg'
        >
          <source
            src='https://www.crypto.unlimit.com/wp-content/themes/unl-crypto/assets/images/page-main/forward-thinking/nft-bg.mp4'
            type='video/mp4'
          />
          <img
            src='https://www.crypto.unlimit.com/wp-content/themes/unl-crypto/assets/images/page-main/forward-thinking/nft-bg.jpeg'
            alt='NFT background'
            className='h-full w-full object-cover'
          />
        </video>
      </div>

      {/* Dark overlay for better text contrast */}
      <div className='bg-opacity-20 absolute inset-0 -z-1 bg-black'></div>

      {/* Content - Title at top left */}
      <div className='relative z-10 flex h-full flex-col p-6'>
        <div className='flex-1'>
          <h3 className='gradient-text-2 mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl'>NFTs</h3>
          <p className='max-w-md text-lg text-gray-100 md:text-xl'>
            Onboard users instantly from their bank into your NFT marketplace or NFT mint-drop
          </p>
        </div>

        {/* Button at bottom left */}
        <div className='mt-auto'>
          <Link
            href='/nft/'
            className='inline-block rounded-lg bg-purple-600 px-8 py-3 font-medium text-white transition-colors duration-300 hover:bg-purple-700'
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NFTBlock;
