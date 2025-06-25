import CTASections from '../home/components/CTASections';
import FAQSection from '../home/FAQSection';
import MobilePaySection from './components/MobilePaySection';
import MultiCurrencyCardsSection from './components/MultiCurrencyCardsSection';
import OrderSmashPay from './components/OrderSmashPay';
import SmashpayHeroSection from './components/SmashpayHeroSection';

const SmashCardCompo = () => {
  return (
    <>
      <SmashpayHeroSection />
      <MobilePaySection />
      <MultiCurrencyCardsSection />
      <div className='bg-clr-14 w-full'>
        <OrderSmashPay />
      </div>
      <FAQSection />
      <CTASections />
    </>
  );
};

export default SmashCardCompo;
