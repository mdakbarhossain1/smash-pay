'use client';
import { motion } from 'framer-motion';

const SolutionsFeature = () => {
  const steps = [
    {
      id: 0,
      title: 'International Payments',
      content: 'Allows customers to send funds to over 35 currencies in over 50 countries. '
    },
    {
      id: 1,
      title: 'BACS',
      content: 'Used for UK bank transfers, ordinarily taking 3 working days to clear'
    },
    {
      id: 2,
      title: 'Peer to Peer',
      content:
        'Electronic money transfers made from one person’s account to another through the SMASHPAY network.'
    },

    {
      id: 3,
      title: 'Faster Payments',
      content: 'Payment methods used for UK transactions; funds usually available in seconds.'
    },
    {
      id: 4,
      title: 'SEPA',
      content:
        'Europe wide payment system. This allows European credit transfers with the funds made available on the receiving account the next working day.'
    }
  ];

  return (
    <section className='bg-gradient-2 relative w-full px-4 pt-16 pb-16 md:px-8'>
      <div className='mx-auto flex w-full max-w-7xl flex-col items-center justify-start gap-12'>
        <motion.div
          className='flex w-full flex-col items-start justify-start gap-10'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className='flex w-full flex-col items-center justify-start gap-6'>
            <h6 className='text-md lg:text-md text-left leading-tight font-medium tracking-tight text-white md:text-lg'>
              International and Domestic
            </h6>
            <h4 className='gradient-text max-w-5xl text-center text-xl leading-tight font-medium tracking-tight text-white md:text-3xl lg:text-6xl'>
              Inbound and outbound payment transfer services
            </h4>

            <div className='flex w-full flex-col items-start justify-start gap-4'>
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`bg-clr-14 w-full overflow-hidden rounded-xl border border-[#3c3f4e] transition-all duration-300`}
                >
                  <button className='flex w-full flex-row items-start justify-between gap-4 p-5 text-left'>
                    <div className='flex flex-row items-start gap-4'>
                      <div className='flex flex-col items-start gap-3 pt-1.5'>
                        <h4 className='text-lg font-medium text-white'>{step.title}</h4>
                        <motion.p
                          className='text-md text-start leading-relaxed text-gray-300'
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                        >
                          {step.content}
                        </motion.p>
                      </div>
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

export default SolutionsFeature;
