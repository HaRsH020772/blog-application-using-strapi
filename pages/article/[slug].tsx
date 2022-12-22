import { AxiosResponse } from 'axios';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import qs from 'qs';
import React from 'react'
import { fetchArticleBySlug } from '../../apiTransactions';
import { IArticle, ICollectionResponse } from '../../types';
import Image from 'next/image';
import { formatDate } from '../../utils';

interface IPropType {
    article: IArticle;
    notFound?: boolean;
}

const slug = ({ article, notFound = false }: IPropType) => {
    return (
        <>
            <Head>
                <title>Coders Blog</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <div className='my-12 px-12 grid lg:grid-cols-3 gap-12'>

                <div className='left col-span-2'>
                    <h1 className='font-semibold text-2xl'>{article.attributes.Title}</h1>
                    
                    <div className='flex items-center py-4 my-2'>

                        <div>
                            <Image src={`http://127.0.0.1:1337${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`} height={50} width={50} alt='Sorry for the inconveinance' className='rounded-md' />
                        </div>

                        <span className='font-semibold ml-2 text-sm'>
                            {article.attributes.author.data.attributes.firstname + " " + article.attributes.author.data.attributes.lastname} on &nbsp;

                            <span className='font-medium'>{formatDate(article.attributes.createdAt)}</span>

                        </span>

                    </div>

                    <div className=''>
                        <Image className='rounded-md mb-4' src={`http://127.0.0.1:1337${article.attributes.Image.data.attributes.url}`} alt={article.attributes.Title} width={750} height={100} />
                        <div className='w-4/5'>{article.attributes.body}</div>
                    </div>


                </div>


                <div className='right'>Right</div>

            </div>

        </>
    )
}

export default slug;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

    const queryString = qs.stringify({
        populate: ['Image', 'author.avatar'],
        filters: {
            Slug: {
                $eq: query.slug,
            }
        }
    });

    const { data: articles }:
        AxiosResponse<ICollectionResponse<IArticle[]>> = await fetchArticleBySlug(queryString);

    if (articles.data.length === 0)
        return {
            notFound: true,
        }

    return {
        props: {
            article: articles.data[0],
        }
    }

}