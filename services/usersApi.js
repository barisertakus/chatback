import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../environment";

const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),

  endpoints: (builder) => ({
    signupUser: builder.mutation({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
    }),

    loginUser: builder.mutation({
      query: (user) => ({
        url: "/users/login",
        method: "POST",
        body: user,
      }),
    }),

    logoutUser: builder.mutation({
      query: (paylaod) => ({
        url: "/logout",
        method: "DELETE",
        body: paylaod,
      }),
    }),
  }),
});

export const {
  useSignupUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = usersApi;

export default usersApi;
