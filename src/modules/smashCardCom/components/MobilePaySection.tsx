'use client';
import ReusableInfoCard from '@/shared/components/ReusableInfoCard';
import TakeoutCompo from './TakeoutCompo';

const MobilePaySection = () => {
  return (
    <div className='bg-clr-14 w-full py-16'>
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
      <div className='m-auto max-w-7xl px-2 pt-10'>
        <TakeoutCompo />
      </div>
      <div className='m-auto max-w-7xl px-2 pt-10'>
        <ReusableInfoCard
          heading='Stay in control of your card’s'
          subheading='It’s all in the app at your fingertips. From card freezing, to spending limits, turn them on or off with a tap.'
          features={[
            {
              icon: '/smashpay/face-id0.svg',
              title: 'Keep your card protected',
              description:
                'Protect your cards either with a PIN / Passcode OR Biometrics (i.e. fingerprint or facial recognition) AND an SMS one-time-passcode.'
            },
            {
              icon: '/smashpay/speedometer-040.svg',
              title: 'Track Expenses',
              description: 'On a budget? Set a daily and monthly limit on your card to avoid overspending.'
            }
          ]}
          buttonText='Get started'
          buttonIcon='/home/arrow-right2.svg'
          image='/smashpay/stay-control.svg'
          imageAlt='Mobile payment illustration'
          imageLeft={false}
        />
      </div>
    </div>
  );
};

export default MobilePaySection;
