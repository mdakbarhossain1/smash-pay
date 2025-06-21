import CTASections from '../home/components/CTASections';
import FAQSection from '../home/FAQSection';
import CryptoBlogSection from './components/CryptoBlogSection';
import CryptoHero from './components/CryptoHero';
import DuoContentSection from './components/DuoContentSection';
import FeaturesSection from './components/FeaturesSection';
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
      <FeaturesSection />
      <div className='relative z-10 w-full overflow-hidden bg-[#0a0d14] px-4 py-20 text-center md:py-32 lg:px-20'>
        <div className='absolute -top-40 -left-40 h-96 w-96 rounded-full bg-green-300/10 blur-3xl' />
        <div className='absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-purple-400/10 blur-3xl' />
        <PricingSection />
      </div>

      {/* <Grid3DCardLayout /> */}

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
