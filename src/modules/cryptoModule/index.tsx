import Link from 'next/link';
import CTASections from '../home/components/CTASections';
import Featured from '../home/components/Featured';
import CryptoHero from './components/CryptoHero';
import DuoContentSection from './components/DuoContentSection';
import FeaturesSection from './components/FeaturesSection';
import ForwardThinkingCard from './components/ForwardThinkingCard';
import GameFiCard from './components/GameFiCard';
import Grid3DCardLayout from './components/Grid3DCardLayout';
import NFTBlock from './components/NFTBlock';
import QuickBuy from './components/QuickBuy';
import SecuritySection from './components/SecuritySection';
import SuccessNumbers from './components/SuccessNumbers';

const CryptoModule = () => {
  return (
    <>
      <CryptoHero />
      <Featured />
      <DuoContentSection />
      <SuccessNumbers />
      <SecuritySection />
      <QuickBuy />
      <section className='bg-clr-14 w-full py-20 sm:py-28 md:py-32'>
        <div className='m-auto max-w-7xl px-4'>
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
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
      <FeaturesSection />
      <Grid3DCardLayout />
      <CTASections />
    </>
  );
};

export default CryptoModule;
