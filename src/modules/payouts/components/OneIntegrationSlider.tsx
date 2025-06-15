'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const OneIntegrationSlider = () => {
  const [activeIndex, setActiveIndex] = useState(4);

  const paymentMethods = [
    {
      id: 'apm',
      title: 'APMs',
      description:
        'Make payouts through key local and global APMs across LATAM, APAC, Africa, India, EU and the UK',
      image:
        'https://www.unlimit.com/wp-content/themes/unlimint/assets/images/payouts-one-integration/widget_apm.svg',
      alt: 'apm widget'
    },
    {
      id: 'card',
      title: 'Cards',
      description: "Send funds directly to your recipient's debit or credit cards",
      image:
        'https://www.unlimit.com/wp-content/themes/unlimint/assets/images/payouts-one-integration/widget_card.svg',
      alt: 'card widget'
    },
    {
      id: 'banktransfer',
      title: 'Bank Transfers',
      description: 'Direct connection to local banking schemes for instant payouts',
      image:
        'https://www.unlimit.com/wp-content/themes/unlimint/assets/images/payouts-one-integration/widget_banktransfer.svg',
      alt: 'bank transfer widget'
    },
    {
      id: 'wallet',
      title: 'eWallets',
      description: 'Integrated with major global eWallets for instant payment disbursement',
      image:
        'https://www.unlimit.com/wp-content/themes/unlimint/assets/images/payouts-one-integration/widget_wallet.svg',
      alt: 'wallet widget'
    },
    {
      id: 'sepa',
      title: 'SEPA Instant',
      description: 'Instant cross-border payouts through bank-to-bank transfers in the EEA',
      image:
        'https://www.unlimit.com/wp-content/themes/unlimint/assets/images/payouts-one-integration/widget_sepa.svg',
      alt: 'sepa widget'
    }
  ];

  return (
    <section className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
      <div className='flex flex-col items-center gap-12 lg:flex-row'>
        {/* Swiper Card Slider */}
        <div className='w-full lg:w-1/2'>
          <Swiper
            effect='cards'
            grabCursor={true}
            modules={[EffectCards]}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            initialSlide={4}
            className='h-96 w-72 md:w-80'
          >
            {paymentMethods.map((method) => (
              <SwiperSlide
                key={method.id}
                className='flex items-center justify-center rounded-xl bg-white p-6 shadow-lg'
              >
                <img src={method.image} alt={method.alt} className='h-full w-full object-contain' />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='w-full lg:w-1/2'
        >
          <div className='mb-8'>
            <div className='mb-2 text-xl font-semibold text-white'>{paymentMethods[activeIndex]?.title}</div>
            <p className='text-gray-600'>{paymentMethods[activeIndex]?.description}</p>
          </div>

          {/* Pagination Dots */}
          <div className='mb-8 flex gap-2'>
            {paymentMethods.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors ${index === activeIndex ? 'bg-primary' : 'bg-gray-300'}`}
              />
            ))}
          </div>

          <Link
            href='#apply-form'
            className='bg-primary hover:bg-primary-dark group inline-flex items-center rounded-lg px-6 py-3 font-medium text-white transition-colors duration-300'
          >
            <span className='mr-2'>Get in touch</span>
            <div className='relative h-5 w-5'>
              <svg className='absolute inset-0 h-full w-full' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M16.2929 17.7071L6.29289 7.70712L7.70711 6.29291L17.7071 16.2929L16.2929 17.7071Z' />
                <path d='M14.5858 16L6.29289 7.70712L7.70711 6.29291L16 14.5858V8.00002C16 7.44773 16.4477 7.00001 17 7.00001C17.5523 7.00001 18 7.44773 18 8.00002V17C18 17.5523 17.5523 18 17 18H8C7.44771 18 7 17.5523 7 17C7 16.4477 7.44771 16 8 16H14.5858Z' />
              </svg>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OneIntegrationSlider;
