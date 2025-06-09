'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const FaqSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: 'Create your SmashPay account',
      content:
        "It's quick and simple to register for a SmashPay account. To get started opening a personal account, just click ‘Register’.  "
    },
    {
      id: 1,
      title: 'Enter your transfer details',
      content: 'Provide the details of your transfer including amount, currency, and recipient information.'
    },
    {
      id: 2,
      title: 'Send funds for your transfer',
      content: 'Complete your transfer by sending the funds through your preferred payment method.'
    },
    {
      id: 3,
      title: 'Send funds for your transfer',
      content: 'Complete your transfer by sending the funds through your preferred payment method.'
    }
  ];

  const toggleStep = (id: number) => {
    setActiveStep(activeStep === id ? -1 : id);
  };

  return (
    <section className='bg-clr-14 relative w-full px-4 pt-16 pb-16 md:px-8'>
      <div className='mx-auto flex w-full max-w-4xl flex-col items-center justify-start gap-12'>
        <motion.div
          className='flex w-full flex-col items-start justify-start gap-10'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className='flex w-full flex-col items-start justify-start gap-6'>
            <h4 className='text-left text-xl leading-tight font-medium tracking-tight text-white md:text-xl lg:text-xl'>
              Frequently asked questions
            </h4>

            {/* Accordion Steps */}
            <div className='flex w-full flex-col items-start justify-start gap-4'>
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`w-full overflow-hidden rounded-xl border transition-all duration-300 ${
                    activeStep === step.id ? 'bg-clr-14' : 'bg-clr-14'
                  } border-[#3c3f4e]`}
                >
                  <button
                    className='flex w-full flex-row items-start justify-between gap-4 p-5 text-left'
                    onClick={() => toggleStep(step.id)}
                  >
                    <div className='flex flex-row items-start gap-4'>
                      <div className='flex flex-col items-start gap-3 pt-1.5'>
                        <h4 className='text-lg font-medium text-white'>{step.title}</h4>
                        {activeStep === step.id && (
                          <motion.p
                            className='text-md text-start leading-relaxed text-gray-300'
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            transition={{ duration: 0.3 }}
                          >
                            {step.content}
                          </motion.p>
                        )}
                      </div>
                    </div>
                    <div className='pt-1.5'>
                      <Image
                        src={activeStep === step.id ? '/home/chevron-up2.svg' : '/home/chevron-down3.svg'}
                        alt={activeStep === step.id ? 'Collapse' : 'Expand'}
                        width={24}
                        height={24}
                      />
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
