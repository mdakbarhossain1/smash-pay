import CTASections from '../home/components/CTASections';
import FAQSection from '../home/FAQSection';
import PaymentOptions from './components/PaymentOptions';
import PersonalHeroSection from './components/PersonalHeroSection';
import PricingComparison from './components/PricingComparison';
import PricingTransparency from './components/PricingTransparency';
import SecuritySection from './components/SecuritySection';
import ThreeEasySteps from './components/ThreeEasySteps';

const Personal = () => {
  return (
    <>
      <PersonalHeroSection />
      <PricingComparison />
      <PricingTransparency />
      <ThreeEasySteps />
      <PaymentOptions />
      <SecuritySection />
      <FAQSection />
      <CTASections />
    </>
  );
};

export default Personal;
