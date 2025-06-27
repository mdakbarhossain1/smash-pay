'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useState } from 'react';

import {
  FiAward,
  // FiBitcoin,
  FiBook,
  FiBriefcase,
  FiCheckCircle,
  FiChevronRight,
  // FiCookie,
  FiCreditCard,
  FiDollarSign,
  FiDownload,
  FiFileText,
  FiGlobe,
  FiHelpCircle,
  FiImage,
  FiInfo,
  FiLogOut,
  FiMail,
  FiMap,
  FiMenu,
  FiSend,
  FiShield,
  FiUser,
  FiUsers,
  FiX
} from 'react-icons/fi';
import MegaMenu from './MegaMenu';

// Type for individual menu link
type MenuLink = {
  title: string;
  href: string;
  icon?: ReactNode;
};
// Type for a group of links in submenu
type MenuGroup = {
  groupTitle: string;
  links: MenuLink[];
};
// Type for main menu items
type MenuItem = {
  title: string;
  href?: string;
  submenu?: MenuGroup[];
};
// The complete menu structure type
type MenuStructure = MenuItem[];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const menuStructure: MenuStructure = [
    {
      title: 'Products',
      submenu: [
        {
          groupTitle: 'Products',
          links: [
            { title: 'SmashPay Card', href: '/card', icon: <FiCreditCard className='mr-2' /> },
            { title: 'Personal', href: '/personal', icon: <FiUser className='mr-2' /> },
            { title: 'Business', href: '/business', icon: <FiBriefcase className='mr-2' /> },
            {
              title: 'Multi Currency Account',
              href: '/multicurrency-account',
              icon: <FiGlobe className='mr-2' />
            }
          ]
        },
        {
          groupTitle: 'Payments',
          links: [
            {
              title: 'Payment Processing',
              href: '/payment-processing',
              icon: <FiDollarSign className='mr-2' />
            },
            { title: 'Payment Rails', href: '/payments', icon: <FiSend className='mr-2' /> },
            { title: 'Payouts', href: '/payouts', icon: <FiDownload className='mr-2' /> }
          ]
        },
        {
          groupTitle: 'Crypto',
          links: [
            { title: 'Crypto', href: '/crypto', icon: <FiAward className='mr-2' /> },
            { title: 'GameFi', href: '/crypto/gamefi', icon: <FiAward className='mr-2' /> },
            { title: 'NFT', href: '/nft', icon: <FiImage className='mr-2' /> },
            { title: 'Off-Ramp', href: '/offramp', icon: <FiLogOut className='mr-2' /> }
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
            { title: 'About Us', href: '/about-us', icon: <FiInfo className='mr-2' /> },
            { title: 'Career', href: '/careers', icon: <FiUsers className='mr-2' /> },
            { title: 'Blog', href: '/blog', icon: <FiBook className='mr-2' /> },
            { title: 'Contact Us', href: '/contact-us', icon: <FiMail className='mr-2' /> }
          ]
        },
        {
          groupTitle: 'Policies',
          links: [
            {
              title: 'Terms & Policy',
              href: '/terms-policies?scrollTo=terms',
              icon: <FiFileText className='mr-2' />
            },
            {
              title: 'Privacy Policy',
              href: '/terms-policies?scrollTo=privacy',
              icon: <FiShield className='mr-2' />
            },
            {
              title: 'Cookies Policy',
              href: '/terms-policies?scrollTo=cookies',
              icon: <FiShield className='mr-2' />
            },
            {
              title: 'AML Compliance',
              href: '/terms-policies?scrollTo=aml',
              icon: <FiCheckCircle className='mr-2' />
            },
            {
              title: 'Affiliate Terms',
              href: '/terms-policies?scrollTo=business',
              icon: <FiBriefcase className='mr-2' />
            }
          ]
        }
      ]
    },
    {
      title: 'Resources',
      submenu: [
        {
          groupTitle: 'Resources',
          links: [
            { title: 'FAQ', href: '/faq', icon: <FiHelpCircle className='mr-2' /> },
            { title: 'Country Coverages', href: '/country-coverage', icon: <FiMap className='mr-2' /> }
          ]
        }
      ]
    }
  ];
  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  return (
    <div
      className='sticky top-0 z-[9999999999999] flex w-full flex-col items-center justify-start'
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
              <MegaMenu menuStructure={menuStructure} />
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className='p-2 text-white md:hidden'>
              {mobileMenuOpen ? <FiX className='h-6 w-6' /> : <FiMenu className='h-6 w-6' />}
            </button>

            {/* Desktop Auth Buttons */}
            <div className='hidden items-center gap-2 md:flex md:gap-3'>
              <Link href={'/contact-us'}>
                <button className='cursor-pointer rounded-[40px] border border-[#3c414c] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2a2e38] md:text-base'>
                  Log in
                </button>
              </Link>
              <Link href={'/contact-us'}>
                <button
                  className='cursor-pointer rounded-[40px] border border-[#3c414c] px-4 py-2.5 text-sm font-semibold text-white md:text-base'
                  style={{
                    background: 'linear-gradient(180deg, rgba(21, 24, 32, 1) 0%, rgba(1, 1, 1, 1) 100%)'
                  }}
                >
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}

        <AnimatePresence>
          {mobileMenuOpen && (
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
                                        <p className='flex items-center gap-1 py-1 text-sm text-gray-300 hover:text-white'>
                                          {link.icon}
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
                  <Link href={'/contact-us'}>
                    <button className='mb-2 w-full cursor-pointer rounded-[40px] border border-[#3c414c] px-4 py-2.5 text-base font-semibold text-white'>
                      Log in
                    </button>
                  </Link>
                  <Link href={'/contact-us'}>
                    <button
                      className='w-full cursor-pointer rounded-[40px] border border-[#3c414c] px-4 py-2.5 text-base font-semibold text-white'
                      style={{
                        background: 'linear-gradient(180deg, rgba(21, 24, 32, 1) 0%, rgba(1, 1, 1, 1) 100%)'
                      }}
                    >
                      Register
                    </button>
                  </Link>
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
