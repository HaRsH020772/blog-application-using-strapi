import React from 'react';
import qs from 'qs';
import { useRouter } from 'next/router';
import { FaDirections } from 'react-icons/fa';

interface IProptype
{
  page: number;
  pageCount: number;
  redirectUrl?:string;
}

const Pagination = ({page, pageCount, redirectUrl='/'}: IProptype) => {

  type TDirection = 1 | -1;
  const router = useRouter();

  const isNextDisabled = ():boolean => page >= pageCount;
  
  const isPreviousDisabled = ():boolean => page <= 1;

  const handlePaginate = async (direction: TDirection) => {

    if(direction == 1 && isNextDisabled())
      return;

    if(direction == -1 && isPreviousDisabled())
      return;
    
    const queryString = qs.stringify({
      ...router.query,
      page: page + direction
    });

    router.push(`${redirectUrl}?${queryString}`);

  }




  return (
    <div className='flex justify-center py-5 space-x-10'>
      <button onClick={() => handlePaginate(-1)} className={`bg-blue-600 px-4 py-2 text-white font-semibold rounded-md ${isPreviousDisabled() ? 'disabled' : ''}`}>Previous</button>
      <button onClick={() => handlePaginate(1)} className={`bg-blue-600 px-4 py-2 text-white font-semibold rounded-md ${isNextDisabled() ? 'disabled' : ''}`}>Next</button>
    </div>
  )
}

export default Pagination
