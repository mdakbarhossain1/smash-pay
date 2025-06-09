'use client';
import ReusableInfoSection from '@/shared/components/ReusableInfoSection';

const PaymentOptionsSection = () => {
  const features = [
    {
      icon: '/home/check-icon2.svg',
      text: 'No extra hardware needed.'
    },
    {
      icon: '/home/check-icon2.svg',
      text: 'Built in security.'
    },
    {
      icon: '/home/check-icon2.svg',
      text: 'Competitive pricing.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: 'beforeChildren'
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const phoneVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  return (
    <>
      <div className='bg-gradient w-full pt-32 pb-32'>
        <ReusableInfoSection
          title='Let customers choose how they want to pay.'
          description='Tap to Pay on iPhone uses the built-in features of iPhone to help keep your business and customer data secure.'
          features={[
            { icon: '/home/check-icon2.svg', text: 'No extra hardware needed.' },
            { icon: '/home/check-icon2.svg', text: 'Built in security.' },
            { icon: '/home/check-icon2.svg', text: 'Competitive pricing.' }
          ]}
          buttonText='Get started'
          imageSrc='/business/iPhone-14-Pro-Space-Black-Mockup.png'
          imageBackgroundColor='bg-gradient-2'
          imageSide='right'
        />
        <div className='pt-32'>
          <ReusableInfoSection
            title='Accept payments like a local.'
            description="Accept payments in 35+ currencies into dedicated currency accounts. We won't convert your card payments unless you ask us to"
            features={[
              { icon: '/home/check-icon2.svg', text: '35+ currencies' },
              { icon: '/home/check-icon2.svg', text: 'Categorise accounts.' },
              { icon: '/home/check-icon2.svg', text: 'Centralise your reporting.' }
            ]}
            buttonText='Get started'
            imageSrc='/business/accept-payment.png'
            imageBackgroundColor='bg-gradient-2'
            imageSide='left'
          />
        </div>
        <div className='pt-32'>
          <ReusableInfoSection
            title='Boost sales rate with SmashPay.'
            description='Offer a seamless checkout experience for the growing pool of 30+ million SmashPay Customers.'
            features={[
              { icon: '/home/check-icon2.svg', text: 'Increased conversions' },
              { icon: '/home/check-icon2.svg', text: 'Customisable widget.' },
              { icon: '/home/check-icon2.svg', text: 'Access the world of SmashPay.' }
            ]}
            buttonText='Get started'
            imageSrc='/business/Checkout.png'
            imageBackgroundColor='bg-gradient-2'
            imageSide='right'
          />
        </div>
      </div>
      <div className='bg-clr-14 w-full'>
        <div className='pt-32'>
          <ReusableInfoSection
            title='Empower team with SmashPay Business Cards.'
            description='Big or small your team is, SmashPay cards have got you covered. Spend securely with physical and virtual debit cards that you control.'
            features={[
              { icon: '/home/check-icon2.svg', text: 'Globally Accepted.' },
              { icon: '/home/check-icon2.svg', text: 'Track Expenses.' },
              { icon: '/home/check-icon2.svg', text: 'No Minimum Balance.' }
            ]}
            buttonText='Get started'
            imageSrc='/business/Content.png'
            imageBackgroundColor=''
            imageSide='left'
          />
        </div>
      </div>
    </>
  );
};

export default PaymentOptionsSection;
