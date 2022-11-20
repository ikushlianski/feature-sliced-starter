import { postsApi } from "entities/post/api";
import { IPostDto } from "entities/post/types";

export const listPostsApi = postsApi.injectEndpoints({
  endpoints: build => ({
    listPosts: build.query<IPostDto[], undefined>({
      // example: going to JSONPlaceholder API
      query: () => "posts",
    }),
  }),
  overrideExisting: false,
});

export const { useListPostsQuery } = listPostsApi;
