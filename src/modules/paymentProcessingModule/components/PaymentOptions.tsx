'use client';

import ReusableInfoProcessing from './ReusableInfoProcessing';

const PaymentOptions = () => {
  return (
    <>
      <div className='bg-gradient-3 w-full pt-32 pb-32'>
        <ReusableInfoProcessing
          title='One platform, proprietary software, no middlemen'
          description='Grow globally with a trusted partner that understands your growth plans. Global card acquiring for international expansion. No matter where your customers are, we help you accept debit and credit card payments in multiple currencies and major card schemes.'
          features={[
            { icon: '/home/check-icon2.svg', text: 'No extra hardware needed.' },
            { icon: '/home/check-icon2.svg', text: 'Built in security.' },
            { icon: '/home/check-icon2.svg', text: 'Competitive pricing.' }
          ]}
          buttonText='Get started'
          imageSrc='/paymentProcessing/one-platform.mp4'
          imageBackgroundColor=''
          imageSide='right'
        />
        <div className='pt-32'>
          <ReusableInfoProcessing
            title='We take care of payments, so you can take care of your customers, anywhere'
            description='Seamless integration of card processing and local payment methods with a single API integration, no matter where your customers are.'
            features={[
              { icon: '/home/check-icon2.svg', text: '35+ currencies' },
              { icon: '/home/check-icon2.svg', text: 'Categorise accounts.' },
              { icon: '/home/check-icon2.svg', text: 'Centralise your reporting.' }
            ]}
            buttonText='Get started'
            imageSrc='/paymentProcessing/take-care.mp4'
            imageBackgroundColor=''
            imageSide='left'
          />
        </div>
      </div>
      <div className='bg-clr-14 w-full pb-16'>
        <div className='pt-32'>
          <ReusableInfoProcessing
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

export default PaymentOptions;
