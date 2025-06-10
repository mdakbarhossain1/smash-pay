import CTASections from '../home/components/CTASections';
import AboutUsSection from './components/AboutUsSection';
import HistorySection from './components/HistorySection ';
import LeadershipSection from './components/LeadershipSection';
import OfficesSection from './components/OfficesSection';
import OurStorySection from './components/OurStorySection';
import StatsSection from './components/StatsSection';

const AboutPage = () => {
  return (
    <>
      <AboutUsSection />
      <OurStorySection />
      <StatsSection />
      <HistorySection />
      <LeadershipSection />
      <OfficesSection />
      <CTASections />
    </>
  );
};

export default AboutPage;
