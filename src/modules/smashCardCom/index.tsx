import CTASections from '../home/components/CTASections';
import FAQSection from '../home/FAQSection';
import MobilePaySection from './components/MobilePaySection';
import MultiCurrencyCardsSection from './components/MultiCurrencyCardsSection';
import SmashpayHeroSection from './components/SmashpayHeroSection';

const SmashCardCompo = () => {
  return (
    <>
      <SmashpayHeroSection />
      <MobilePaySection />
      <MultiCurrencyCardsSection />
      <FAQSection />
      <CTASections />
    </>
  );
};

export default SmashCardCompo;
