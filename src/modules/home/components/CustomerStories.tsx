const CustomerStories = () => {
  return (
    <section>
      <div className='container'>
        <div className='grid grid-cols-2'>
          <div>
            <p className='text-lg leading-7 tracking-[-0.2px] text-[#002c15]'>
              <span className='text-lg font-medium tracking-[-0.2px] text-[#002c15]'>Customer stories</span>
            </p>
            <h1 className='text-[58px] leading-[64px] tracking-[-2px] text-[#002c15]'>
              <span className='text-[58px] font-medium tracking-[-2px] text-[#002c15]'>
                Customer success is our success
              </span>
            </h1>
          </div>

          <div>
            <div className='flex flex-col items-center gap-2.5 pr-5 pl-0'>
              <h4 className='text-2xl leading-8 tracking-[-1px] text-[#002c15]'>
                <span className='text-2xl font-normal tracking-[-1px] text-[#002c15]'>1/6</span>
              </h4>

              <div className='flex items-center gap-3'>
                <div className='flex h-[72px] w-[72px] items-center justify-center gap-2 overflow-hidden rounded-[78px] border border-[#002c15] p-4'>
                  <svg
                    width='32'
                    height='33'
                    viewBox='0 0 32 33'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M25.3337 16.5001H6.66699M6.66699 16.5001L16.0003 25.8334M6.66699 16.5001L16.0003 7.16675'
                      stroke='#002C15'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <div className='flex h-[72px] w-[72px] items-center justify-center gap-2 overflow-hidden rounded-[78px] border border-[#002c15] bg-[#002c15] p-4'>
                  <svg
                    width='32'
                    height='33'
                    viewBox='0 0 32 33'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M6.66699 16.5001H25.3337M25.3337 16.5001L16.0003 7.16675M25.3337 16.5001L16.0003 25.8334'
                      stroke='white'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex items-start gap-8'>
          <div className='flex h-full w-[480px] flex-col items-start gap-8 self-stretch overflow-hidden rounded-3xl bg-white pt-0 pb-10'>
            <div className='h-80 w-[480px] overflow-hidden bg-[#d5f876]'></div>
            <div className='flex w-full flex-col items-start gap-8 self-stretch px-10'>
              <h4 className='text-2xl leading-8 tracking-[-1px] text-[#002c15]'>
                <span className='text-2xl font-semibold tracking-[-1px] text-[#002c15]'>Uber</span>
                <span className='text-2xl font-normal tracking-[-1px] text-[#002c15]'>
                  {' '}
                  optimizes the driver experience using Paymint as their main payment.
                </span>
              </h4>
              <button className='flex items-start gap-0 rounded-lg bg-transparent'>
                <div className='flex items-center justify-center gap-1.5 overflow-hidden rounded-[48px] border border-[#c3f53c] bg-[#c3f53c] px-[25px] py-3'>
                  <p className='text-base leading-6 tracking-[-0.2px] text-[#002c15]'>
                    <span className='text-base font-semibold tracking-[-0.2px] text-[#002c15]'>
                      Read story
                    </span>
                  </p>
                  <svg
                    width='18'
                    height='18'
                    viewBox='0 0 18 18'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M3.75 9H14.25M14.25 9L9 3.75M14.25 9L9 14.25'
                      stroke='#002C15'
                      strokeWidth='1.67'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className='flex h-full w-[480px] flex-col items-start gap-8 self-stretch overflow-hidden rounded-3xl bg-white pt-0 pb-10'>
            <div className='h-80 w-[480px] overflow-hidden bg-[#c8ffc9]'></div>
            <div className='flex w-full flex-col items-start gap-8 self-stretch px-10'>
              <h4 className='text-2xl leading-8 tracking-[-1px] text-[#002c15]'>
                <span className='text-2xl font-semibold tracking-[-1px] text-[#002c15]'>WeBoth</span>
                <span className='text-2xl font-normal tracking-[-1px] text-[#002c15]'>
                  {' '}
                  sees an 8% increase in authorization rates with Paymint.
                </span>
              </h4>
              <button className='flex items-start gap-0 rounded-lg bg-transparent'>
                <div className='flex items-center justify-center gap-1.5 overflow-hidden rounded-[48px] border border-[#c3f53c] bg-[#c3f53c] px-[25px] py-3'>
                  <p className='text-base leading-6 tracking-[-0.2px] text-[#002c15]'>
                    <span className='text-base font-semibold tracking-[-0.2px] text-[#002c15]'>
                      Read story
                    </span>
                  </p>
                  <svg
                    width='18'
                    height='18'
                    viewBox='0 0 18 18'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M3.75 9H14.25M14.25 9L9 3.75M14.25 9L9 14.25'
                      stroke='#002C15'
                      strokeWidth='1.67'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className='flex h-full w-[480px] flex-col items-start gap-8 self-stretch overflow-hidden rounded-3xl bg-white pt-0 pb-10'>
            <div className='h-80 w-[480px] overflow-hidden bg-[#d5f876]'>
              <div className='h-80 w-[480px] bg-[#002c15]'></div>
            </div>
            <div className='flex w-full flex-col items-start gap-8 self-stretch px-10'>
              <h4 className='text-2xl leading-8 tracking-[-1px] text-[#002c15]'>
                <span className='text-2xl font-semibold tracking-[-1px] text-[#002c15]'>Asana</span>
                <span className='text-2xl font-normal tracking-[-1px] text-[#002c15]'>
                  {' '}
                  choose Paymint to power paid subscriptions globally.
                </span>
              </h4>
              <button className='flex items-start gap-0 rounded-lg bg-transparent'>
                <div className='flex items-center justify-center gap-1.5 overflow-hidden rounded-[48px] border border-[#c3f53c] bg-[#c3f53c] px-[25px] py-3'>
                  <p className='text-base leading-6 tracking-[-0.2px] text-[#002c15]'>
                    <span className='text-base font-semibold tracking-[-0.2px] text-[#002c15]'>
                      Read story
                    </span>
                  </p>
                  <svg
                    width='18'
                    height='18'
                    viewBox='0 0 18 18'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M3.75 9H14.25M14.25 9L9 3.75M14.25 9L9 14.25'
                      stroke='#002C15'
                      strokeWidth='1.67'
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
    </section>
  );
};

export default CustomerStories;
