import React from "react";
import { PostListItem } from "./postListItem";
import { IPostListItemUi } from "entities/post/types";

interface Props {
  data: IPostListItemUi[];
}

export const PostsTable: React.FC<Props> = ({ data }) => {
  return (
    <table>
      <tbody>
        {data?.map(project => (
          <PostListItem project={project} key={project.title} />
        ))}
      </tbody>
    </table>
  );
};
