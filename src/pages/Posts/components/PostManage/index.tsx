import React, { FC, memo } from "react";

import { MyInput } from "../../../../UI/MyInput";
import { MyButton } from "../../../../UI/MyButton";
import { MySelect, OptionType } from "../../../../UI/MySelect";

import "./styles.scss";

interface IProps {
  sortText: string;
  showCreatePostAlert: () => void;
  selectValue: (selected: string) => void;
  options: Array<OptionType>;
  sortByText: (value: string) => void;
}

export const PostManage: FC<IProps> = memo((props) => {
  const { sortText, options, selectValue, showCreatePostAlert, sortByText } =
    props;
  return (
    <div className={"post-manage"}>
      <div className={"post-manage--item"}>
        <MyInput
          label={"Enter text"}
          variant={"outlined"}
          type={"text"}
          color={"primary"}
          id={"post-page-input"}
          value={sortText}
          changeMethod={sortByText}
        />
      </div>
      <div className={"post-manage--item"}>
        <MySelect
          id={"post-manage"}
          label={"Choose select"}
          color={"primary"}
          options={options}
          selectValue={selectValue}
        />
      </div>
      <div className={"post-manage--item"}>
        <MyButton
          title={"Create post"}
          color={"primary"}
          variant={"contained"}
          id={"post-page-button-create"}
          method={showCreatePostAlert}
        />
      </div>
    </div>
  );
});
