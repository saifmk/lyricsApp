import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const shazamCoreApi= createApi({
    reducerPath:'shazamCoreApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key','8e1678ff02msh68200a323169f9ap1f99f5jsn7b2cb8ca6283')
            return headers;
        },
    }),
    endpoints:(bulider)=>({
getTopCharts:bulider.query({query: ()=> '/charts/world'}),
getSongsByGenre:bulider.query({query: (genre)=>`/charts/genre-world?genre_code=${genre}`}),      
getSongDetails: bulider.query({query: (songid)=> `/tracks/details?track_id=${songid}` }),
getSongRelated: bulider.query({query: (songid)=> `/tracks/related?track_id=${songid}`}),
getArtistDetails: bulider.query({query:(artistId)=>`/artists/details?artist_id=${artistId}`}),
getSongsByCountry: bulider.query({query: (countryCode)=>`/charts/country?country_code=${countryCode}`}),
getSongsBySearch: bulider.query({query: (searchTerm) =>`/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`})
    }),
});

export const {useGetTopChartsQuery,useGetSongDetailsQuery,useGetSongRelatedQuery,useGetArtistDetailsQuery,useGetSongsByCountryQuery,useGetSongsByGenreQuery,useGetSongsBySearchQuery} =shazamCoreApi