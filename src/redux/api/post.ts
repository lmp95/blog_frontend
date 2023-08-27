import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { appApi } from '.';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { ListParamsInterface } from '~/interfaces/listParams';
import { Response } from '~/interfaces/response';
import { PostInterface } from '~/interfaces/post';

const getPostsApi = (builder: EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, any, 'api'>) =>
    builder.query<Response, ListParamsInterface>({
        query: ({ limit, page, search }) => ({
            url: 'posts',
            method: 'GET',
            params: { limit, page, search },
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

const createPostApi = (builder: EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, any, 'api'>) =>
    builder.mutation<PostInterface, Partial<PostInterface>>({
        query: (body) => ({
            url: 'posts',
            method: 'POST',
            body,
        }),
        invalidatesTags: ['Post'],
    });

const updatePostApi = (builder: EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, any, 'api'>) =>
    builder.mutation<PostInterface, { id: string; body: Partial<PostInterface> }>({
        query: ({ id, body }) => ({
            url: `posts/${id}`,
            method: 'PUT',
            body,
        }),
        invalidatesTags: ['Post'],
    });

const getPostsByAuthorApi = (builder: EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, any, 'api'>) =>
    builder.query<Response, { authorId: string; limit: number; page: number }>({
        query: ({ authorId, limit, page }) => ({
            url: `posts/author/${authorId}`,
            method: 'GET',
            params: { limit, page },
        }),
        providesTags: ['Post'],
    });

const deletePostApi = (builder: EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, any, 'api'>) =>
    builder.mutation<PostInterface, { id: string }>({
        query: ({ id }) => ({
            url: `posts/${id}`,
            method: 'DELETE',
        }),
        invalidatesTags: ['Post'],
    });

export const postApi = appApi.injectEndpoints({
    endpoints: (builder) => ({
        getPosts: getPostsApi(builder),
        getPostDetail: getPostDetailApi(builder),
        addNewPost: createPostApi(builder),
        updatePost: updatePostApi(builder),
        getPostsByAuthor: getPostsByAuthorApi(builder),
        deletePost: deletePostApi(builder),
    }),
    overrideExisting: false,
});

export const { useGetPostsQuery, useDeletePostMutation, useGetPostsByAuthorQuery, useGetPostDetailQuery, useAddNewPostMutation, useUpdatePostMutation } =
    postApi;
