'use client';
import CTASections from '../home/components/CTASections';
import FAQSection from '../home/FAQSection';
import PromotionSection from '../home/PromotionSection';
import PricingHeroSection from './components/PricingHeroSection';
import PricingSection from './components/PricingSection';

const PricingModule = () => {
  return (
    <>
      <PricingHeroSection />
      <PricingSection />
      <PromotionSection />
      <FAQSection />
      <CTASections />
    </>
  );
};

export default PricingModule;
