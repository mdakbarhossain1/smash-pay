import ReusableInfoCard from '@/shared/components/ReusableInfoCard';
import DecentralizedJourneySection from './components/DecentralizedJourneySection';
import GameFiPromoSection from './components/GameFiPromoSection';
import StayAheadSection from './components/StayAheadSection';

const GamefiPage = () => {
  return (
    <>
      <GameFiPromoSection />
      <div className='bg-clr-14 w-full'>
        <div>
          <ReusableInfoCard
            heading='Power Global Gaming Economies'
            subheading='Expand your reach across APAC, LATAM, Africa, Europe, and India using a single crypto-native API — designed for seamless in-game payouts.'
            image='/crypto/game-upsplash01.jpg'
            imageAlt='Global gaming payout network illustration'
            imageLeft={true}
          />
          <ReusableInfoCard
            heading='Instant Rewards for Players & Creators'
            subheading='Send instant, gas-efficient crypto payouts to players, creators, and partners via wallets, cards, or local rails — no borders, no delays.'
            image='/crypto/city-game01.jpg'
            imageAlt='Crypto rewards system illustration'
          />
          <ReusableInfoCard
            heading='Secure & Scalable for the Metaverse'
            subheading='Stay compliant while scaling with real-time fraud protection, on-chain transparency, and end-to-end encryption for your gaming ecosystem.'
            image='/crypto/game-console-unsplash.jpg'
            imageAlt='Secure crypto infrastructure for games'
            imageLeft={true}
          />
        </div>
      </div>
      <DecentralizedJourneySection />
      <StayAheadSection />
    </>
  );
};

export default GamefiPage;
