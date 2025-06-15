import CountryCoverageHome from '../home/components/CountryCoverageHome';
import CTASections from '../home/components/CTASections';
import PromotionSection from '../home/PromotionSection';
import CryptoBrowse from './components/CryptoBrowse';
import ForwardThinkingCard from './components/ForwardThinkingCard';
import GameFiCard from './components/GameFiCard';
import NFTBlock from './components/NFTBlock';
import QuickBuy from './components/QuickBuy';

const CryptoModule = () => {
  return (
    <>
      {/* <CryptoHeroSection /> */}
      <CryptoBrowse />
      <QuickBuy />
      <section className='bg-clr-14 w-full py-32'>
        <div className='m-auto max-w-7xl'>
          <div className='grid grid-cols-2 items-center justify-center gap-5'>
            <div className='flex flex-col gap-10'>
              <ForwardThinkingCard />
              <GameFiCard />
            </div>
            <div className='flex flex-col gap-10'>
              <NFTBlock />
              <div className='bg-gradient-4 grid grid-cols-1 items-start justify-start gap-8 self-stretch pb-10 md:grid-cols-1'>
                <div className='relative flex h-auto w-full flex-col items-start justify-start gap-6 rounded-lg p-12 md:h-56 md:flex-row'>
                  {/* Content */}
                  <div className='flex flex-1 flex-col items-center justify-start gap-3'>
                    <h3 className='gradient-text-2 self-stretch text-center text-3xl leading-tight font-bold tracking-[1px]'>
                      Off-ramp
                    </h3>
                    <p className='self-stretch text-center text-lg leading-normal tracking-[-0.25px] text-gray-300'>
                      Discover the easiest way to cash out your crypto with GateFi's Off-Ramp solution
                    </p>
                    <button className='mt-3 cursor-pointer rounded-[40px] border border-[#3c414c] bg-lime-300 px-4 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-[#2a2e38] md:text-base'>
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PromotionSection />
      <CountryCoverageHome />
      <CTASections />
    </>
  );
};

export default CryptoModule;
