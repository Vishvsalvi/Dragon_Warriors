import React from 'react'
import Link from 'next/link'
export default function Footer() {
  return (
    <div>
        <footer className="bg-neutral-950">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="flex justify-center sm:justify-start">
        <img className="w-24" src="/Images/tkd-logo-1.png" alt="TKD Logo" />
      </div>

      <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
        Copyright &copy; 2022. All rights reserved.
        <br />
        <span className='text-white' >Made by <Link target='_blank' className='text-red-600' href="https://x.com/SalviVishv" >Vishv Salvi</Link> </span>
      </p>
    </div>
  </div>
</footer>

    </div>
  )
}
