import Image from 'next/image';

const PaymintCard = () => {
  return (
    <div className='bg-[#002c15] py-[128px]'>
      <div className='container'>
        <div className='grid grid-cols-2 items-center gap-24'>
          <div>
            <Image width={540} height={572} src={'/images/paymint-card.png'} alt='paymint-card' />
          </div>
          <div>
            <div className='space-y-6 pb-10'>
              <p className='text-lg leading-7 tracking-[-0.2px] text-[#c3f53c]'>
                <span className='text-lg font-medium tracking-[-0.2px] text-[#c3f53c]'>Paymint card</span>
              </p>

              <h1 className='text-[58px] leading-[64px] tracking-[-2px] text-white'>
                <span className='text-[58px] font-medium tracking-[-2px] text-white'>
                  The Ultimate Card Experience Across Borders
                </span>
              </h1>

              <p className='text-lg leading-7 tracking-[-0.2px] text-white'>
                <span className='text-lg font-normal tracking-[-0.2px] text-white'>
                  Enjoy the flexibility of a Paymint card. Spend anytime, anywhere around the world.
                </span>
              </p>

              <ul className='space-y-5'>
                <li className='flex items-start gap-3 self-stretch'>
                  <svg
                    width='28'
                    height='29'
                    viewBox='0 0 28 29'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect y='0.5' width='28' height='28' rx='14' fill='#C3F53C' />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M19.9457 9.12169L11.5923 17.1834L9.37568 14.815C8.96734 14.43 8.32568 14.4067 7.85901 14.7334C7.40401 15.0717 7.27568 15.6667 7.55568 16.145L10.1807 20.415C10.4373 20.8117 10.8807 21.0567 11.3823 21.0567C11.8607 21.0567 12.3157 20.8117 12.5723 20.415C12.9923 19.8667 21.0073 10.3117 21.0073 10.3117C22.0573 9.23836 20.7857 8.29336 19.9457 9.11002V9.12169Z'
                      fill='#002C15'
                    />
                  </svg>

                  <p className='text-lg leading-7 tracking-[-0.2px] text-white'>
                    <span className='text-lg font-normal tracking-[-0.2px] text-white'>
                      Globally Accepted.
                    </span>
                  </p>
                </li>
                <li className='flex w-full items-start gap-3 self-stretch'>
                  <svg
                    width='28'
                    height='29'
                    viewBox='0 0 28 29'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect y='0.5' width='28' height='28' rx='14' fill='#C3F53C' />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M19.9457 9.12169L11.5923 17.1834L9.37568 14.815C8.96734 14.43 8.32568 14.4067 7.85901 14.7334C7.40401 15.0717 7.27568 15.6667 7.55568 16.145L10.1807 20.415C10.4373 20.8117 10.8807 21.0567 11.3823 21.0567C11.8607 21.0567 12.3157 20.8117 12.5723 20.415C12.9923 19.8667 21.0073 10.3117 21.0073 10.3117C22.0573 9.23836 20.7857 8.29336 19.9457 9.11002V9.12169Z'
                      fill='#002C15'
                    />
                  </svg>
                  <div className='relative flex w-full flex-1 flex-col items-start gap-0'>
                    <p className='text-lg leading-7 tracking-[-0.2px] text-white'>
                      <span className='text-lg font-normal tracking-[-0.2px] text-white'>
                        Track Expenses.
                      </span>
                    </p>
                  </div>
                </li>
                <li className='flex w-full items-start gap-3 self-stretch'>
                  <svg
                    width='28'
                    height='29'
                    viewBox='0 0 28 29'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect y='0.5' width='28' height='28' rx='14' fill='#C3F53C' />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M19.9457 9.12169L11.5923 17.1834L9.37568 14.815C8.96734 14.43 8.32568 14.4067 7.85901 14.7334C7.40401 15.0717 7.27568 15.6667 7.55568 16.145L10.1807 20.415C10.4373 20.8117 10.8807 21.0567 11.3823 21.0567C11.8607 21.0567 12.3157 20.8117 12.5723 20.415C12.9923 19.8667 21.0073 10.3117 21.0073 10.3117C22.0573 9.23836 20.7857 8.29336 19.9457 9.11002V9.12169Z'
                      fill='#002C15'
                    />
                  </svg>
                  <div className='relative flex w-full flex-1 flex-col items-start gap-0'>
                    <p className='text-lg leading-7 tracking-[-0.2px] text-white'>
                      <span className='text-lg font-normal tracking-[-0.2px] text-white'>
                        No Minimum Balance.
                      </span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <button className='relative flex cursor-pointer items-start gap-0 rounded-lg bg-transparent'>
              <div className='relative flex items-center justify-center gap-2.5 overflow-hidden rounded-[64px] border border-[#c3f53c] bg-[#c3f53c] py-4 pr-6 pl-8'>
                <p className='text-lg leading-7 tracking-[-0.2px] text-[#002c15]'>
                  <span className='text-lg font-semibold tracking-[-0.2px] text-[#002c15]'>Learn more</span>
                </p>
                <svg
                  width='22'
                  height='23'
                  viewBox='0 0 22 23'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4.58301 11.5H17.4163M17.4163 11.5L10.9997 5.08337M17.4163 11.5L10.9997 17.9167'
                    stroke='#002C15'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymintCard;
