import CountryCoverageHome from '../home/components/CountryCoverageHome';
import CTASections from '../home/components/CTASections';
import CustomerStories from '../home/components/CustomerStories';
import FAQSection from '../home/FAQSection';
import BankBeatingRates from './components/BankBeatingRates';
import BusinessPaymentsSection from './components/BusinessPaymentsSection';
import IndustrySolutionsSection from './components/IndustrySolutionsSection';
import PaymentOptionsSection from './components/PaymentOptionsSection';
import TrustedBusinessesSection from './components/TrustedBusinessesSection';

const Business = () => {
  return (
    <>
      <BusinessPaymentsSection />
      <TrustedBusinessesSection />
      <PaymentOptionsSection />
      <IndustrySolutionsSection />
      <CustomerStories />
      <BankBeatingRates />
      <CountryCoverageHome />
      <FAQSection />
      <CTASections />
    </>
  );
};

export default Business;
