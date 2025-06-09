'use client';
import CTASections from './components/CTASections';
import CustomerStories from './components/CustomerStories';
import Featured from './components/Featured';
import Hero from './components/Hero';
import HowToGetStarted from './components/HowToGetStarted';
import MultiCurrency from './components/MultiCurrency';
import SmashPayApp from './components/SmashPayApp';
import SmashPayCard from './components/SmashPayCard';
import WeOffer from './components/WeOffer';
import WhySmashPay from './components/WhySmashPay';
import FAQSection from './FAQSection';
import PromotionSection from './PromotionSection';

const Home = () => {
  const steps = [
    {
      id: 0,
      title: 'Create your SmashPay account',
      content:
        "Start your registration online or via the SmashPay app. We'll ask for some personal information including your contact details, nationality and driver's license number (optional).",
      icon: '/chevron-up0.svg'
    },
    {
      id: 1,
      title: 'Enter your transfer details',
      content: 'Provide the details of your transfer including amount, currency, and recipient information.',
      icon: '/chevron-down3.svg'
    },
    {
      id: 2,
      title: 'Send funds for your transfer',
      content: 'Complete your transfer by sending the funds through your preferred payment method.',
      icon: '/chevron-down4.svg'
    }
  ];
  return (
    <>
      <Hero />
      <Featured />
      <WeOffer />
      <WhySmashPay />
      <MultiCurrency />
      <SmashPayCard />
      <SmashPayApp />
      <CustomerStories />
      <HowToGetStarted steps={steps} title="It's simple to start using SmashPay" />
      <PromotionSection />
      <FAQSection />
      <CTASections />
    </>
  );
};

export default Home;
