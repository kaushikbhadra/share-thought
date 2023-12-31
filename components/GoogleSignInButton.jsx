'use client'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

const GoogleSignInButton = () => {
  return (
    <button
      className='w-full inline-flex justify-center items-center rounded-lg border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300 py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors hover:border-gray-400 dark:hover:border-gray-100 active:bg-gray-100 dark:active:bg-gray-300 active:text-gray-700/80 dark:active:text-gray-400/80'
      onClick={() => signIn('google', { callbackUrl: '/' })}
    >
      <Image
        src='/assets/images/google.svg'
        alt='google'
        width={3}
        height={3}
        className='mr-3 h-3 w-3'
      />
      Continue with Google
    </button>
  )
}

export default GoogleSignInButton
