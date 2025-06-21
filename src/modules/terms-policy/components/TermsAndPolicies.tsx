'use client';
import AffiliateProgramTerms from '@/modules/AffiliatedProgramTerms';
import AmlCompliance from '@/modules/AmlCompliance';
import CookiesPolicy from '@/modules/cookiesPolicyModule';
import PrivacyPolicyModule from '@/modules/privacyPolicyModule';
import TermsAndPoliciesModule from '@/modules/termsAndConditions';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
//  const sections = {
//     personal: {
//       title: 'Personal Terms',
//       count: 8,
//       lastUpdated: 'September 15, 2023',
//       content: [
//         {
//           title: 'General',
//           subtitle: 'Sed ut perspiciatis unde',
//           content: (
//             <>
//               <p className='mb-4'>
//                 Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat
//                 scelerisque et, nunc tortor. Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
//                 mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis
//                 at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet.
//                 Ipsum molestie aliquet sodales id est ac volutpat.
//               </p>
//               <ul className='list-disc space-y-1 pl-5'>
//                 <li>Mi tincidunt elit, id quisque ligula ac diam, amet.</li>
//                 <li>Vel etiam suspendisse morbi eleifend faucibus eget vestibulum.</li>
//                 <li>Tellus aliquam enim urna, etiam. Mauris posuere vulputate.</li>
//                 <li>At vero eos et accusamus et iusto odio</li>
//               </ul>
//               <p className='mt-4'>
//                 Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque
//                 congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
//                 aenean tempus.
//               </p>
//             </>
//           )
//         },
//         {
//           title: 'SmashPay Services',
//           content: (
//             <ul className='list-disc space-y-2 pl-5'>
//               <li>
//                 Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In
//                 aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in
//                 vitae malesuada fringilla.
//               </li>
//               <li>
//                 Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur
//                 convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra
//                 purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis
//                 aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu
//                 vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra,
//                 porttitor.
//               </li>
//               <li>
//                 Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque
//                 congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
//                 aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh
//                 orci.
//               </li>
//             </ul>
//           )
//         },
//         {
//           title: 'Customer Data',
//           content: (
//             <ul className='list-disc space-y-2 pl-5'>
//               <li>
//                 Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc
//                 nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate
//                 consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat
//                 cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.
//               </li>
//               <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
//               <li>
//                 Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae
//                 placerat.
//               </li>
//               <li>Suspendisse maecenas ac donec scelerisque diam sed est duis purus.</li>
//             </ul>
//           )
//         },
//         {
//           title: 'Security',
//           content: (
//             <ul className='list-disc space-y-2 pl-5'>
//               <li>
//                 Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In
//                 aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in
//                 vitae malesuada fringilla. Risus, volutpat vulputate posuere purus sit congue convallis
//                 aliquet. Ipsum sit mattis nulla quam nulla.
//               </li>
//               <li>Elit nisi in eleifend sed nisi.</li>
//               <li>
//                 Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim
//                 dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam.
//               </li>
//               <li>
//                 {' '}
//                 Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien,
//                 dictum molestie sem tempor. Diam elit, orci, tincidunt aenean..
//               </li>
//             </ul>
//           )
//         },
//         {
//           title: 'Communications',
//           content: (
//             <ul className='list-disc space-y-2 pl-5'>
//               <li>
//                 Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque
//                 congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
//                 aenean tempus. Morbi sed imperdiet
//               </li>
//               <li>Elit nisi in eleifend sed nisi.</li>
//               <li>
//                 Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim
//                 dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam.
//               </li>
//               <li>
//                 {' '}
//                 Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien,
//                 dictum molestie sem tempor. Diam elit, orci, tincidunt aenean..
//               </li>
//             </ul>
//           )
//         },
//         {
//           title: 'Indemnification',
//           content: (
//             <ul className='list-disc space-y-2 pl-5'>
//               <li>
//                 Indemnification sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non
//                 pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit,
//                 orci, tincidunt aenean tempus. Morbi sed imperdiet
//               </li>
//               <li>Elit nisi in eleifend sed nisi.</li>
//               <li>
//                 Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim
//                 dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam.
//               </li>
//             </ul>
//           )
//         },
//         {
//           title: 'How to contact us',
//           content: (
//             <ul className='list-disc space-y-2 pl-5'>
//               <li>
//                 How to contact us sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non
//                 pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit,
//                 orci, tincidunt aenean tempus. Morbi sed imperdiet
//               </li>
//             </ul>
//           )
//         }
//       ]
//     },
//     business: {
//       title: 'Business Terms',
//       count: 10,
//       content: [
//         {
//           title: 'Business general',
//           subtitle: 'Business',
//           content: <AmlCompliance />
//         }
//       ] // Would contain similar structure
//     },
//     privacy: {
//       title: 'Privacy Policy',
//       count: 9,
//       content: [] // Would contain similar structure
//     },
//     cookie: {
//       title: 'Cookie Policy',
//       count: 2,
//       content: [] // Would contain similar structure
//     }
//   };
const TermsAndPolicies = () => {
  const [activeSection, setActiveSection] = useState('terms');
  const [helpfulClicked, setHelpfulClicked] = useState<boolean | null>(null);

  const sections = {
    terms: {
      short_title: 'Terms & Conditions',
      title: 'SmashTech Ventures Ltd (SmashPay) Terms of Service',
      count: 8,
      content: <TermsAndPoliciesModule />
    },
    privacy: {
      short_title: 'Privacy Policy',
      title: 'Privacy Policy SmashTech Ventures Ltd (SmashPay)',
      count: 10,
      content: <PrivacyPolicyModule />
    },
    cookies: {
      short_title: 'Cookies Policy',
      title: 'Cookies Policy',
      count: 9,
      content: <CookiesPolicy />
    },
    aml: {
      short_title: 'AML Compliance',
      title: 'Compliance AML',
      count: 2,
      content: <AmlCompliance />
    },
    business: {
      short_title: 'Affiliate Program Terms',
      title: 'SmashPay Affiliate Program General Terms and Conditions',
      count: 2,
      content: <AffiliateProgramTerms />
    }
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className='bg-clr-14 w-full px-4 py-24 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-[1200px]'>
        <div className='flex flex-col gap-8 lg:flex-row lg:gap-16'>
          {/* Sidebar Navigation */}
          <motion.div
            initial='hidden'
            animate='visible'
            variants={variants}
            className='w-full flex-shrink-0 lg:w-72'
          >
            <div className='sticky top-8 space-y-8'>
              {Object.entries(sections).map(([key, section]) => (
                <div key={key} className='space-y-4'>
                  <button
                    onClick={() => setActiveSection(key)}
                    className={`group flex w-full cursor-pointer items-center justify-between ${
                      activeSection === key ? 'text-white' : 'text-gray-300'
                    }`}
                  >
                    <span className='text-lg font-medium'>{section.short_title}</span>
                    <span className='rounded-full bg-gradient-to-r from-gray-800 to-gray-900 px-2 py-0.5 text-sm font-medium'>
                      {/* {section.count} */}
                    </span>
                  </button>

                  {/* {activeSection === key && key === 'personal' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className='space-y-3 pl-2'
                    >
                      {[
                        'General',
                        'SmashPay Services',
                        'Customer Data',
                        'Security',
                        'Support',
                        'Communications',
                        'Indemnification',
                        'How to contact us'
                      ].map((item) => (
                        <a
                          key={item}
                          href={`#${item.toLowerCase().replace(' ', '-')}`}
                          className='block text-gray-400 transition-colors hover:text-white'
                        >
                          {item}
                        </a>
                      ))}
                    </motion.div>
                  )} */}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial='hidden'
            animate='visible'
            variants={variants}
            transition={{ delay: 0.1 }}
            className='flex-1'
          >
            <div className='space-y-10'>
              {/* Header */}
              <div className='space-y-8'>
                <div className='text-center'>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className='inline-flex flex-col items-center'
                  >
                    <h2 className='text-2xl font-medium text-white'>Terms & Policies</h2>
                    <div className='mt-1 h-0.5 w-full bg-gradient-to-r from-blue-900 via-gray-800 to-purple-900' />
                  </motion.div>
                </div>

                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className='bg-gradient-to-b from-gray-400 to-white bg-clip-text text-4xl font-medium text-transparent md:text-5xl'
                >
                  {sections[activeSection as keyof typeof sections].title}
                </motion.h1>

                {/* {activeSection === 'personal' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className='text-gray-500'
                  >
                    Last updated on {sections.personal.lastUpdated}
                  </motion.p>
                )} */}

                {/* <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='flex items-center gap-2 rounded-full border border-gray-700 bg-gradient-to-b from-gray-800 to-black px-6 py-3'
                >
                  <Image src='/download0.svg' alt='Download' width={22} height={22} />
                  <span className='font-semibold text-white'>Download PDF</span>
                </motion.button> */}
              </div>

              {/* Content Sections */}
              <div className='space-y-10 text-white'>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className='text-gray-500'
                >
                  {sections[activeSection as keyof typeof sections].content}
                </motion.div>

                {/* {sections.personal.content.map((section, index) => (
                  <motion.div
                    key={index}
                    id={section.title.toLowerCase().replace(' ', '-')}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className='space-y-4'
                  >
                    <h3 className='text-2xl font-medium text-white'>{section.title}</h3>
                    {section.subtitle && (
                      <h4 className='text-xl font-medium text-white'>{section.subtitle}</h4>
                    )}
                    <div className='text-lg leading-relaxed text-gray-300'>{section.content}</div>
                  </motion.div>
                ))} */}
                {/* Feedback Section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className='space-y-10 pt-4'
                >
                  <div className='h-px bg-gray-700' />

                  <div className='space-y-1 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 p-8'>
                    <div className='flex flex-wrap items-center justify-between gap-2'>
                      <h4 className='text-lg font-medium text-white'>Was this article helpful?</h4>
                      <div className='flex gap-1'>
                        <button
                          onClick={() => setHelpfulClicked(true)}
                          className={`rounded-full p-1.5 ${
                            helpfulClicked === true ? 'bg-blue-500' : 'bg-gray-800 hover:bg-gray-700'
                          }`}
                        >
                          <Image src='/thumbs-up-10.svg' alt='Thumbs up' width={24} height={24} />
                        </button>
                        <button
                          onClick={() => setHelpfulClicked(false)}
                          className={`rounded-full p-1.5 ${
                            helpfulClicked === false ? 'bg-red-500' : 'bg-gray-800 hover:bg-gray-700'
                          }`}
                        >
                          <Image src='/thumbs-down-10.svg' alt='Thumbs down' width={24} height={24} />
                        </button>
                      </div>
                    </div>
                    <p className='text-gray-400'>Reference No. 1234567890</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndPolicies;
