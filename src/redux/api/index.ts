import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../stores';

const baseQuery = fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_API}`,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).user.token;
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },
    timeout: 5000,
});

export const appApi = createApi({
    baseQuery: baseQuery,
    endpoints: () => ({}),
});

export const apiWithTag = appApi.enhanceEndpoints({ addTagTypes: ['Post'] });
