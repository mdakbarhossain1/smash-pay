'use client';
import { getCookie, setCookie } from '@/lib/cookies';
import { useEffect, useState } from 'react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = getCookie('cookie_consent');
    if (!consent) setShowBanner(true);
  }, []);

  const handleConsent = (consent: 'accepted' | 'rejected') => {
    setCookie('cookie_consent', consent, 180); // 180 days
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className='fixed inset-0 z-[9999999999] bg-black/80'>
      <div className='fixed right-0 bottom-0 left-0 z-[9999999999] bg-white p-4 text-black'>
        <div className='mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 sm:flex-row'>
          <div className='text-md space-y-3 py-10'>
            <p>
              <b className='text-2xl'>Help Us Deliver a Better Experience</b>
            </p>{' '}
            <p>
              We use{' '}
              <b className='text-lg'>
                <a href='/terms-policies?scrollTo=cookies'>cookies</a>
              </b>{' '}
              and similar technologies to enhance your browsing experience, analyze site traffic,{' '}
              <br className='hidden md:block' /> and improve our services. You can choose to accept or reject
              these cookies.
            </p>
          </div>
          <div className='flex gap-2'>
            <button
              onClick={() => handleConsent('accepted')}
              className='border-clr-01 cursor-pointer rounded border bg-black px-4 py-2 text-sm text-white hover:bg-white hover:text-black'
            >
              Accept
            </button>
            <button
              onClick={() => handleConsent('rejected')}
              className='border-clr-01 cursor-pointer rounded border bg-black px-4 py-2 text-sm text-white hover:bg-white hover:text-black'
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
