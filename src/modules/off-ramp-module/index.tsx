import ReusableInfoCard from '@/shared/components/ReusableInfoCard';
import CountryCoverageHome from '../home/components/CountryCoverageHome';
import CTASections from '../home/components/CTASections';
import OffRampSection from './components/OffRampSection';

const OffRamModule = () => {
  return (
    <>
      <OffRampSection />
      <div className='bg-clr-14 w-full'>
        <div className='m-auto max-w-7xl px-2'>
          <ReusableInfoCard
            heading='Spend with Apple or Google Pay'
            subheading='Connect your card to tap and pay with your phone. No need to wait for your physical card to arrive.'
            features={[
              {
                icon: '/smashpay/shield-tick-10.svg',
                title: 'Secure, private, simple',
                description: 'Your payments are now safer with Touch ID or Face ID biometric recognition.'
              },
              {
                icon: '/smashpay/contactless-10.svg',
                title: 'Pay without a card',
                description:
                  'Pay quickly without the hassle of using a card — and completely avoid the contactless limit.'
              }
            ]}
            buttonText='Get started'
            buttonIcon='/home/arrow-right2.svg'
            image='/smashpay/image0.png'
            imageAlt='Mobile payment illustration'
            imageLeft={false}
          />
        </div>
      </div>
      <CountryCoverageHome />
      <CTASections />
    </>
  );
};

export default OffRamModule;
