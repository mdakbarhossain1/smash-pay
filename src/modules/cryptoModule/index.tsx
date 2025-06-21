import Link from 'next/link'; // You use <Link>, so import it
import CTASections from '../home/components/CTASections';
import FAQSection from '../home/FAQSection';
import CryptoBlogSection from './components/CryptoBlogSection';
import CryptoHero from './components/CryptoHero';
import DuoContentSection from './components/DuoContentSection';
import FeaturesSection from './components/FeaturesSection';
import Grid3DCardLayout from './components/Grid3DCardLayout';
import NFTBlock from './components/NFTBlock';
import PricingSection from './components/PricingSection';
import SecuritySection from './components/SecuritySection';
import SuccessNumbers from './components/SuccessNumbers';

const CryptoModule = () => {
  return (
    <>
      <CryptoHero />
      <DuoContentSection />
      <SuccessNumbers />
      <SecuritySection />

      <div className='relative z-10 w-full overflow-hidden bg-[#0a0d14] px-4 py-20 text-center md:py-32 lg:px-20'>
        <div className='absolute -top-40 -left-40 h-96 w-96 rounded-full bg-green-300/10 blur-3xl' />
        <div className='absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-purple-400/10 blur-3xl' />
        <PricingSection />
      </div>

      {/* Right Column */}
      <div className='flex flex-col gap-10 px-4 md:px-20'>
        <NFTBlock />

        <div className='bg-gradient-4 grid grid-cols-1 items-start justify-start gap-8 self-stretch rounded-lg pb-10'>
          <div className='relative flex h-auto w-full flex-col items-center justify-start gap-6 p-8 md:h-56 md:flex-row md:items-center md:justify-between md:p-12'>
            {/* Content */}
            <div className='flex flex-1 flex-col items-center gap-3 text-center md:items-start md:text-left'>
              <h3 className='gradient-text-2 text-3xl leading-tight font-bold tracking-wide'>Off-ramp</h3>
              <p className='text-lg leading-normal text-gray-300'>
                Discover the easiest way to cash out your crypto with GateFi&apos;s Off-Ramp solution
              </p>
              <Link
                href='/offramp'
                className='mt-3 w-fit cursor-pointer rounded-[40px] border border-[#3c414c] bg-lime-300 px-4 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-[#2a2e38] hover:text-lime-300 md:text-base'
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FeaturesSection />
      <Grid3DCardLayout />

      <div className='relative z-10 w-full overflow-hidden bg-[#0a0d14] px-4 py-20 text-center md:py-16 lg:px-20'>
        <div className='absolute -top-40 -left-40 h-96 w-96 rounded-full bg-green-300/10 blur-3xl' />
        <div className='absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-purple-400/10 blur-3xl' />
        <CryptoBlogSection />
      </div>

      <FAQSection />
      <CTASections />
    </>
  );
};

export default CryptoModule;
