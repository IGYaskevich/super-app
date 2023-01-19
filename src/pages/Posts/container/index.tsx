import React, { useEffect, useState } from "react";

import axios from "axios";

import { PostManage } from "../components/PostManage";
import { PostList } from "../components/PostList";
import { AlertWrapper } from "../../../components/AlertWrapper";
import { PostForm } from "../components/PostForm";
import { Louder } from "../../../components/Louder";
import { OptionType } from "../../../UI/MySelect";

import { PostListType } from "../types";

import "./styles.scss";

type StateType = {
  cratePostAlert: boolean;
  page: number;
  limit: number;
  louder: boolean;
  selectedSort: string;
  sortText: string;
  countPages: number;
  options: Array<OptionType>;
  postList: Array<PostListType>;
  sortedPostList: Array<PostListType>;
};

export const PostsContainer = () => {
  const [state, setState] = useState<StateType>({
    cratePostAlert: false,
    page: 1,
    limit: 10,
    louder: false,
    selectedSort: "",
    sortText: "",
    countPages: 0,
    options: [
      { title: "Title", value: "title" },
      { title: "Body", value: "body" },
    ],
    postList: [],
    sortedPostList: [],
  });

  const showCreatePostAlert = () => {
    setState({ ...state, cratePostAlert: true });
  };

  const closeAlerts = () => {
    setState({ ...state, cratePostAlert: false });
  };

  const createPost = (title: string, body: string) => {
    const newPostList = [
      { title: title, body: body, id: state.postList.length + 1 },
      ...state.postList,
    ];
    setState({ ...state, postList: newPostList, cratePostAlert: false });
  };

  const removePost = (ID: string | number) => {
    const newPostList = state.postList.filter((post) => post.id !== ID);
    setState({ ...state, postList: newPostList });
  };

  const selectValue = (selected: string) => {
    const newPostList = [...state.postList].sort((post1, post2) => {
      const selectedValue = selected as "title" | "body";
      return post1[selectedValue]?.localeCompare(post2[selectedValue]);
    });
    setState({ ...state, selectedSort: selected, postList: newPostList });
  };

  const sortByText = (value: string) => {
    const newPostList = state.postList.filter((post) => {
      const postTitle = post.title.toUpperCase();
      const sortText = state.sortText.toUpperCase();
      return postTitle.includes(sortText);
    });
    setState({ ...state, sortText: value, sortedPostList: newPostList });
  };

  const choosePaginatePage = (page: number) => {
    setState({ ...state, page: page });
  };
  const fetchPost = () => {
    setState({ ...state, louder: true });
    try {
      setTimeout(async () => {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`,
          {
            params: { _page: state.page, _limit: state.limit },
          }
        );
        const resTotal = Number(response.headers["x-total-count"]);
        setState({
          ...state,
          postList: response.data,
          louder: false,
          countPages: Math.ceil(resTotal / state.limit),
        });
      }, 2000);
    } catch (error) {
      setState({ ...state, louder: false });
      alert(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [state.page]);

  const posts =
    state.sortText.length >= 3 ? state.sortedPostList : state.postList;

  return (
    <div className={"posts"} id={"posts-container"}>
      <PostManage
        options={state.options}
        sortText={state.sortText}
        showCreatePostAlert={showCreatePostAlert}
        selectValue={selectValue}
        sortByText={sortByText}
      />
      <PostList
        countPages={state.countPages}
        page={state.page}
        postList={posts}
        choosePaginatePage={choosePaginatePage}
        removePost={removePost}
      />

      {state.cratePostAlert && (
        <AlertWrapper closeMethod={closeAlerts}>
          <PostForm createPost={createPost} />
        </AlertWrapper>
      )}
      {state.louder && <Louder />}
    </div>
  );
};
