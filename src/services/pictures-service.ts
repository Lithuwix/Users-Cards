import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IPictures} from "../models/IPictures";

export const picturesAPI = createApi({
    reducerPath: 'picturesAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dog.ceo/api'}),
    endpoints: (build) => ({
        fetchAllPictures: build.query<IPictures, number>({
            query: (limit: number) => ({
                url: `/breeds/image/random/${limit}`
            })
        })
    })
})