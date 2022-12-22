import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex justify-between shadow-md py-2 px-6'>

      <div className='firstContainer  flex items-center space-x-4'>

        <Link href='/'>
          <Image src='/logo.svg' alt='Sorry for the inconveinance' width={50} height={50} />
        </Link>
        <span className='font-bold tracking-wider font-sans text-md'>Coders Blog</span>

      </div>
      
      <ul className='secondContainer flex items-center space-x-8  font-semibold'>
        <li>
          <Link href='/' className=''>Products</Link>
        </li>
        <li>
          <Link href='/' className=''>Pricing</Link>
        </li>
        <li>
          <Link href='/' className=''>Docs</Link>
        </li>
        <li>
          <Link href='/' className=''>Company</Link>
        </li>
      </ul>

      <div className=' flex items-center space-x-5 font-semibold'>
        <Link href='/'>Log In</Link>
        <Link href='/'>Sign Up</Link>
      </div>

    </nav>
  )
}

export default Navbar;
