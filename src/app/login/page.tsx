'use client';

import Link from 'next/link';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

export default function SignInPage() {
  return (
    <div className='relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black text-white'>
      <div className='absolute inset-0 z-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] bg-[size:40px_40px] opacity-10' />

      <div className='z-10 w-full max-w-md rounded-xl border border-[#1f1f1f] bg-[#141414] p-8 shadow-lg'>
        <div className='mb-8 text-center'>
          <h1 className='text-3xl font-semibold'>Sign in.</h1>
        </div>

        <form className='space-y-5'>
          <div>
            <input
              type='email'
              placeholder='Email address'
              className='w-full rounded-md border border-gray-700 bg-black px-4 py-3 text-sm focus:ring-2 focus:ring-[#c3f53c] focus:outline-none'
            />
          </div>

          <div>
            <input
              type='password'
              placeholder='Password'
              className='w-full rounded-md border border-gray-700 bg-black px-4 py-3 text-sm focus:ring-2 focus:ring-[#c3f53c] focus:outline-none'
            />
          </div>

          <div className='text-right text-sm'>
            <a href='#' className='text-[#c3f53c] hover:underline'>
              Forgot password?
            </a>
          </div>

          <button
            type='submit'
            className='w-full rounded-full bg-[#c3f53c] py-3 font-semibold text-black transition hover:bg-lime-300'
          >
            Sign in
          </button>
        </form>

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
          Don’t have an account?{' '}
          <Link href='/register' className='text-[#c3f53c] hover:underline'>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
