'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const PricingToggle = ({ onToggle }: { onToggle: (isMonthly: boolean) => void }) => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = (monthly: boolean) => {
    setIsMonthly(monthly);
    onToggle(monthly);
  };

  return (
    <div className='mb-12 flex justify-center'>
      <div className='flex rounded-2xl bg-[#20232D] p-1'>
        <button
          onClick={() => handleToggle(true)}
          className={`px-6 py-3 ${isMonthly ? 'bg-black text-white' : 'text-[#CDD0D5]'}`}
          style={{
            borderColor: 'var(--token-0aaf7fab-cac6-493b-971b-f0d62052d9bd, rgb(82, 88, 102))',
            borderRadius: '12px',
            boxShadow: isMonthly ? 'rgba(49, 53, 63, 0.25) 0px 0px 0px 0px' : 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          Monthly
        </button>
        <button
          onClick={() => handleToggle(false)}
          className={`px-6 py-3 ${!isMonthly ? 'bg-black text-white' : 'text-[#CDD0D5]'}`}
          style={{
            borderColor: 'var(--token-0aaf7fab-cac6-493b-971b-f0d62052d9bd, rgb(82, 88, 102))',
            borderRadius: '12px',
            boxShadow: !isMonthly ? 'rgba(49, 53, 63, 0.25) 0px 0px 0px 0px' : 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          Annual -20%
        </button>
      </div>
    </div>
  );
};

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  // Prices would change based on isMonthly state
  const basicPrice = isMonthly ? '$4.99' : '$3.99';
  const degenPrice = isMonthly ? '$14.99' : '$11.99';
  const enterprisePrice = isMonthly ? '$49.99' : 'Custom';
  return (
    <div className='w-full px-4 py-12 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        {/* Title Section */}
        <div className='mb-12 flex flex-col items-center'>
          <div className='mb-6'>
            <div className='rounded-lg border border-[rgba(191,162,246,0.2)] bg-[rgba(191,162,246,0.1)] p-2 backdrop-blur-md'>
              <p className='bg-gradient-to-r from-[#BFA2F6] to-[#50F8E4] bg-clip-text text-transparent'>
                PRICING SECTION
              </p>
            </div>
          </div>
          <h1 className='mb-4 text-center text-6xl font-semibold text-white'>
            Comprehensive pricing overview
          </h1>
          <p className='max-w-3xl text-center text-lg text-gray-300'>
            We understand the importance of productivity and efficiency in today's fast-paced world
          </p>
        </div>

        {/* Pricing Toggle */}
        <PricingToggle onToggle={(monthly) => setIsMonthly(monthly)} />

        {/* Pricing Cards */}
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
          {/* Basic Plan */}
          <motion.div
            whileHover={{ y: -10 }}
            className='overflow-hidden rounded-3xl border border-[#20232D] bg-[#0A0D14] shadow-lg'
          >
            <div className='rounded-t-3xl bg-[#20232D] p-6 text-start'>
              <p className='font-bold text-white'>Basic</p>
              <h2 className='my-2 text-5xl font-semibold text-white'>{basicPrice}</h2>
              <p className='text-sm font-semibold text-[#868C98]'>
                per user / {isMonthly ? 'month' : 'year'}
              </p>
            </div>
            <div className='p-6'>
              <ul className='mb-8 space-y-3 text-lg font-semibold text-[#cdd0d5]'>
                <li className='flex items-center'>
                  <svg className='mr-3 h-5 w-5 text-[#868C98]' fill='currentColor' viewBox='0 0 24 24'>
                    <path
                      fillRule='evenodd'
                      d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span>1 project</span>
                </li>
                <li className='flex items-center'>
                  <svg className='mr-3 h-5 w-5 text-[#868C98]' fill='currentColor' viewBox='0 0 24 24'>
                    <path
                      fillRule='evenodd'
                      d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span>Analytics</span>
                </li>
                <li className='flex items-center'>
                  <svg className='mr-3 h-5 w-5 text-[#868C98]' fill='currentColor' viewBox='0 0 24 24'>
                    <path
                      fillRule='evenodd'
                      d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span>Insights Panel</span>
                </li>
                <li className='flex items-center'>
                  <svg className='mr-3 h-5 w-5 text-[#868C98]' fill='currentColor' viewBox='0 0 24 24'>
                    <path
                      fillRule='evenodd'
                      d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span>Share Features</span>
                </li>
              </ul>
              <Link
                href='https://ckurt.lemonsqueezy.com/buy/8fa1f143-8036-49b3-bcb8-9a296ef37d87'
                className='mb-4 block w-full rounded-xl border border-[#525866] bg-[#20232D] px-6 py-3 text-center text-white'
              >
                Start 30 Days Free Trial
              </Link>
              <p className='text-center text-sm text-gray-400'>No credit card required*</p>
            </div>
          </motion.div>

          {/* Degen Plan (Featured) */}
          <motion.div
            whileHover={{ y: -10 }}
            className='relative overflow-hidden rounded-3xl border border-[#20232D] bg-[#0A0D14] shadow-lg'
            style={{
              boxShadow: 'rgba(80, 248, 228, 0.3) 0px -50px 50px -50px inset'
            }}
          >
            <div
              className='relative overflow-hidden rounded-t-3xl bg-gradient-to-br from-[#20232D] to-[#0A0D14] p-6 text-start'
              style={{
                background: 'linear-gradient(45deg, #20232D 0%, #0A0D14 100%)'
              }}
            >
              <div className='flex items-center justify-between'>
                <p className='font-bold text-white'>Degen</p>
                <div className='inline-block rounded-lg border border-[#31353F] bg-[rgba(10,13,20,0.5)] px-3 py-1 backdrop-blur-md'>
                  <p className='bg-gradient-to-r from-[#50F8E4] to-[#BFA2F6] bg-clip-text text-transparent'>
                    Most Preferred
                  </p>
                </div>
              </div>
              <h2
                className='my-2 inline-block text-5xl font-semibold'
                style={{
                  background:
                    'linear-gradient(270deg, var(--token-7d83949f-a967-48a3-8f07-15e8bd6e7d88, rgb(80, 248, 228)) 0%, var(--token-510ad5ce-f42f-46e3-bce6-8a3de8506198, rgb(191, 162, 246)) 100%)',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {degenPrice}
              </h2>
              <p className='text-[#868C98]'>per user / {isMonthly ? 'month' : 'year'}</p>
              <div className='absolute top-0 right-0 h-full w-full overflow-hidden'>
                {/* Decorative elements */}
                <div className='absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-b from-[#50F8E4] to-[#BFA2F6] opacity-20 blur-[50px] filter'></div>
              </div>
            </div>
            <div className='p-6'>
              <ul className='mb-8 space-y-4'>
                <li className='flex items-center'>
                  <svg className='mr-3 h-5 w-5 text-[#50F8E4]' fill='currentColor' viewBox='0 0 24 24'>
                    <path
                      fillRule='evenodd'
                      d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='text-white'>2 projects</span>
                </li>
                <li className='flex items-center'>
                  <svg className='mr-3 h-5 w-5 text-[#50F8E4]' fill='currentColor' viewBox='0 0 24 24'>
                    <path
                      fillRule='evenodd'
                      d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='text-white'>Analytics</span>
                </li>
                <li className='flex items-center'>
                  <svg className='mr-3 h-5 w-5 text-[#50F8E4]' fill='currentColor' viewBox='0 0 24 24'>
                    <path
                      fillRule='evenodd'
                      d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='text-white'>Insights Panel</span>
                </li>
                <li className='flex items-center'>
                  <svg className='mr-3 h-5 w-5 text-[#50F8E4]' fill='currentColor' viewBox='0 0 24 24'>
                    <path
                      fillRule='evenodd'
                      d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='text-white'>Share Features</span>
                </li>
              </ul>
              <Link
                href='https://ckurt.lemonsqueezy.com/buy/8fa1f143-8036-49b3-bcb8-9a296ef37d87'
                className='mb-4 block w-full rounded-xl bg-[#6FFFE9] px-6 py-3 text-center text-[#003233]'
              >
                Start 30 Days Free Trial
              </Link>
              <p className='text-center text-sm text-gray-400'>No credit card required*</p>
            </div>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div
            whileHover={{ y: -10 }}
            className='overflow-hidden rounded-3xl border border-[#20232D] bg-[#0A0D14] shadow-lg'
          >
            <div className='rounded-t-3xl bg-[#20232D] p-6 text-start'>
              <p className='font-bold text-white'>Enterprise</p>
              <h2 className='my-2 inline-block text-5xl font-semibold text-white'>{enterprisePrice}</h2>
              <p className='text-[#868C98]'>let's discuss with sales team</p>
            </div>
            <div className='p-6'>
              <ul className='mb-8 space-y-3 text-lg font-semibold text-[#cdd0d5]'>
                <li className='flex items-center'>
                  <svg className='mr-3 h-5 w-5 text-[#868C98]' fill='currentColor' viewBox='0 0 24 24'>
                    <path
                      fillRule='evenodd'
                      d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span>Unlimited Projects</span>
                </li>
                <li className='flex items-center'>
                  <svg className='mr-3 h-5 w-5 text-[#868C98]' fill='currentColor' viewBox='0 0 24 24'>
                    <path
                      fillRule='evenodd'
                      d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span>Analytics</span>
                </li>
                <li className='flex items-center'>
                  <svg className='mr-3 h-5 w-5 text-[#868C98]' fill='currentColor' viewBox='0 0 24 24'>
                    <path
                      fillRule='evenodd'
                      d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span>Insights Panel</span>
                </li>
                <li className='flex items-center'>
                  <svg className='mr-3 h-5 w-5 text-[#868C98]' fill='currentColor' viewBox='0 0 24 24'>
                    <path
                      fillRule='evenodd'
                      d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span>Share Features</span>
                </li>
              </ul>
              <Link
                href='https://ckurt.lemonsqueezy.com/buy/8fa1f143-8036-49b3-bcb8-9a296ef37d87'
                className='mb-4 block w-full rounded-xl border border-[#525866] bg-[#20232D] px-6 py-3 text-center text-white'
              >
                Chat With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
