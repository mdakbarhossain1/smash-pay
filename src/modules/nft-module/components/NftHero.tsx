'use client';
import { motion } from 'framer-motion';
import HeroSlider from './HeroSlider';

const NftHero = () => {
  const images = ['/crypto/nft-1.png', '/crypto/nft-2.png', '/crypto/nft-3.png', '/crypto/nft-4.png'];
  return (
    <section className='bg-gradient-4 flex w-full flex-col items-center justify-center gap-2.5 overflow-hidden px-8 py-32 md:px-20'>
      <div className='flex w-full max-w-7xl flex-col items-start justify-between gap-8 px-8 md:flex-row md:gap-16'>
        {/* Newsletter Content */}
        <motion.div
          className='flex flex-1 flex-col gap-10'
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-6'>
              <h2 className='bg-gradient-to-b from-[#7B7D81] to-white bg-clip-text text-4xl leading-tight font-bold tracking-[-1px] text-transparent md:text-5xl lg:text-7xl'>
                <b>DIRECT NFT PURCHASE </b> <br />
                <span className='text-bold gradient-text-2'>WITH FIAT PAYMENTS</span> <br />
              </h2>
            </div>
            <p className='text-lg leading-relaxed tracking-[-0.25px] text-gray-300 md:text-xl'>
              The SmashPay NFT Checkout is designed for brands, creators, and marketplaces that want to give
              their users easy access to NFTs
            </p>
          </div>
        </motion.div>

        <HeroSlider images={images} />
      </div>
    </section>
  );
};

export default NftHero;
