export interface NewsData {
    status: string;
    totalResults?: number;
    articles?: Article[];
    sources?: Source[];
}

export interface NewsDataError {
    status: string;
    code: string;
    message: string;
}

export type Article = {
    source: {
        id: string;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
};

export type Source = {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
};
