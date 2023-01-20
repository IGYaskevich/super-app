import React, { FC, memo, useCallback, useState } from "react";

import { MyInput } from "../../../../components/UI/MyInput";
import { MyButton } from "../../../../components/UI/MyButton";

import "./styles.scss";

interface IProps {
  createPost: (title: string, body: string) => void;
}

export const PostForm: FC<IProps> = memo((props) => {
  const { createPost } = props;

  const [state, setState] = useState({
    title: "",
    errorTitle: "",
    body: "",
    errorBody: "",
  });

  const changeTitle = useCallback(
    (title: string) => {
      setState({ ...state, title: title });
    },
    [state]
  );

  const changeBody = useCallback(
    (body: string) => {
      setState({ ...state, body: body });
    },
    [state]
  );

  const create = () => {
    if (state.title && state.body) {
      createPost(state.title, state.body);
    } else {
      let errorTitle = "";
      let errorBody = "";
      if (!state.title) {
        errorTitle = "Enter title";
      }
      if (!state.body) {
        errorBody = "Enter body";
      }
      setState({ ...state, errorTitle, errorBody });
    }
  };

  return (
    <form
      className={"post-form"}
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <h4>Creating Post</h4>
      <div className={"post-form--controllers"}>
        <div className={"post-form--controller"}>
          <MyInput
            label={"Enter title"}
            id={"post-form-input-title"}
            type={"text"}
            variant={"outlined"}
            color={"primary"}
            error={state.errorTitle}
            changeMethod={changeTitle}
          />
        </div>
        <div className={"post-form--controller"}>
          <MyInput
            label={"Enter body"}
            id={"post-form-input-body"}
            type={"text"}
            variant={"outlined"}
            color={"primary"}
            error={state.errorBody}
            changeMethod={changeBody}
          />
        </div>
      </div>

      <MyButton
        variant={"contained"}
        color={"primary"}
        title={"Create Post"}
        id={"post-form-button-create-post"}
        method={create}
      />
    </form>
  );
});
