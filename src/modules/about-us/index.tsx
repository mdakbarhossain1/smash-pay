import CTASections from '../home/components/CTASections';
import AboutUsSection from './components/AboutUsSection';
import OfficesSection from './components/OfficesSection';
import OurStorySection from './components/OurStorySection';

const AboutPage = () => {
  return (
    <>
      <AboutUsSection />
      <OurStorySection />
      {/* <StatsSection /> */}
      {/* <LeadershipSection /> */}
      <OfficesSection />
      <CTASections />
    </>
  );
};

export default AboutPage;
