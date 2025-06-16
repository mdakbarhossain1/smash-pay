'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const nftCards = [
  {
    title: 'Access the fastest growing markets for NFTs',
    description: 'Like the Philippines, Vietnam, Indonesia, Brazil, and Peru',
    icon: '/crypto/744480.png',
    image: '/crypto/80910.jpg'
  },
  {
    title: 'Increase conversions',
    description: 'Keep users secure with instant, non-chargebackable payments',
    icon: '/crypto/sheild.jpg',
    image: 'https://img.freepik.com/free-vector/secure-payment-concept-illustration_114360-6192.jpg'
  },
  {
    title: 'Accept fiat globally',
    description: 'E-Wallets, Cash, Instant bank transfers, and QR Code',
    icon: '/crypto/wallet.jpg',
    image: 'https://img.freepik.com/free-vector/digital-wallet-abstract-concept-illustration_335657-3879.jpg'
  }
];

const iconFloat = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

const NftCardSection = () => {
  return (
    <section
      className='bg-gradient-4 flex w-full flex-col items-center justify-center px-6 py-32 md:px-12 lg:px-20'
      // style={{
      //   backgroundImage: `
      //     url('/images/page-nft/features-section/spot_back_bento.webp'),
      //     linear-gradient(90deg, rgba(232, 245, 255, 0.56) -0.07%, #c3e6ff 31.64%)
      //   `,
      //   backgroundPosition: 'right center',
      //   backgroundSize: '224px 300px',
      //   backgroundRepeat: 'no-repeat',
      //   backgroundBlendMode: 'overlay'
      // }}
    >
      <div className='grid w-full max-w-[1280px] grid-cols-1 gap-10 md:grid-cols-3'>
        {nftCards.map((card, index) => (
          <motion.div
            key={index}
            className='relative flex flex-col gap-4 rounded-2xl p-6 shadow-[0_0_40px_rgba(0,0,0,0.2)] backdrop-blur'
            style={{
              background: `linear-gradient(135deg, #ffffff, #e0f7ff)`,
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: '#1a1a1a'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Floating icon */}
            <motion.div
              className='absolute -top-5 -right-5 z-10 h-14 w-14 rounded-full bg-white/40 p-2 shadow-lg backdrop-blur-md'
              variants={iconFloat}
              animate='animate'
            >
              <Image src={card.icon} alt='icon' width={40} height={40} />
            </motion.div>

            {/* Image */}
            <div className='relative h-44 w-full overflow-hidden rounded-xl'>
              <Image src={card.image} alt='card image' fill className='object-cover' />
            </div>

            {/* Text */}
            <h3 className='text-2xl font-bold'>{card.title}</h3>
            <p className='text-gray-600'>{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NftCardSection;
