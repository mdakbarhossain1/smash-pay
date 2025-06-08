'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer?: string;
  isOpen?: boolean;
}

export default function FAQSection() {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      question: 'How do I register for a SmashPay personal account?',
      answer:
        "It's quick and simple to register for a SmashPay account. To get started opening a personal account, just click 'Register'. Signing up is easy, we'll just need some basic identification documents so that we can electronically verify your identity. This is to comply with standard regulatory requirements in each territory that we operate in.",
      isOpen: true
    },
    {
      question: 'Is my money safe and secure?',
      answer:
        'Yes, your money is safe and secure with SmashPay. We are regulated by the relevant financial authorities in each territory we operate in, and we use industry-standard security measures to protect your funds and personal information.',
      isOpen: false
    },
    {
      question: 'How can I exchange currencies with SmashPay?',
      answer:
        'You can exchange currencies with SmashPay by using our multi-currency account feature. Simply select the currencies you want to exchange, enter the amount, and confirm the transaction. Our platform will provide you with competitive exchange rates.',
      isOpen: false
    },
    {
      question: 'How long do International transfers take?',
      answer:
        'International transfers typically take 1-3 business days to process, depending on the destination country and the payment method used. We strive to ensure that your transfers are completed as quickly as possible while adhering to regulatory requirements.',
      isOpen: false
    },
    {
      question: 'How do I add money to my SmashPay balance?',
      answer:
        'You can add money to your SmashPay balance by linking your bank account or using a debit/credit card. Simply go to the "Add Funds" section in your account, select your preferred method, and follow the instructions to complete the transaction.',
      isOpen: false
    }
  ]);

  const toggleFAQ = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => ({
        ...faq,
        isOpen: i === index ? !faq.isOpen : false
      }))
    );
  };

  return (
    <section className='bg-clr-14 relative flex w-full flex-col items-center justify-start gap-16 overflow-hidden px-4 pt-16 pb-16 md:px-8'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col gap-8 lg:flex-row lg:gap-24'>
          {/* Left Content */}
          <div className='flex w-full flex-col gap-10 lg:w-1/2'>
            <div className='flex flex-col gap-6'>
              <div className='flex w-[110px] flex-col items-start'>
                <span className='text-lg font-medium tracking-tight text-white'>Here to help</span>
                <div className='mt-[-3px] h-px w-full bg-gradient-to-r from-[#37425d] via-[#1d2129] to-[#29283c]' />
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='bg-gradient-to-b from-[#7b7d81] to-white bg-clip-text text-5xl font-medium tracking-tight text-transparent md:text-6xl'
              >
                Common questions
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className='text-lg tracking-tight text-gray-300'
              >
                Find the answers to frequently asked questions here.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='flex flex-col gap-6'
            >
              <div className='flex items-center gap-2'>
                <Image src='/home/help-circle0.svg' alt='Help icon' width={24} height={24} />
                <span className='text-md font-medium tracking-tight text-white'>Need further support?</span>
              </div>

              <button className='group flex w-fit items-center gap-2.5 rounded-full border border-[#3c414c] bg-gradient-to-b from-[#151820] to-[#010101] px-8 py-4 transition-opacity hover:opacity-90'>
                <span className='text-lg font-semibold tracking-tight text-white'>Contact us</span>
                <Image
                  src='/home/arrow-right0.svg'
                  alt='Arrow right'
                  width={22}
                  height={22}
                  className='transition-transform group-hover:translate-x-1'
                />
              </button>
            </motion.div>
          </div>

          {/* FAQ Items */}
          <div className='flex w-full flex-col gap-6 lg:w-1/2'>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-xl border ${faq.isOpen ? 'border-gray-400' : 'border-[#3c414c]'} p-8`}
              >
                <div
                  className='flex cursor-pointer items-start justify-between gap-6'
                  onClick={() => toggleFAQ(index)}
                >
                  <div className='flex flex-1 flex-col gap-4'>
                    <h3 className='text-xl font-medium tracking-tight text-white'>{faq.question}</h3>
                    {faq.isOpen && faq.answer && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className='text-lg tracking-tight text-gray-300'
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </div>
                  <div className='bg-bg rounded-lg p-3'>
                    <Image
                      src={faq.isOpen ? '/home/chevron-up2.svg' : '/home/chevron-down3.svg'}
                      alt={faq.isOpen ? 'Collapse' : 'Expand'}
                      width={18}
                      height={18}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
