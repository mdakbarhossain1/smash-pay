import ReusableInfoCard from '@/shared/components/ReusableInfoCard';
import CountryCoverageHome from '../home/components/CountryCoverageHome';
import CTASections from '../home/components/CTASections';
import OffRampSection from './components/OffRampSection';

const OffRamModule = () => {
  return (
    <>
      <OffRampSection />
      <div className='bg-clr-14 w-full py-16'>
        <div className='m-auto max-w-7xl px-2'>
          <ReusableInfoCard
            heading='DISCOVER THE EASIEST WAY'
            subheading="To cash out your crypto with SmashPay Crypto's Off-Ramp Solution"
            features={[
              {
                icon: '/smashpay/shield-tick-10.svg',
                title: 'Global coverage',
                description:
                  'We support multiple currencies and payment methods, ensuring a seamless experience for our users across the globe.'
              },
              {
                icon: '/smashpay/contactless-10.svg',
                title: 'Instant Access to your funds',
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
