'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const topics = [
  {
    icon: '/contact-us/icons/profile-account.svg',
    title: 'Hold, receive, and send money in multiple currencies with customer segregated accounts.',
    slug: 'accounts',
    optionTitle: 'Opportunities with SmashPay',
    description:
      ' Award winning account functionality and features across Europe and UK, including IBANs (Local IBANs), BICs, Account Numbers, Sort Codes',
    options: [
      {
        id: 1,
        title: 'Launch in light speed so you get to market in time',
        description:
          'Launch your account offering with lower costs, more efficiency and improved user experience thanks to our automated toolkit'
      },
      {
        id: 2,
        title: 'Utilise our licenses',
        description:
          'We take on the regulatory challenges and obstacles associated with launching an account program by allowing you to utilise our regulatory licenses'
      },
      {
        id: 3,
        title: 'Attract new customers and build loyalty',
        description:
          'Provide your customers with hyper personalised financial products that increases customer engagement and loyalty in your brand and business'
      },
      {
        id: 4,
        title: 'Full suite of APIs',
        description:
          'A comprehensive suite of RESTful API methods allows you to offer custom made account solutions for your customers'
      },
      {
        id: 5,
        title: 'Innovative and latest digital features',
        description: 'Gain access to our robust payment technology driven by our drive of constant innovation'
      }
    ]
  },
  {
    icon: '/contact-us/icons/pay-card.svg',
    title: 'Choose how your customers make and receive payments through our global banking network',
    slug: 'payments',
    description:
      'SmashPay Banking as a Service platform connects you to cross-border payment rails giving you the power to create your bespoke programme',
    optionTitle: 'Inbound and outbound payment transfer services',
    options: [
      {
        id: 1,
        title: 'International Payments',
        description: 'Allows customers to send funds to over 35 currencies in over 50 countries'
      },
      {
        id: 2,
        title: 'BACS',
        description: 'Used for UK bank transfers, ordinarily taking 3 working days to clear'
      },
      {
        id: 3,
        title: 'Peer to Peer',
        description:
          'Electronic money transfers made from one person’s account to another through the Unlimit network'
      },
      {
        id: 4,
        title: 'Faster Payments',
        description: 'Payment methods used for UK transactions; funds usually available in seconds.'
      },
      {
        id: 5,
        title: 'SEPA',
        description:
          'Europe wide payment system. This allows European credit transfers with the funds made available on the receiving account the next working day.'
      }
    ]
  },
  {
    icon: '/contact-us/icons/guides.svg',
    title: 'Along with our innovative platform, Unlimit also provides a full suite of added value services',
    slug: 'added-services',
    description:
      'Along with our innovative platform, Unlimit also provides a full suite of added value services',
    optionTitle: 'Added Services',
    options: [
      {
        id: 1,
        title: 'Front line customer services support',
        description: 'focus on your core business and we support you and your customers where needed'
      },
      {
        id: 2,
        title: 'AML and Fraud Management',
        description:
          'latest and start art of the fraud and AML monitoring technology supported by service teams that are experts in their fields'
      },
      {
        id: 3,
        title: 'Customer Due Diligence',
        description: 'providing you with the latest in electronic KYC for seamless onboarding'
      },
      {
        id: 4,
        title: 'Professional client support',
        description: 'a team of experienced professional give you unbridled care and attention.'
      }
    ]
  },
  {
    icon: '/contact-us/icons/conversion.svg',
    title: 'Accept card payments quickly and easily with a simple, developer-first integration',
    slug: 'acquiring',
    description:
      'Thanks to our acquiring platform, we offer direct connections to international card brands and more than 1000 payment methods. It provides businesses with a unique 360° overview of payment insights, allowing them to analyze their performance and gain access to consumer data reports in a user-friendly dashboard.They are also able to manage all payments with one integration, one backend, and one contract.',
    optionTitle: 'Our solutions include',
    options: [
      {
        id: 1,
        title: 'Wide coverage and high approval ratios via all major card brands:',
        description: 'Visa, Mastercard, JCB, Unionpay International, Discover, Diners Club and others'
      },
      {
        id: 2,
        title: 'Installments, recurring or one-click payments',
        description: 'functionality alongside customized solutions for each particular business industry'
      },
      {
        id: 3,
        title: 'More than 1000 APMs',
        description: 'including unique local ones to cover Latin America, Africa or Asia'
      },
      {
        id: 4,
        title: 'Local acquiring options',
        description: 'and improved conversion rates in countries where Unlimit has a local presence'
      },
      {
        id: 4,
        title: 'Local acquiring options',
        description: 'and improved conversion rates in countries where Unlimit has a local presence'
      },
      {
        id: 5,
        title: 'All benefits',
        description: 'of cooperating directly with the Acquirer'
      },
      {
        id: 6,
        title: 'High-security standards',
        description: 'and built-in anti-fraud system with no extra fee'
      },
      {
        id: 7,
        title: 'Tailored pricing',
        description: 'with support of IC++ or blended models'
      },
      {
        id: 8,
        title: 'User-friendly merchant interface',
        description: 'with advanced analytical tools'
      }
    ]
  },
  {
    icon: '/contact-us/icons/recive-money.svg',
    title: 'We offer a fully customisable, end to end consumer and commercial card issuing program',
    slug: 'white-label',
    description:
      'Our solution manages all aspects of processing including compliance, risk management, inventory management, customer service, settlement, integration and settlement',
    optionTitle: 'Key features include',
    options: [
      {
        id: 1,
        title: 'Regulatory compliance',
        description: 'Visa, Mastercard, JCB, Unionpay International, Discover, Diners Club and others'
      },
      {
        id: 2,
        title: 'Innovative and latest in digital card technology',
        description: 'functionality alongside customized solutions for each particular business industry'
      },
      {
        id: 3,
        title: 'Principal member of Mastercard, Visa and China Union Pay',
        description: 'including unique local ones to cover Latin America, Africa or Asia'
      },
      {
        id: 4,
        title: 'Reporting and data delivery',
        description: 'and improved conversion rates in countries where Unlimit has a local presence'
      },
      {
        id: 4,
        title: 'Card inventory management and fulfilment',
        description: 'and improved conversion rates in countries where Unlimit has a local presence'
      },
      {
        id: 5,
        title:
          'Cardholder funds accessed at millions of retail locations and ATMs internationally, that accept MasterCard, Visa and Union Pay',
        description: 'of cooperating directly with the Acquirer'
      },
      {
        id: 6,
        title: 'Delivered via API’s',
        description: 'and built-in anti-fraud system with no extra fee'
      },
      {
        id: 7,
        title: 'Risk management and fraud monitoring',
        description: 'with support of IC++ or blended models'
      },
      {
        id: 8,
        title: 'Launch co-branded physical or virtual cards with zero hassle',
        description: 'with advanced analytical tools'
      }
    ]
  }
];

interface PaymentOption {
  id: string;
  title: string;
  description: string;
  icon: {
    main: string;
  };
}
interface PaymentSingleModuleProps {
  title: string;
}

const PaymentSingle = ({ title }: PaymentSingleModuleProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };

  const data = topics.find((item) => item.slug === title);
  if (!data) {
    return (
      <motion.section
        className='relative flex w-full flex-col items-center justify-start gap-8 overflow-hidden px-5 py-16 sm:px-10 lg:px-20'
        style={{
          background: 'linear-gradient(180deg, rgba(12, 17, 24, 1) 0%, rgba(29, 30, 45, 1) 100%)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className='relative flex w-full max-w-[1072px] flex-col items-center justify-start gap-8'>
          <motion.div
            className='flex w-full justify-start'
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <button
              onClick={() => window.history.back()}
              className='flex cursor-pointer items-center justify-center rounded-[42px] border border-gray-700 bg-gradient-to-r from-gray-900 to-gray-900 p-3 text-white transition-all hover:from-gray-800 hover:to-gray-800'
            >
              <Image src='/arrow-left0.svg' alt='Back' width={18} height={18} className='h-[18px] w-[18px]' />
            </button>
          </motion.div>
          <div className='gradient-text text-4xl text-white'>No Data Found!</div>
        </div>
      </motion.section>
    );
  }
  return (
    <motion.section
      className='relative flex w-full flex-col items-center justify-start gap-8 overflow-hidden px-5 py-16 pb-32 sm:px-10 lg:px-20'
      style={{
        background: 'linear-gradient(180deg, rgba(12, 17, 24, 1) 0%, rgba(29, 30, 45, 1) 100%)'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='relative flex w-full max-w-[1072px] flex-col items-start justify-start gap-8'>
        {/* Back button */}
        <div
          className='flex cursor-pointer items-center gap-2 text-white'
          onClick={() => window.history.back()}
        >
          <motion.div
            className='flex w-full justify-start'
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <button className='flex cursor-pointer items-center justify-center rounded-[42px] border border-gray-700 bg-gradient-to-r from-gray-900 to-gray-900 p-3 text-white transition-all hover:from-gray-800 hover:to-gray-800'>
              <Image src='/arrow-left0.svg' alt='Back' width={18} height={18} className='h-[18px] w-[18px]' />
            </button>
          </motion.div>
          <p className='text-xl'>/{data.slug}</p>
        </div>

        {/* Content */}
        <div className='relative flex w-full max-w-[1072px] flex-col items-start justify-start gap-8'>
          <motion.div
            className='flex w-full flex-col items-start justify-start gap-8'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className='m-auto flex w-full max-w-6xl flex-col items-center justify-center gap-4 text-center'>
              {/* Title with icon */}
              <motion.div
                className='flex flex-col items-center justify-center gap-4 sm:flex-row'
                whileHover={{ scale: 1.02 }}
              >
                <h1 className='bg-gradient-to-b from-gray-400 to-white bg-clip-text text-3xl font-medium tracking-tight text-transparent md:text-6xl'>
                  {data.title}
                </h1>
              </motion.div>

              {/* Supporting text */}
              <motion.p
                className='mt-5 max-w-3xl text-lg leading-relaxed tracking-tight text-gray-300'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {data.description}
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* features */}
        <motion.div
          className='mt-20 flex flex-col items-start justify-start gap-4 sm:flex-row'
          whileHover={{ scale: 1.02 }}
        >
          <h1 className='gradient-text text-3xl font-medium tracking-tight text-transparent md:text-5xl'>
            {data.optionTitle}
          </h1>
        </motion.div>
        <motion.div
          className='mt-2 grid grid-cols-1 items-start justify-start gap-8 self-stretch md:grid-cols-2'
          variants={containerVariants}
        >
          {data.options.map((option) => (
            <motion.div
              key={option.id}
              className='relative flex h-auto w-full flex-col items-start justify-start gap-6 rounded-[32px] p-12 md:h-56 md:flex-row'
              style={{
                background: 'linear-gradient(135deg, rgba(63, 66, 77, 1) 0%, rgba(18, 20, 28, 1) 100%)'
              }}
              variants={itemVariants}
              whileHover='hover'
            >
              {/* Content */}
              <div className='flex flex-1 flex-col items-start justify-start gap-3'>
                <h3 className='self-stretch text-left text-2xl leading-tight font-medium tracking-[-1px] text-white'>
                  {option.title}
                </h3>
                <p className='self-stretch text-left text-lg leading-normal tracking-[-0.25px] text-gray-300'>
                  {option.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PaymentSingle;
