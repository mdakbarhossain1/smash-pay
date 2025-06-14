import CountryCoverageHome from '../home/components/CountryCoverageHome';
import CTASections from '../home/components/CTASections';
import FAQSection from '../home/FAQSection';
import PaymentOptions from './components/PaymentOptions';
import ProcessingHero from './components/ProcessingHero';
import SectionWhoAreWe from './components/SectionWhoAreWe';

const PaymentProcessingModule = () => {
  return (
    <>
      <ProcessingHero />
      <PaymentOptions />
      <SectionWhoAreWe />
      <CountryCoverageHome />
      <FAQSection />
      <CTASections />
    </>
  );
};

export default PaymentProcessingModule;
