import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { appApi } from '.';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { ListParamsInterface } from '~/interfaces/listParams';
import { Response } from '~/interfaces/response';
import { PostInterface } from '~/interfaces/post';

const getPostsApi = (builder: EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, any, 'api'>) =>
    builder.query<any, ListParamsInterface>({
        query: ({ filter, limit, page }) => ({
            url: 'posts',
            method: 'GET',
            params: { filter, limit, page },
        }),
        providesTags: ['Post'],
    });

const getPostDetailApi = (builder: EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, any, 'api'>) =>
    builder.query<PostInterface, { id: string }>({
        query: ({ id }) => ({
            url: `posts/${id}`,
            method: 'GET',
        }),
        providesTags: ['Post'],
    });

export const postApi = appApi.injectEndpoints({
    endpoints: (builder) => ({
        getPosts: getPostsApi(builder),
        getPostDetail: getPostDetailApi(builder),
    }),
    overrideExisting: false,
});

export const { useGetPostsQuery, useGetPostDetailQuery } = postApi;
