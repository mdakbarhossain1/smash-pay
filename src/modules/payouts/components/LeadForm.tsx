'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface FormData {
  last_name: string;
  corporate_email: string;
  phone: string;
  website: string;
  region: string;
  product: string;
  transaction_size: string;
  description: string;
  subscribe: boolean;
}

const LeadForm = () => {
  const [formData, setFormData] = useState<FormData>({
    last_name: '',
    corporate_email: '',
    phone: '',
    website: '',
    region: '',
    product: '',
    transaction_size: '',
    description: '',
    subscribe: false
  });
  const [charCount, setCharCount] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    region: false,
    product: false,
    transaction_size: false
  });
  const dropdownRefs = {
    region: useRef<HTMLDivElement>(null),
    product: useRef<HTMLDivElement>(null),
    transaction_size: useRef<HTMLDivElement>(null)
  };

  const regions = [
    'Europe',
    'Asia Pacific',
    'United Kingdom',
    'North America',
    'Brazil',
    'Mexico',
    'Latin America',
    'Africa',
    'Middle East'
  ];

  const products = [
    { value: 'Acquiring', label: 'Card Payment Processing' },
    { value: 'APM', label: 'Payment methods' },
    { value: 'IBAN account', label: 'Multi-currency accounts' },
    { value: 'BaaS partner', label: 'SMASHPAY Banking as a Service (BaaS)' },
    { value: 'SMASHPAY Crypto', label: 'SMASHPAY Crypto' }
  ];

  const transactionSizes = [
    '<10,000/month',
    '10,000 - 50,000/month',
    '50,000 - 100,000/month',
    '100,000 - 200,000/month',
    '200,000 - 500,000/month',
    '500,000 - 1 million/month',
    '1 million+'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'description') {
      setCharCount(value.length);
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSelectChange = (field: keyof typeof isDropdownOpen, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setIsDropdownOpen((prev) => ({ ...prev, [field]: false }));
  };

  const toggleDropdown = (field: keyof typeof isDropdownOpen) => {
    setIsDropdownOpen((prev) => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      Object.entries(dropdownRefs).forEach(([key, ref]) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          setIsDropdownOpen((prev) => ({ ...prev, [key]: false }));
        }
      });
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className='bg-clr-14 w-full px-4 py-12 sm:px-6 lg:px-8'>
      <motion.div
        className='mx-auto max-w-3xl text-white'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <header className='mb-8'>
          <motion.h2 className='mb-8 text-center text-3xl font-bold md:mb-12 md:text-4xl lg:text-5xl'>
            Cross-border payouts simplified with SMASHPAY
          </motion.h2>
        </header>

        <div className='rounded-lg bg-white/5 shadow-sm backdrop-blur'>
          <form onSubmit={handleSubmit} className='space-y-6 p-6 text-white'>
            <div className='space-y-4'>
              {/* Full Name */}
              <div className='form-input'>
                <label className='block text-sm font-medium text-white'>
                  Full name
                  <input
                    className='bg-clr-14 mt-1 block w-full rounded-md border border-gray-600 p-3 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
                    type='text'
                    name='last_name'
                    value={formData.last_name}
                    onChange={handleChange}
                    maxLength={80}
                  />
                </label>
              </div>

              {/* Corporate Email */}
              <div className='form-input'>
                <label className='block text-sm font-medium text-white'>
                  Corporate email
                  <input
                    className='bg-clr-14 mt-1 block w-full rounded-md border border-gray-600 p-3 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
                    type='email'
                    name='corporate_email'
                    value={formData.corporate_email}
                    onChange={handleChange}
                    maxLength={80}
                  />
                </label>
              </div>

              {/* Phone */}
              <div className='form-input'>
                <label className='block text-sm font-medium text-white'>
                  Phone
                  <input
                    className='bg-clr-14 mt-1 block w-full rounded-md border border-gray-600 p-3 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={40}
                  />
                </label>
              </div>

              {/* Website */}
              <div className='form-input'>
                <label className='block text-sm font-medium text-white'>
                  Company website
                  <input
                    className='bg-clr-14 mt-1 block w-full rounded-md border border-gray-600 p-3 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
                    type='url'
                    name='website'
                    value={formData.website}
                    onChange={handleChange}
                    maxLength={255}
                  />
                </label>
              </div>

              {/* Dropdowns & others stay as-is, but ensure their text colors are adapted */}
              {/* Example for dropdown text color change */}
              <div className='form-select relative' ref={dropdownRefs.region}>
                <button
                  type='button'
                  className='bg-clr-14 mt-1 flex w-full items-center justify-between rounded-md border border-gray-600 p-3 text-left text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
                  onClick={() => toggleDropdown('region')}
                >
                  <span className={`${formData.region ? 'text-white' : 'text-gray-400'}`}>
                    {formData.region || 'My company is registered in'}
                  </span>
                  <svg
                    className={`h-5 w-5 text-white transition-transform ${isDropdownOpen.region ? 'rotate-180 transform' : ''}`}
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M12 14.1136L5.08637 7.35018C4.60909 6.88327 3.83525 6.88327 3.35796 7.35018C2.88068 7.8171 2.88068 8.57411 3.35796 9.04103L11.1358 16.6498C11.6131 17.1167 12.3869 17.1167 12.8642 16.6498L20.642 9.04103C21.1193 8.57411 21.1193 7.8171 20.642 7.35018C20.1647 6.88327 19.3909 6.88327 18.9136 7.35018L12 14.1136Z'
                      fill='currentColor'
                    />
                  </svg>
                </button>
                {/* Dropdown list styling remains */}
              </div>

              {/* Message */}
              <div className='form-input'>
                <label className='block text-sm font-medium text-white'>
                  Message
                  <textarea
                    className='bg-clr-14 mt-1 block min-h-[50px] w-full rounded-md border border-gray-600 p-3 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
                    name='description'
                    value={formData.description}
                    onChange={handleChange}
                    maxLength={1000}
                    style={{ overflowX: 'hidden', overflowWrap: 'break-word' }}
                  />
                  <div className='text-right text-xs text-gray-400'>{charCount}/1000</div>
                </label>
              </div>
            </div>

            {/* Checkbox */}
            <div className='space-y-6'>
              <label className='flex items-start text-white'>
                <input
                  type='checkbox'
                  className='mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500'
                  name='subscribe'
                  checked={formData.subscribe}
                  onChange={handleCheckboxChange}
                />
                <span className='ml-3 text-sm'>
                  Yes, I would like to receive marketing communications and advertisements regarding SMASHPAY
                  products, services and events in accordance with SMASHPAY's Privacy Notices available at our{' '}
                  <a
                    className='text-blue-400 hover:underline'
                    title='Follow link'
                    target='_blank'
                    href='https://www.SMASHPAY.com/privacy-centre/'
                    rel='nofollow noopener'
                  >
                    Privacy Centre
                  </a>
                  . I can unsubscribe at any later time.
                </span>
              </label>

              {/* Submit Button */}
              <motion.button
                type='submit'
                className='flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-b from-[#151820] to-[#010101] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className='mr-2'>Submit</span>
                <svg className='h-5 w-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M16.2929 17.7071L6.29289 7.70712L7.70711 6.29291L17.7071 16.2929L16.2929 17.7071Z'
                    fill='currentColor'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M14.5858 16L6.29289 7.70712L7.70711 6.29291L16 14.5858V8.00002C16 7.44773 16.4477 7.00001 17 7.00001C17.5523 7.00001 18 7.44773 18 8.00002V17C18 17.5523 17.5523 18 17 18H8C7.44771 18 7 17.5523 7 17C7 16.4477 7.44771 16 8 16H14.5858Z'
                    fill='currentColor'
                  />
                </svg>
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default LeadForm;
