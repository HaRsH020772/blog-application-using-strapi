import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='font-sans py-2 px-6 border fixed bottom-0 w-full'>

      <div className='flex justify-between items-center md:flex-row flex-col'>

        <div className='firstContainer flex items-center'>

          <Link href='/'>
            <Image src='/logo.svg' alt='Sorry for the inconveinance' width={40} height={40} />
          </Link>
          <span className='font-bold tracking-wider pl-2'>Coders Blog</span>
            <hr className='w-8 border-t-1 border-slate-300 rotate-90 ' />
          <span className='pl-2'>© 2022 Coders Blog - All Rights Reserved</span>

        </div>

        <div className='flex space-x-5 items-center'>
          <FaFacebookF/>
          <FaTwitter/>
          <FaInstagram/>
          <FaLinkedinIn/>
        </div>

      </div>

    </footer>
  )
}

export default Footer;
