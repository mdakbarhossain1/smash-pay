'use client';

import Link from 'next/link';

const CryptoHero = () => {
  return (
    <section className='relative z-10 w-full overflow-hidden bg-[#0a0d14] px-4 py-20 md:py-32 lg:px-20'>
      {/* Background Circles */}
      <div className='absolute -top-40 -left-40 h-96 w-96 rounded-full bg-green-300/10 blur-3xl' />
      <div className='absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-purple-400/10 blur-3xl' />

      <div className='relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-between gap-16 lg:flex-row'>
        {/* Left Content */}
        <div className='max-w-2xl space-y-6 text-center lg:text-left'>
          {/* <p className='inline-block rounded border border-purple-300/20 bg-purple-300/10 px-3 py-1 text-sm font-semibold text-purple-300 backdrop-blur'>
            <span className='bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent'>
              ALL IN ONE - WEB3 FRAMER TEMPLATE
            </span>
          </p> */}

          <h1 className='bg-gradient-to-b from-[#7B7D81] to-white bg-clip-text text-4xl leading-tight font-bold tracking-[-1px] text-transparent md:text-5xl lg:text-7xl'>
            <b>
              {' '}
              NEXT <br /> GENERATION{' '}
            </b>{' '}
            <br />
            <span className='text-bold gradient-text-2'>FIAT ON-RAMP</span> <br />
          </h1>

          <div className='pt-4'>
            <Link
              href='/contact-us'
              // target='_blank'
              className='inline-block rounded-lg bg-teal-300 px-6 py-3 font-medium text-black shadow-md transition hover:shadow-lg'
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className='relative h-[600px] w-[390px] max-w-3xl rounded-xl border md:h-[633px] md:w-[430px]'>
          <div className='absolute inset-0 -z-10 rounded-2xl bg-green-300/10 blur-2xl' />

          <iframe
            src='https://buy.onramper.com?apiKey=pk_prod_01J94D4NB6SD2HHMPDTRJ1H8T9&mode=buy,sell,swap&defaultFiat=usd&defaultPaymentMethod=creditcard&sell_defaultFiat=usd&sell_defaultPaymentMethod=creditcard&themeName=dark&successRedirectUrl=https%3A%2F%2Fsmashpay.vercel.app&failureRedirectUrl=https%3A%2F%2Fsmashpay.vercel.app'
            title='SmashPay'
            className='rounded-xl'
            style={{ height: '100%', width: '100%', border: 'none' }}
            allow='accelerometer; autoplay; camera; gyroscope; payment; microphone'
          />
        </div>
      </div>
    </section>
  );
};

export default CryptoHero;
