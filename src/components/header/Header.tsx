'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiChevronDown, FiChevronRight, FiMenu, FiX } from 'react-icons/fi';

type MenuItem = {
  title: string;
  href?: string;
};

type MenuGroup = {
  groupTitle: string;
  links: MenuItem[];
};

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const menuStructure: { title: string; href?: string; submenu?: MenuGroup[] }[] = [
    {
      title: 'Products',
      submenu: [
        {
          groupTitle: 'Products',
          links: [
            { title: 'Cards', href: '/card' },
            { title: 'Personal', href: '/personal' },
            { title: 'Business', href: '/business' },
            { title: 'Multi-currency', href: '/multicurrency-account' }
          ]
        },
        {
          groupTitle: 'Payments',
          links: [
            { title: 'Payment process', href: '/payment-processing' },
            { title: 'Payment Rails', href: '/payments' },
            { title: 'Payouts', href: '/payouts' }
          ]
        },
        {
          groupTitle: 'Crypto',
          links: [
            { title: 'Crypto', href: '/crypto' },
            { title: 'GamiFi', href: '/crypto/gamefi' },
            { title: 'NFT', href: '/nft' },
            { title: 'Off-Ramp', href: '/offramp' }
          ]
        }
      ]
    },
    {
      title: 'Pricing',
      href: '/pricing'
    },
    {
      title: 'Company',
      submenu: [
        {
          groupTitle: 'Company',
          links: [
            { title: 'About Us', href: '/about-us' },
            { title: 'Career', href: '/careers' },
            { title: 'Blog', href: '/blog' },
            { title: 'Contact Us', href: '/contact-us' }
          ]
        },
        {
          groupTitle: 'Policies',
          links: [{ title: 'terms-policies', href: '/terms-policies' }]
        }
      ]
    },
    {
      title: 'Resources',
      submenu: [
        {
          groupTitle: 'Resources',
          links: [
            { title: 'FAQ', href: '/faq' },
            { title: 'Coverages', href: '/country-coverage' }
          ]
        }
      ]
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      console.log('window.innerWidth < 768', window.innerWidth < 768);
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  return (
    <div
      className='z-50 flex w-full flex-col items-center justify-start'
      style={{
        background: 'linear-gradient(180deg, rgba(12, 17, 24, 1) 0%, rgba(29, 30, 45, 1) 100%)'
      }}
    >
      {/* Header */}
      <div
        className='relative h-[82px] w-full border-b bg-[#161922]'
        style={{
          borderImage:
            'linear-gradient(90deg, rgba(158, 168, 171, 1) 0%, rgba(129, 112, 168, 1) 48.527792096138%, rgba(79, 173, 162, 1) 100%) 1'
        }}
      >
        <div className='flex h-[82px] w-full items-center justify-center'>
          <div className='flex w-full max-w-7xl items-center justify-between px-4 md:px-8'>
            <div className='flex items-center gap-4 md:gap-16'>
              {/* Logo */}
              <div className='relative h-10 w-[200px]'>
                <Link href={'/'} onClick={() => setMobileMenuOpen(false)}>
                  {' '}
                  <Image
                    src='/home/smash-pay-logo.png'
                    alt='Smash Pay Logo'
                    layout='fill'
                    objectFit='cover'
                  />
                </Link>
              </div>

              {/* Desktop Menu */}
              {!isMobile && (
                <nav className='flex items-center gap-10 text-sm font-medium'>
                  {menuStructure.map((section) => (
                    <div key={section.title} className='group relative'>
                      <div className='flex cursor-pointer items-center gap-1'>
                        <Link
                          href={section.href ?? '#'}
                          className='text-sm font-medium text-white transition-colors group-hover:text-gray-300 md:text-lg'
                        >
                          {section.title}
                        </Link>
                        {section.submenu && (
                          <FiChevronDown className='ml-1 text-white transition-colors group-hover:text-gray-300' />
                        )}
                      </div>

                      {/* Submenu */}
                      {section.submenu && (
                        <div className='absolute top-full left-0 z-50 hidden min-w-[300px] gap-8 rounded-md bg-[#161922] px-4 py-4 shadow-lg group-hover:flex'>
                          {section.submenu.map((group) => (
                            <div key={group.groupTitle} className='min-w-[120px]'>
                              <p className='gradient-text mb-1 block py-2 text-lg font-bold text-white'>
                                {group.groupTitle}
                              </p>
                              {group.links.map((link) => (
                                <Link key={link.title} href={link.href || '#'}>
                                  <p className='py-[8px] text-sm text-white hover:bg-[#0e131b]'>
                                    {link.title}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              )}
            </div>

            {/* Mobile Menu Button */}
            {isMobile && (
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className='p-2 text-white'>
                {mobileMenuOpen ? <FiX className='h-6 w-6' /> : <FiMenu className='h-6 w-6' />}
              </button>
            )}

            {/* Desktop Auth Buttons */}
            {!isMobile && (
              <div className='flex items-center gap-2 md:gap-3'>
                <button className='rounded-[40px] border border-[#3c414c] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2a2e38] md:text-base'>
                  Log in
                </button>
                <button
                  className='rounded-[40px] border border-[#3c414c] px-4 py-2.5 text-sm font-semibold text-white md:text-base'
                  style={{
                    background: 'linear-gradient(180deg, rgba(21, 24, 32, 1) 0%, rgba(1, 1, 1, 1) 100%)'
                  }}
                >
                  Register
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}

        <AnimatePresence>
          {isMobile && mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className='w-full overflow-hidden bg-[#161922]'
            >
              <div className='px-4 py-4'>
                {menuStructure.map((section, index) => (
                  <div key={index}>
                    <div
                      className='flex cursor-pointer items-center justify-between py-2'
                      onClick={() => {
                        toggleSubmenu(section.title);
                        !section.submenu && setMobileMenuOpen(false);
                      }}
                    >
                      <Link href={section.href ?? '#'} className='text-white'>
                        {section.title}
                      </Link>
                      {section.submenu && (
                        <FiChevronRight
                          className={`text-white transition-transform ${openSubmenu === section.title ? 'rotate-90' : ''}`}
                        />
                      )}
                    </div>
                    {section.submenu && (
                      <div className='mb-2'>
                        <AnimatePresence>
                          {openSubmenu === section.title && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className='pb-2 pl-4'
                            >
                              {section.submenu &&
                                section.submenu.map((group) => (
                                  <div key={group.groupTitle} className='mb-4'>
                                    <p className='mt-2 mb-1 text-xs text-gray-500'>{group.groupTitle}</p>
                                    {group.links.map((link) => (
                                      <Link
                                        onClick={() => setMobileMenuOpen(false)}
                                        key={link.title}
                                        href={link.href || '#'}
                                      >
                                        <p className='py-1 text-sm text-gray-300 hover:text-white'>
                                          {link.title}
                                        </p>
                                      </Link>
                                    ))}
                                  </div>
                                ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                ))}

                <div className='mt-4 border-t border-[#3c414c] pt-4'>
                  <button className='mb-2 w-full rounded-[40px] border border-[#3c414c] px-4 py-2.5 text-base font-semibold text-white'>
                    Log in
                  </button>
                  <button
                    className='w-full rounded-[40px] border border-[#3c414c] px-4 py-2.5 text-base font-semibold text-white'
                    style={{
                      background: 'linear-gradient(180deg, rgba(21, 24, 32, 1) 0%, rgba(1, 1, 1, 1) 100%)'
                    }}
                  >
                    Register
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
