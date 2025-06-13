'use client';
import { motion } from 'framer-motion';

type PricingHeroSectionProps = {
  selectedPlan: 'personal' | 'business';
  setSelectedPlan: (plan: 'personal' | 'business') => void;
};

const PricingHeroSection = ({ selectedPlan, setSelectedPlan }: PricingHeroSectionProps) => {
  return (
    <section className='relative flex shrink-0 flex-col items-center justify-start gap-16 self-stretch bg-gradient-to-b from-[#0c1118] to-[#1d1e2d] pt-24 pb-16'>
      <div className='relative flex w-full max-w-7xl shrink-0 flex-col items-center justify-start gap-8 px-8'>
        <motion.div
          className='relative flex w-full max-w-[800px] shrink-0 flex-col items-center justify-start gap-10'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='relative flex shrink-0 flex-col items-center justify-start gap-6 self-stretch'>
            <div className='relative flex shrink-0 flex-col items-center justify-start gap-4 self-stretch'>
              {/* Toggle switch */}
              <motion.div
                className='border-stroke-2 relative flex shrink-0 flex-row items-center justify-start gap-2 rounded-[54px] border bg-gradient-to-r from-[#1d1f2d] to-[#1d1f2e] p-1'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  onClick={() => setSelectedPlan('personal')}
                  className={`relative flex shrink-0 cursor-pointer flex-row items-center justify-center gap-2 overflow-hidden rounded-[42px] px-4 py-2.5 shadow-sm ${
                    selectedPlan === 'personal'
                      ? 'bg-gradient-to-b from-[#151820] to-[#010101] font-semibold text-white'
                      : 'bg-transparent text-gray-400'
                  }`}
                >
                  <span className='relative text-left text-base leading-snug tracking-tight'>Personal</span>
                </button>
                <button
                  onClick={() => setSelectedPlan('business')}
                  className={`relative flex shrink-0 cursor-pointer flex-row items-center justify-center gap-2 overflow-hidden rounded-[42px] px-4 py-2.5 ${
                    selectedPlan === 'business'
                      ? 'bg-gradient-to-b from-[#151820] to-[#010101] font-semibold text-white shadow-sm'
                      : 'bg-transparent text-gray-400'
                  }`}
                >
                  <span className='relative text-left text-base leading-snug tracking-tight'>Business</span>
                </button>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                className='gradient-text relative w-full max-w-[736px] text-center text-5xl leading-tight font-medium tracking-tighter text-transparent md:text-6xl'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                Choose your plan
              </motion.h1>
            </div>

            {/* Subheading */}
            <motion.p
              className='relative w-full max-w-[720px] text-center text-xl leading-relaxed font-normal tracking-tight text-gray-300'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Find the perfect plan to suit your individual needs.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingHeroSection;
