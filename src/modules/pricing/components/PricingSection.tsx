'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, type JSX } from 'react';

type Plan = {
  name: string;
  price: string;
  description: string;
  highlight?: boolean;
  popular?: boolean;
  features: {
    name: string;
    standard: string | JSX.Element;
    classic: string | JSX.Element;
    plus: string | JSX.Element;
    premium: string | JSX.Element;
  }[];
};

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState('payment');

  const plans = [
    {
      name: 'Standard',
      price: 'Free',
      image: '/pricing/standard-card.png',
      description: 'Free and instant account in GBP, EUR and USD.',
      colorOptions: 1
    },
    {
      name: 'Classic',
      price: '$4.99/Month',
      image: '/pricing/classic-card.png',
      description: 'Perfect for everyday spending and saving.',
      colorOptions: 2
    },
    {
      name: 'Plus',
      price: '$9.99/Month',
      image: '/pricing/plus-card.png',
      description: 'Perfect for travel and everyday needs.',
      popular: true,
      colorOptions: 3
    },
    {
      name: 'Premium',
      price: '$14.99/Month',
      image: '/pricing/black-card.png',
      description: 'Most comprehensive plan, with lowest fees.',
      colorOptions: 4
    }
  ];

  const CheckIcon = () => (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M20 6L9 17L4 12'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );

  const MinusIcon = () => (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M5 12H19' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );

  const InfoIcon = () => (
    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9 12V9'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9 6H9.0075'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );

  const features: Plan[] = [
    {
      name: 'Payment & Transfers',
      price: '',
      description: '',
      features: [
        {
          name: 'Instant transfers',
          standard: 'Free',
          classic: 'Free',
          plus: 'Free',
          premium: 'Free'
        },
        {
          name: 'International transfers',
          standard: '3% fee',
          classic: '2% fee',
          plus: '0.5% fee',
          premium: 'Free'
        },
        {
          name: 'Local transfers',
          standard: 'Free',
          classic: 'Free',
          plus: 'Free',
          premium: 'Free'
        },
        {
          name: 'Recurring payments and direct debits',
          standard: <CheckIcon />,
          classic: <CheckIcon />,
          plus: <CheckIcon />,
          premium: <CheckIcon />
        }
      ]
    },
    {
      name: 'SmashPay Cards',
      price: '',
      description: '',
      features: [
        {
          name: 'Physical card',
          standard: '$15.99',
          classic: '1 free',
          plus: '1 free',
          premium: '2 free'
        },
        {
          name: 'Virtual card',
          standard: <CheckIcon />,
          classic: <CheckIcon />,
          plus: <CheckIcon />,
          premium: <CheckIcon />
        },
        {
          name: 'Contactless payments',
          standard: <CheckIcon />,
          classic: <CheckIcon />,
          plus: <CheckIcon />,
          premium: <CheckIcon />
        },
        {
          name: 'GooglePay / Apple Pay',
          standard: <CheckIcon />,
          classic: <CheckIcon />,
          plus: <CheckIcon />,
          premium: <CheckIcon />
        },
        {
          name: 'First card delivery',
          standard: '$4.99',
          classic: 'Free',
          plus: 'Free',
          premium: 'Free'
        },
        {
          name: 'Cashback on card payments',
          standard: <MinusIcon />,
          classic: <MinusIcon />,
          plus: <CheckIcon />,
          premium: <CheckIcon />
        }
      ]
    },
    {
      name: 'Cash',
      price: '',
      description: '',
      features: [
        {
          name: 'Free ATM withdrawals abroad',
          standard: <MinusIcon />,
          classic: '3 free',
          plus: <CheckIcon />,
          premium: <CheckIcon />
        },
        {
          name: 'Cash top-ups',
          standard: '3.5% fee',
          classic: '$300 free monthly',
          plus: '$500 free monthly',
          premium: '$1.000 free monthly'
        }
      ]
    },
    {
      name: 'Account',
      price: '',
      description: '',
      features: [
        {
          name: 'Hold 35+ currencies',
          standard: <MinusIcon />,
          classic: <CheckIcon />,
          plus: <CheckIcon />,
          premium: <CheckIcon />
        },
        {
          name: 'IBANs for global transfers',
          standard: <CheckIcon />,
          classic: <CheckIcon />,
          plus: <CheckIcon />,
          premium: <CheckIcon />
        },
        {
          name: 'Access your account with SmashPay mobile app and from a desktop',
          standard: <CheckIcon />,
          classic: <CheckIcon />,
          plus: <CheckIcon />,
          premium: <CheckIcon />
        }
      ]
    },
    {
      name: 'Support',
      price: '',
      description: '',
      features: [
        {
          name: 'Priority customer support',
          standard: <MinusIcon />,
          classic: 'In-app chat',
          plus: 'In-app chat',
          premium: 'In-app chat and request a call back'
        },
        {
          name: 'Multilingual customer support',
          standard: <MinusIcon />,
          classic: <CheckIcon />,
          plus: <CheckIcon />,
          premium: <CheckIcon />
        }
      ]
    }
  ];

  const ColorOption = ({ color, border = false }: { color: string; border?: boolean }) => (
    <div
      className={`h-4 w-4 rounded-full ${border ? 'border-2 border-white shadow-sm' : ''}`}
      style={{ backgroundColor: color }}
    />
  );

  const PlanCard = ({ plan, index }: { plan: (typeof plans)[0]; index: number }) => {
    const colors = [
      ['#A8D246'], // Standard - lime green
      ['#2E523F', '#50ADBB'], // Classic - dark green, teal
      ['linear-gradient(111.92deg, #A8D246 0%, #96D141 34.66%, #37B733 100%)', '#2E523F', '#50ADBB'], // Plus - gradient, dark green, teal
      ['#A7A9AB', '#000000', '#B49B56', '#E7B1A5'] // Premium - gray, black, gold, peach
    ];

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className={`relative flex-1 p-8 ${plan.popular ? 'border-t border-r border-l border-[#3C414C]' : ''}`}
        style={{
          background: plan.popular
            ? 'linear-gradient(180deg, rgba(12, 17, 24, 1) 0%, rgba(29, 30, 45, 1) 100%)'
            : 'linear-gradient(90deg, rgba(29, 31, 45, 1) 0%, rgba(29, 31, 46, 1) 100%)'
        }}
      >
        {plan.popular && (
          <div className='absolute -top-0 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform'>
            <div className='rounded-2xl border border-gray-200 bg-gradient-to-r from-[#1D1F2D] to-[#1D1F2E] px-2 py-0.5'>
              <span className='text-xs font-medium text-lime-300'>Most Popular</span>
            </div>
          </div>
        )}

        <div className='relative flex flex-1 flex-col items-center justify-start gap-6'>
          <div className='flex flex-col items-center justify-start gap-1 self-stretch'>
            <h3 className='text-center text-lg font-medium text-white'>{plan.name}</h3>
            <p className='text-center text-sm text-gray-300'>{plan.description}</p>
          </div>

          <div className='flex flex-col items-center justify-start gap-4 self-stretch'>
            <div className='relative h-[101.51px] w-40'>
              <Image
                src={plan.image}
                alt={`${plan.name} card`}
                className='h-full w-full rounded-lg object-cover'
                width={160}
                height={101}
              />
            </div>

            <div className='flex items-center gap-2'>
              {Array.from({ length: plan.colorOptions }).map((_, i) => (
                <ColorOption
                  key={i}
                  color={i === 0 ? '#A8D246' : i === 1 ? '#2E523F' : i === 2 ? '#50ADBB' : '#B49B56'}
                  border={i === 1 && plan.colorOptions > 1}
                />
              ))}
            </div>
          </div>

          <div className='text-center text-xl font-medium text-white'>{plan.price}</div>

          <button className='border-stroke-2 w-full rounded-[40px] border bg-gradient-to-b from-[#151820] to-[#010101] px-[18px] py-2.5'>
            <span className='text-base font-semibold text-white'>Get started</span>
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className='bg-clr-14 relative flex shrink-0 flex-col items-center justify-start gap-32 self-stretch overflow-hidden pt-16 pb-24'>
      <div className='relative flex w-full max-w-[1280px] flex-col items-center justify-start gap-8 px-8 lg:flex-row lg:gap-24'>
        <div className='relative flex w-full flex-col items-start justify-start gap-0 self-stretch'>
          {/*  */}
          <div className='wrap bg-gradient-to-r from-[#1D1F2D] to-[#1D1F2E]'>
            <div className='grid grid-cols-5 items-start justify-start gap-0 self-stretch lg:flex-row'>
              <div></div>
              {plans.map((plan, index) => (
                <PlanCard key={plan.name} plan={plan} index={index} />
              ))}
            </div>

            {/* Features Table */}
            <div className='w-full overflow-hidden'>
              <div className='mx-10 overflow-hidden rounded-2xl border border-[#3C414C]'>
                {features.map((featureGroup, groupIndex) => (
                  <div key={groupIndex} className='border-b border-[#3C414C]'>
                    <div className='flex flex-col lg:flex-row'>
                      {/* Feature Name */}
                      <div className='flex-1 p-4'>
                        <h4 className='text-lg font-medium text-white'>{featureGroup.name}</h4>
                      </div>

                      {/* Empty space for plan columns */}
                      <div className='hidden flex-1 lg:flex'></div>
                      <div className='hidden flex-1 lg:flex'></div>
                      <div className='hidden flex-1 lg:flex'></div>
                    </div>

                    {/* Feature Rows */}
                    {featureGroup.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={`flex flex-col lg:flex-row ${featureIndex % 2 === 0 ? 'bg-stroke-2 bg-[#3C414C]' : ''}`}
                      >
                        {/* Feature Name */}
                        <div className='flex flex-1 items-center gap-2 p-4'>
                          <span className='text-sm text-gray-300'>{feature.name}</span>
                          <img src='/pricing/info-circle0.svg' height={18} width={18} alt='info icon' />
                        </div>

                        {/* Plan Features */}
                        <div className='flex flex-1 items-center justify-center p-4'>
                          <span className='text-sm font-medium text-white'>
                            {typeof feature.standard === 'string' ? feature.standard : feature.standard}
                          </span>
                        </div>
                        <div className='flex flex-1 items-center justify-center p-4'>
                          <span className='text-sm font-medium text-white'>
                            {typeof feature.classic === 'string' ? feature.classic : feature.classic}
                          </span>
                        </div>
                        <div className='flex flex-1 items-center justify-center p-4'>
                          <span className='text-sm font-medium text-white'>
                            {typeof feature.plus === 'string' ? feature.plus : feature.plus}
                          </span>
                        </div>
                        <div className='flex flex-1 items-center justify-center p-4'>
                          <span className='text-sm font-medium text-white'>
                            {typeof feature.premium === 'string' ? feature.premium : feature.premium}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
