import Link from 'next/link';
import React from 'react';
import { IArticle } from '../types';
import Image from 'next/image';

interface IPropType
{
    article: IArticle;
}

const Blogcardimage = ({article}: IPropType) => {
  return (
    <div className='bg-gradient-to-r from-violet-500 to-violet-900 rounded-md flex items-center h-48 justify-around'>

        <Link href='/'>
            <span className='text-2xl text-white font-semibold after:content-[""] after:block after:w-20 after:h-1 after:rounded-md after:mt-2 after:bg-violet-400 cursor-pointer'>{article.attributes.Title}</span>
        </Link>

        <Image src={'/posterLogo.svg'} height={80} width={80} alt="Sorry for the inconveinance" />
      
    </div>
  )
}

export default Blogcardimage;
