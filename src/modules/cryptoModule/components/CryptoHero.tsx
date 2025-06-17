'use client';

import Image from 'next/image';
import Link from 'next/link';

const CryptoHero = () => {
  return (
    <section className='relative z-10 w-full overflow-hidden bg-[#0a0d14] px-4 py-20 md:py-32 lg:px-20'>
      {/* Background Circles */}
      <div className='absolute -top-40 -left-40 h-96 w-96 rounded-full bg-green-300/10 blur-3xl' />
      <div className='absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-purple-400/10 blur-3xl' />

      <div className='relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-16 lg:flex-row'>
        {/* Left Content */}
        <div className='max-w-2xl space-y-6 text-center lg:text-left'>
          <p className='inline-block rounded border border-purple-300/20 bg-purple-300/10 px-3 py-1 text-sm font-semibold text-purple-300 backdrop-blur'>
            <span className='bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent'>
              ALL IN ONE - WEB3 FRAMER TEMPLATE
            </span>
          </p>

          <h1 className='text-4xl leading-tight font-bold text-white md:text-5xl'>
            <span className='block bg-gradient-to-b from-white to-gray-800 bg-clip-text text-transparent'>
              Promote your Web3 Startup
            </span>
            <span className='block bg-gradient-to-b from-white to-gray-800 bg-clip-text text-transparent'>
              with Cryptox Framer Template
            </span>
          </h1>

          <div className='pt-4'>
            <Link
              href='https://ckurt.lemonsqueezy.com/buy/8fa1f143-8036-49b3-bcb8-9a296ef37d87'
              target='_blank'
              className='inline-block rounded-lg bg-teal-300 px-6 py-3 font-medium text-black shadow-md transition hover:shadow-lg'
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className='relative w-full max-w-3xl'>
          <div className='absolute inset-0 -z-10 rounded-2xl bg-green-300/10 blur-2xl' />
          <Image
            src='https://framerusercontent.com/images/EY7Wbft06m3xNjh3vuD9fRNDu0.png?scale-down-to=2048'
            alt='Hero Image'
            width={1200}
            height={600}
            className='h-auto w-full rounded-xl object-contain'
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default CryptoHero;
