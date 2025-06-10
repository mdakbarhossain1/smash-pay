import CTASections from '../home/components/CTASections';
import CareerHeroSection from './components/CareerHeroSection';
import CultureSection from './components/CultureSection';
import LogoShowcase from './components/LogoShowcase';
import OfficeLocations from './components/OfficeLocations';
import OpportunitiesSection from './components/OpportunitiesSection';
import TestimonialSection from './components/TestimonialSection';

const CareerSection = () => {
  return (
    <>
      <CareerHeroSection />
      <LogoShowcase />
      <CultureSection />
      <OfficeLocations />
      <TestimonialSection />
      <OpportunitiesSection />
      <CTASections />
    </>
  );
};

export default CareerSection;
