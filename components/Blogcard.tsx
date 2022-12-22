import Link from 'next/link';
import React from 'react'
import { IArticle } from '../types'
import Image from 'next/image';
import { formatDate } from '../utils';

interface IPropType {
    article: IArticle;
}

const Blogcard = ({ article }: IPropType) => {

    return (
        <div className='flex flex-col'>
            <Link href={`/article/${article.attributes.Slug}`}>
                <h1 className='text-black font-extrabold tracking-wide'>
                    {article.attributes.Title}
                </h1>
            </Link>

            <div className='flex items-center py-4'>

                <div>
                    <Image src={`http://127.0.0.1:1337${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`} height={50} width={50} alt='Sorry for the inconveinance' className='rounded-md' />
                </div>

                <span className='font-semibold ml-2 text-sm'>
                    {article.attributes.author.data.attributes.firstname + " " + article.attributes.author.data.attributes.lastname} on &nbsp;

                    <span className='font-medium'>{formatDate(article.attributes.createdAt)}</span>
                    
                </span>

            </div>

            <div className="shortDescription">
                {article.attributes.shortDescription.length > 200 ? article.attributes.shortDescription.slice(0,150).concat('...') : article.attributes.shortDescription}
            </div>


        </div>
    )
}

export default Blogcard
