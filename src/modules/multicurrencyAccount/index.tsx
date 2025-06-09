import CTASections from '../home/components/CTASections';
import FAQSection from '../home/FAQSection';
import CurrencyHeader from './components/CurrencyHeader';
import GlobeMultiCurrencyAccounts from './components/GlobeMultiCurrencyAccounts';

const MultiCurrencyAccount = () => {
  return (
    <>
      <CurrencyHeader />
      <GlobeMultiCurrencyAccounts />
      <FAQSection />
      <CTASections />
    </>
  );
};

export default MultiCurrencyAccount;
