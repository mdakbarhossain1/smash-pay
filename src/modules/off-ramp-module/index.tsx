import ReusableInfoCard from '@/shared/components/ReusableInfoCard';
import Link from 'next/link';
import ForwardThinkingCard from '../cryptoModule/components/ForwardThinkingCard';
import GameFiCard from '../cryptoModule/components/GameFiCard';
import NFTBlock from '../cryptoModule/components/NFTBlock';
import QuickBuy from '../cryptoModule/components/QuickBuy';
import CTASections from '../home/components/CTASections';
import OffRampSection from './components/OffRampSection';

const OffRamModule = () => {
  return (
    <>
      <OffRampSection />
      <QuickBuy />

      <section className='bg-gradient w-full py-20 sm:py-24 md:py-32'>
        <div className='m-auto max-w-7xl px-4'>
          <div className='grid grid-cols-1 items-center gap-10 md:grid-cols-2'>
            {/* Left Column */}
            <div className='flex flex-col gap-10'>
              <ForwardThinkingCard />
              <GameFiCard />
            </div>
            {/* Right Column */}
            <div className='flex flex-col gap-10'>
              <NFTBlock />

              <div className='bg-gradient-4 grid grid-cols-1 items-start justify-start gap-8 self-stretch rounded-lg pb-10'>
                <div className='relative flex h-auto w-full flex-col items-center justify-start gap-6 p-8 md:h-56 md:flex-row md:items-center md:justify-between md:p-12'>
                  {/* Content */}
                  <div className='flex flex-1 flex-col items-center gap-3 text-center md:items-start md:text-left'>
                    <h3 className='gradient-text-2 text-3xl leading-tight font-bold tracking-wide'>
                      Off-ramp
                    </h3>
                    <p className='text-lg leading-normal text-gray-300'>
                      Discover the easiest way to cash out your crypto with GateFi&apos;s Off-Ramp solution
                    </p>
                    <Link
                      href={'/offramp'}
                      className='mt-3 w-fit cursor-pointer rounded-[40px] border border-[#3c414c] bg-lime-300 px-4 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-[#2a2e38] hover:text-lime-300 md:text-base'
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='bg-clr-14 w-full py-16'>
        <div className='m-auto max-w-7xl px-2'>
          <ReusableInfoCard
            heading='All popular global and local payment methods'
            subheading="To cash out your crypto with SmashPay Crypto's Off-Ramp Solution"
            features={[
              {
                icon: '/smashpay/shield-tick-10.svg',
                title: 'Global coverage',
                description:
                  'We support multiple currencies and payment methods, ensuring a seamless experience for our users across the globe.'
              },
              {
                icon: '/smashpay/contactless-10.svg',
                title: 'Instant Access to your funds',
                description:
                  'Pay quickly without the hassle of using a card — and completely avoid the contactless limit.'
              }
            ]}
            buttonText='Get started'
            buttonIcon='/home/arrow-right2.svg'
            image='/smashpay/image0.png'
            imageAlt='Mobile payment illustration'
            imageLeft={false}
          />
        </div>
      </div>

      <CTASections />
    </>
  );
};

export default OffRamModule;
