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
      <HowToGetStarted />
      <PromotionSection />
      <FAQSection />
      <CTASections />
    </>
  );
};

export default Home;
