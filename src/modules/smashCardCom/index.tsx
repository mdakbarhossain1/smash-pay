import ReusableInfoCard from '@/shared/components/ReusableInfoCard';
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
      <div className='bg-clr-14 w-full'>
        <div className=''>
          <ReusableInfoCard
            heading='Order your SmashPay card in just 5 minutes'
            subheading='Enjoy the flexibility of a SmashPay card. Spend anytime, anywhere around the world.'
            features={[
              {
                icon: '/home/arrow-right2.svg',
                title: 'Create account',
                description: 'Open a free account in minutes.'
              },
              {
                icon: '/home/arrow-right2.svg',
                title: 'Order your card',
                description: 'Order a card for a one-time fee of $12.'
              },
              {
                icon: '/home/arrow-right2.svg',
                title: 'Start using your SmashPay card',
                description: 'Start spending as soon as your card is activated.'
              }
            ]}
            buttonText='Get started'
            buttonIcon='/home/arrow-right2.svg'
            image='/smashpay/smash.svg'
            imageAlt='Mobile payment illustration'
            imageLeft={true}
          />
        </div>
      </div>
      <FAQSection />
      <CTASections />
    </>
  );
};

export default SmashCardCompo;
