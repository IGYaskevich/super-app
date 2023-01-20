import React, { FC } from "react";

import { Post } from "../Post";

import { PostListType } from "../../types";

import "./styles.scss";
import { MyPagination } from "../../../../components/UI/MyPagination";

interface IProps {
  countPages: number;
  page: number;
  postList: Array<PostListType>;
  removePost: (ID: string | number) => void;
  choosePaginatePage: (page: number) => void;
}

export const PostList: FC<IProps> = (props) => {
  const { countPages, page, postList, removePost, choosePaginatePage } = props;
  return (
    <div className={"post-list"}>
      <div>
        {postList.length === 0 ? (
          <div className={"post-list--notFound"}>Post not found</div>
        ) : (
          postList.map((post) => (
            <Post post={post} removePost={removePost} key={post.id} />
          ))
        )}
      </div>

      {postList.length >= 1 && (
        <div className={"post-list--paginate"}>
          <MyPagination
            pages={countPages}
            page={page}
            method={choosePaginatePage}
          />
        </div>
      )}
    </div>
  );
};
