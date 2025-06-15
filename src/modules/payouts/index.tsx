import TestimonialSection from '../careers/components/TestimonialSection';
import FlexibleForBusiness from './components/FlexibleForBusiness';
import KeyFeatures from './components/KeyFeatures';
import LeadForm from './components/LeadForm';
import OneIntegration from './components/OneIntegration';
import PayoutsHero from './components/PayoutHeroSection';
import WhoWeAreFor from './components/WhoWeAreFor';

const Payouts = () => {
  return (
    <>
      <PayoutsHero />
      <OneIntegration />
      <WhoWeAreFor />
      <KeyFeatures />
      <FlexibleForBusiness />
      <TestimonialSection />
      <LeadForm />
    </>
  );
};

export default Payouts;
