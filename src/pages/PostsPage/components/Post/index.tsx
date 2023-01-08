import React, { FC } from "react";

import { MyButton } from "../../../../UI/MyButton";

import { PostListType } from "../../types";

import "./styles.scss";
import { Paper } from "@mui/material";

interface IProps {
  post: PostListType;
  removePost: (ID: string | number) => void;
}

export const Post: FC<IProps> = (props) => {
  const { post, removePost } = props;
  const handleRemove = () => {
    removePost(post.id);
  };
  return (
    <Paper className={"post"} key={post.id} elevation={3}>
      <div className={"post--item"}>
        <div>
          <strong>Title: </strong>
          {post.title}
        </div>
        <div>
          <strong>Body: </strong>
          {post.body}
        </div>
      </div>
      <div className={"post--button"}>
        <MyButton
          variant={"outlined"}
          color={"primary"}
          title={"Remove"}
          method={handleRemove}
          id={"post-page-button-remove"}
        />
      </div>
    </Paper>
  );
};
