'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
type Step = {
  id: number;
  title: string;
  content: string;
  icon: string;
};

interface HowToGetStartedProps {
  steps: Step[];
  title: string;
}

const HowToGetStarted = ({ steps, title }: HowToGetStartedProps) => {
  const [activeStep, setActiveStep] = useState(0);

  const toggleStep = (id: number) => {
    setActiveStep(activeStep === id ? -1 : id);
  };

  return (
    <section className='bg-clr-14 relative flex w-full flex-col items-center justify-start gap-16 overflow-hidden px-4 pt-20 pb-20 md:px-8'>
      <div className='flex w-full max-w-7xl flex-col items-center justify-start gap-12 lg:flex-row lg:gap-24'>
        {/* Left Image Section */}
        <div className='flex w-full flex-col items-center justify-start gap-12 lg:w-1/2'>
          <motion.div
            className='relative aspect-[640/808] h-auto w-full overflow-hidden rounded-[32px]'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{
              background: 'linear-gradient(90deg, rgba(29, 31, 45, 1) 0%, rgba(29, 31, 46, 1) 100%)'
            }}
          >
            {/* Placeholder for your image content */}
            <div className='flex h-full w-full items-center justify-center text-gray-400'>
              <Image
                src='/home/how-to-get-start.svg'
                alt='How to get started'
                layout='fill'
                objectFit='cover'
                className='rounded-[32px]'
              />
            </div>
          </motion.div>
        </div>

        {/* Right Accordion Section */}
        <motion.div
          className='flex w-full flex-col items-start justify-start gap-10 lg:w-1/2'
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className='flex w-full flex-col items-start justify-start gap-6'>
            <div className='flex w-full flex-col items-start justify-start gap-6'>
              <div className='flex flex-col items-center gap-0 md:items-start'>
                <h3 className='w-[158px] text-lg font-medium tracking-tight text-white'>
                  How to get started
                </h3>
                <div className='border-gradient mt-[-3px] h-0 w-full border-t-[3px] border-r-0 border-b-0 border-l-0 border-solid' />
              </div>
              <h2 className='bg-gradient-to-b from-gray-500 to-white bg-clip-text text-4xl leading-tight font-medium tracking-tighter text-transparent md:text-5xl lg:text-6xl'>
                {title}
              </h2>
            </div>

            {/* Accordion Steps */}
            <div className='flex w-full flex-col items-start justify-start gap-3'>
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`w-full overflow-hidden rounded-xl transition-all duration-300 ${
                    activeStep === step.id ? 'bg-gradient-to-r from-[#1d1f2d] to-[#1d1f2e]' : ''
                  }`}
                  style={{
                    background: 'linear-gradient(90deg, rgba(29, 31, 45, 1) 0%, rgba(29, 31, 46, 1) 100%)'
                  }}
                >
                  <button
                    className='flex w-full flex-row items-start justify-between gap-4 p-6'
                    onClick={() => toggleStep(step.id)}
                  >
                    <div className='flex flex-row items-start justify-start gap-4'>
                      <div className='relative h-10 w-10 shrink-0'>
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full ${
                            activeStep === step.id ? 'bg-bg' : 'bg-gradient-to-r from-[#1d1f2d] to-[#1d1f2e]'
                          }`}
                        >
                          <span className='text-lg font-medium text-white'>{step.id + 1}</span>
                        </div>
                      </div>
                      <div className='flex flex-col items-start justify-start gap-3 pt-1.5'>
                        <h4 className='text-lg font-medium tracking-tight text-white'>{step.title}</h4>
                        {activeStep === step.id && (
                          <motion.p
                            className='text-md text-start leading-relaxed tracking-tight text-gray-300'
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

          {/* Get Started Button */}
          <motion.button
            className='flex flex-row items-center justify-center gap-2.5 rounded-[64px] border border-[#3c414c] bg-gradient-to-b from-[#151820] to-[#010101] px-8 py-4 transition-opacity hover:opacity-90'
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className='text-lg font-semibold tracking-tight text-white'>Get started now</span>
            <Image src='/home/arrow-right0.svg' alt='Arrow right' width={22} height={22} />
          </motion.button>
        </motion.div>
      </div>

      <style jsx>{`
        .border-gradient {
          border-image: linear-gradient(
            112.59deg,
            rgba(55, 66, 93, 1) 0%,
            rgba(29, 33, 41, 1) 50.06%,
            rgba(41, 40, 60, 1) 100%
          );
          border-image-slice: 1;
        }
      `}</style>
    </section>
  );
};

export default HowToGetStarted;
