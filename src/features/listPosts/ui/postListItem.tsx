import React from "react";
import { IPostListItemUi } from "entities/post/types";

interface Props {
  project: IPostListItemUi;
}

export const PostListItem: React.FC<Props> = ({ project }) => {
  return (
    <tr>
      <td>{project.title}</td>
    </tr>
  );
};
