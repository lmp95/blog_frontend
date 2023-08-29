import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { appApi } from '.';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

const loginApi = (builder: EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, never, 'api'>) =>
    builder.mutation({
        query: (user: any) => ({
            url: 'login',
            method: 'POST',
            body: user,
        }),
    });

const signUpApi = (builder: EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, never, 'api'>) =>
    builder.mutation({
        query: (user: any) => ({
            url: 'register',
            method: 'POST',
            body: user,
        }),
    });

export const authApi = appApi.injectEndpoints({
    endpoints: (builder) => ({
        login: loginApi(builder),
        signUp: signUpApi(builder),
    }),
    overrideExisting: false,
});

export const { useLoginMutation, useSignUpMutation } = authApi;
