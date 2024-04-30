import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// const options = {
//     method: 'GET',
//     url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
//     params: {
//       url: 'https://time.com/6266679/musk-ai-open-letter/',
//       length: '3'
//     },
//     headers: {
//       'X-RapidAPI-Key': '964adcc250mshd090943a0ee3c80p13027cjsnee9c2c4e38ac',
//       'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
//     }
//   };
const rapidKey = process.env.REACT_APP_VITE_RAPID_API_ARTICLE_KEY;
console.log(rapidKey)

export const articleApi = createApi({
    reducerPath:'articleApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key', process.env.REACT_APP_VITE_RAPID_API_ARTICLE_KEY);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');
            return headers;
        },
    }),
    endpoints:(builder)=>({
        getSummary:builder.query({
            query:(params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length3`
        })
    })

})

export const {useLazyGetSummaryQuery} = articleApi