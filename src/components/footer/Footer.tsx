'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const footerLinks = [
    {
      title: 'Products',
      links: [
        {
          link: '/personal',
          label: 'For Personal'
        },
        {
          link: '/business',
          label: 'For Businesses'
        },
        {
          link: '/multicurrency-account',
          label: 'Multi-currency account'
        },
        {
          link: '/card',
          label: 'SmashPay card'
        },
        {
          link: '/country-coverage',
          label: 'Country coverage'
        }
      ]
    },
    {
      title: 'Company',
      links: [
        {
          link: '/about-us',
          label: 'About us'
        },
        {
          link: '/about-us',
          label: 'Customer stories'
        },
        {
          link: '/blog',
          label: 'Press'
        },
        {
          link: '/careers',
          label: 'Careers'
        },
        {
          link: '/contact-us',
          label: 'Contact us'
        }
      ],
      badge: "We're hiring"
    },
    {
      title: 'Resources',
      // links: ['Blog', 'FAQ', 'Help centre', 'Developers', 'Terms and privacy']
      links: [
        {
          link: '/blog',
          label: 'Blog'
        },
        {
          link: '/faq',
          label: 'FAQ'
        },
        {
          link: '/faq',
          label: 'Help centre'
        },
        {
          link: '/pricing',
          label: 'Pricing'
        },
        {
          link: '/terms-policies',
          label: 'Terms and privacy'
        }
      ]
    },
    {
      title: 'Download app',
      links: [],
      isAppDownload: true
    }
  ];

  const socialLinks = [
    { icon: '/home/facebook0.svg', alt: 'Facebook' },
    { icon: '/home/group19.svg', alt: 'Twitter' },
    { icon: '/home/instagram-10.svg', alt: 'Instagram' },
    { icon: '/home/youtube-10.svg', alt: 'YouTube' }
  ];

  return (
    <footer className='bg-clr-14 relative w-full overflow-hidden'>
      {/* Footer Content */}
      <div className='bg-bg -mt-8 pt-32 pb-16'>
        <div className='mx-auto max-w-7xl px-5 md:px-8'>
          <div className='flex flex-col gap-24'>
            {/* Footer Links */}
            <div className='flex flex-col gap-12 lg:flex-row lg:gap-16'>
              {/* Logo */}
              <div className='w-full lg:w-auto'>
                <Image
                  src='/home/smash-pay-logo-1-11.png'
                  alt='SmashPay Logo'
                  width={146}
                  height={28}
                  className='aspect-[146/28] object-cover'
                />
              </div>

              {/* Links Grid */}
              <div className='grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
                {footerLinks.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className='flex flex-col gap-6'
                  >
                    <h3 className='text-base font-semibold tracking-tight text-white'>{section.title}</h3>

                    {section.isAppDownload ? (
                      <div className='flex flex-col gap-4'>
                        <Image
                          src={`/home/Mobile-app-store-badge.png`}
                          alt='Checkmark'
                          width={150}
                          height={48}
                        />
                        <Image
                          src={`/home/Mobile-google-play badge.png`}
                          alt='Checkmark'
                          width={150}
                          height={48}
                        />
                      </div>
                    ) : (
                      <ul className='flex flex-col gap-4'>
                        {section.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <div className='flex items-center gap-2'>
                              <Link
                                href={link.link}
                                className='text-md font-normal tracking-tight text-gray-300 transition-colors hover:text-white'
                              >
                                {link.label}
                              </Link>
                              {section.badge && linkIndex === 3 && (
                                <span className='rounded-2xl border border-[#151820] bg-gradient-to-r from-[#1d1f2d] to-[#1d1f2e] px-2 py-0.5 text-xs font-medium text-white'>
                                  {section.badge}
                                </span>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='h-px w-full bg-gradient-to-r from-[#37425d] via-[#1d2129] to-[#29283c]'
            />

            {/* Bottom Footer */}
            <div className='flex flex-col items-center justify-between gap-6 md:flex-row'>
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='text-sm font-normal tracking-tight text-gray-300'
              >
                Copyright © SmashPay 2023.
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className='flex gap-6'
              >
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href='#'
                    className='flex h-12 w-12 items-center justify-center rounded-full border border-[#3c414c] bg-gradient-to-b from-[#171a23] to-[#30343e] transition-opacity hover:opacity-90'
                  >
                    <Image src={social.icon} alt={social.alt} width={16} height={16} />
                  </a>
                ))}
              </motion.div>

              {/* Language Selector */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='flex h-12 items-center gap-6'
              >
                <div className='rounded-[48px] border border-[#161616] px-[25px] py-3'>
                  <div className='flex w-[153px] items-center justify-between'>
                    <span className='text-md font-semibold tracking-tight text-gray-300'>English</span>
                    <Image src='/home/chevron-down9.svg' alt='Dropdown' width={18} height={18} />
                  </div>
                </div>
                <button className='rounded-[48px] border border-[#161616] bg-[#161616] p-3.5'>
                  <Image src='/home/chevron-up2.svg' alt='Scroll up' width={18} height={18} />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
