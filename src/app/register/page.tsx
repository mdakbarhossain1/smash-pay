'use client';

import Link from 'next/link';
import { BsCheckCircleFill } from 'react-icons/bs';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

export default function SignupPage() {
  return (
    <div className='relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-4 text-white'>
      {/* Background grid pattern */}
      <div className='absolute inset-0 z-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] bg-[size:40px_40px] opacity-10' />

      <div className='relative z-10 flex w-full max-w-7xl flex-col items-center justify-center gap-12 lg:flex-row'>
        {/* Left Panel - Signup Form */}
        <div className='w-full max-w-lg rounded-xl border border-[#1f1f1f] bg-[#141414] p-8 shadow-lg'>
          <div className='mb-8 text-center'>
            <h1 className='text-3xl font-semibold'>Create account.</h1>
          </div>

          <form className='space-y-4'>
            <div className='flex gap-4'>
              <input
                type='text'
                placeholder='Full name'
                className='w-1/2 rounded-md border border-gray-700 bg-black px-4 py-3 text-sm focus:ring-2 focus:ring-[#c3f53c] focus:outline-none'
              />
              <input
                type='email'
                placeholder='Email address'
                className='w-1/2 rounded-md border border-gray-700 bg-black px-4 py-3 text-sm focus:ring-2 focus:ring-[#c3f53c] focus:outline-none'
              />
            </div>

            <input
              type='password'
              placeholder='Password'
              className='w-full rounded-md border border-gray-700 bg-black px-4 py-3 text-sm focus:ring-2 focus:ring-[#c3f53c] focus:outline-none'
            />

            <input
              type='password'
              placeholder='Repeat password'
              className='w-full rounded-md border border-gray-700 bg-black px-4 py-3 text-sm focus:ring-2 focus:ring-[#c3f53c] focus:outline-none'
            />

            <button
              type='submit'
              className='w-full rounded-full bg-[#c3f53c] py-3 font-semibold text-black transition hover:bg-lime-300'
            >
              Create account
            </button>
          </form>

          <div className='mt-4 flex items-start gap-2 text-xs text-gray-300'>
            <BsCheckCircleFill className='mt-[2px] text-[#c3f53c]' />
            <p>
              I have read and accept the Darkweb App Ltd.{' '}
              <a href='/terms-policies' target='_blank' className='text-[#c3f53c] hover:underline'>
                Terms & Conditions
              </a>{' '}
              and{' '}
              <a
                href='/terms-policies?scrollTo=privacy'
                target='_blank'
                className='text-[#c3f53c] hover:underline'
              >
                Privacy Policy
              </a>
            </p>
          </div>

          <div className='my-6 border-t border-gray-700' />

          <div className='space-y-4'>
            <button className='flex w-full items-center justify-center gap-3 rounded-full border border-gray-700 bg-[#1a1a1a] py-3 transition hover:bg-[#222]'>
              <FaGoogle className='text-white' />
              <span className='text-sm'>Sign in with Google</span>
            </button>

            <button className='flex w-full items-center justify-center gap-3 rounded-full border border-gray-700 bg-[#1a1a1a] py-3 transition hover:bg-[#222]'>
              <FaFacebookF className='text-white' />
              <span className='text-sm'>Sign in with Facebook</span>
            </button>
          </div>

          <div className='mt-6 text-center text-sm'>
            Already have an account?{' '}
            <Link href='/login' className='text-[#c3f53c] hover:underline'>
              Sign in
            </Link>
          </div>
        </div>

        {/* Right Panel - Mockup Image */}
        {/* <div className='absolute -right-15 hidden lg:block'>
          <img src='/auth/signup.png' alt='App Preview' className='max-w-2xl drop-shadow-2xl' />
        </div> */}
      </div>
    </div>
  );
}
