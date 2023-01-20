import { OptionType } from "../../../components/UI/MySelect";

export type PostListType = { title: string; body: string; id: string | number };

export type StateType = {
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
