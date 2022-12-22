import React from 'react';
import { IArticle } from '../types';
import Blogcard from './Blogcard';
import Blogcardimage from './Blogcardimage';

interface IPropType
{
    articles: IArticle[];
}

const ArticleList = ({articles}:IPropType) => {
  return (
    <div className='grid lg:grid-cols-2 grid-gap gap-16 mt-16 px-12'>
      {articles.map((article, index) => (index === 1) ? <Blogcardimage key={article.id} article={article}/> : <Blogcard key={article.id} article={article} />)}
    </div>
  )
}

export default ArticleList;
