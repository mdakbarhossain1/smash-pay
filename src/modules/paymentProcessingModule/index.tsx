'use client';
import CountryCoverageHome from '../home/components/CountryCoverageHome';
import CTASections from '../home/components/CTASections';
import FAQSection from '../home/FAQSection';
import PromotionSection from '../home/PromotionSection';
import KeyBenifits from './components/KeyBenifits';
import PaymentOptions from './components/PaymentOptions';
import ProcessingHero from './components/ProcessingHero';
import SectionWhoAreWe from './components/SectionWhoAreWe';

const PaymentProcessingModule = () => {
  return (
    <>
      <ProcessingHero />
      <PaymentOptions />
      <SectionWhoAreWe />
      <KeyBenifits />
      <PromotionSection />
      {/* <div className='bg-gradient m-auto flex w-full flex-col items-center justify-center gap-10 py-20'>
        <div className='gradient-text text-5xl font-bold text-white'>Added features</div>
        <ConfettiGenerateLink />
        <ConfettiInstallment />
        <ConfettieSubscription />
      </div> */}
      <CountryCoverageHome />
      <FAQSection />
      <CTASections />
    </>
  );
};

export default PaymentProcessingModule;
