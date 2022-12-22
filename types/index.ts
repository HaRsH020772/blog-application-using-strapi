//? This is a category dto
//* Related to category DTO both ICategory & ICategoryAttribute are the sub types of T and ICategoryAttribute is part of ICategory.
export interface ICategory 
{
    id: number;
    attributes: ICategoryAttribute;
}

export interface ICategoryAttribute
{
    Title: string;
    Slug: string;
}

//? This is a article dto 

export interface IImageData
{
    data:{
        attributes:{
            url: string;
            formats:{
                small: {
                    url:string;
                };
            };
        };
    };
};

export interface IAuthor
{
    data: {
        attributes: {
            firstname: string;
            lastname: string;
            avatar: {
                data: {
                    attributes: {
                        formats: {
                            thumbnail: {
                                url: string;
                            };
                        };
                    };
                };
            };
        };
    };
};

export interface IArticleAttribute
{
    Title: string;
    body: string;
    shortDescription: string;
    Slug: string;
    Image: IImageData;
    createdAt: string;
    author: IAuthor;
}

export interface IArticle {
    id: number;
    attributes: IArticleAttribute;
}

//* This is a common format for both articles and categories

//* This IPagination,IResourceMeta,ICollectionResponse are used to define the main data fetched from the api, IPagination & IResourceMeta are the parts of ICollectionResponse.

export interface IPagination
{
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface IResourceMeta
{
    pagination: IPagination;
}

export interface ICollectionResponse<T> {
    data: T;
    meta: IResourceMeta;
}

//* Interface for the options for fetching process
export interface IQueryOptions {
    filters:any;
    sort:any;
    populate:any;
    pagination:{
        page: number;
        pageSize: number;
    };
}