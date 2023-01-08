import React, { FC } from "react";

import { PostsContainer } from "./PostContainer";

import "../../static/styles/main-page-container.scss";

export const PostPage: FC = () => {
  return (
    <div className={"main-wrapper"}>
      <div className={"main-wrapper--container"}>
        <PostsContainer />
      </div>
    </div>
  );
};
