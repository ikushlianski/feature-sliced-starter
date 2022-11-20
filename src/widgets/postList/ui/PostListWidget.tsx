import { postMapper } from "entities/post/mappers";
import { useListPostsQuery } from "features/listPosts";
import { PostsTable } from "features/listPosts/ui";
import React from "react";

// widgets take ready-made components from the `feature`/`entity` layers and display them as a single whole
export const PostListWidget = () => {
  const { data, isLoading } = useListPostsQuery(undefined, {
    selectFromResult: ({ data, ...rest }) => {
      return {
        data: data?.map(postMapper.dtoToUi),
        ...rest,
      };
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Posts not found...</div>;
  }

  return <PostsTable data={data} />;
};
