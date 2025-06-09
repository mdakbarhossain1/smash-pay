import CTASections from '../home/components/CTASections';
import HowToGetStarted from '../home/components/HowToGetStarted';
import FAQSection from '../home/FAQSection';
import CurrencyHeader from './components/CurrencyHeader';
import GlobeMultiCurrencyAccounts from './components/GlobeMultiCurrencyAccounts';

const MultiCurrencyAccount = () => {
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
      <CurrencyHeader />
      <GlobeMultiCurrencyAccounts />
      <HowToGetStarted steps={steps} title='Register for a Multi-currency account is easy' />
      <FAQSection />
      <CTASections />
    </>
  );
};

export default MultiCurrencyAccount;
