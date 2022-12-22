import Link from 'next/link';
import React, { ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { ICategory } from '../types';
import {FaSearch} from 'react-icons/fa';


interface IPropType {
    categories: ICategory[];
    handleOnSearch: (query: string) => void;
}

const Tabs = ({ categories, handleOnSearch }: IPropType) => {

    const router = useRouter();

    const isActive = (category:ICategory) => {
        return category.attributes.Slug === router.query.category;
    }

    return (
        <div className='px-12 border-b-2 my-10 flex items-center justify-between'>
            <ul className='flex space-x-7 font-bold'>
            
                <li className={`border-b-4 pb-4 ` + `${router.pathname === '/' ? 'text-blue-700 border-blue-700' : ''}`}>
                    <Link href='/'>Recent</Link>
                </li>
                {categories.map(category => <li key={category.id} className={`border-b-4 pb-4 ` + `${isActive(category) ? 'text-blue-700 border-blue-700' : ''}`}>
                    <Link href={`/category/${category.attributes.Slug}`}>{category.attributes.Title}</Link>
                </li>)}

            </ul>

            <div className='flex items-center space-x-4'>

                <FaSearch/>
                <input type="text" className='border-b-2 outline-none' placeholder='Search' onChange={(e) => handleOnSearch(e.target.value)} />

            </div>


        </div>
    )
}

export default Tabs;
