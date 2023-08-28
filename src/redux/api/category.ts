import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { appApi } from '.';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

const getCategoriesApi = (builder: EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, any, 'api'>) =>
    builder.query<any, void>({
        query: () => ({
            url: 'categories',
            method: 'GET',
        }),
        providesTags: ['Category'],
    });

export const categoryApi = appApi.injectEndpoints({
    endpoints: (builder) => ({
        getCategories: getCategoriesApi(builder),
    }),
    overrideExisting: false,
});

export const { useGetCategoriesQuery } = categoryApi;
