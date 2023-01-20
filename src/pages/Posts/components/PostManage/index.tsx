import React, { FC, memo } from "react";

import { MyInput } from "../../../../components/UI/MyInput";
import { MyButton } from "../../../../components/UI/MyButton";
import { MySelect, OptionType } from "../../../../components/UI/MySelect";

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
  const gitHubLink =
    "https://github.com/IgnatYaskevich98/super-app/tree/main/src/pages/Posts";
  return (
    <div className={"post-manage"}>
      <a href={gitHubLink} className={"post-manage--item"}>
        <MyButton
          title={"Link to GitHub"}
          color={"primary"}
          variant={"contained"}
          id={"post-TrainingApp-button-gitHub"}
          method={() => {}}
        />
      </a>
      <div className={"post-manage--items"}>
        <div className={"post-manage--item"}>
          <MyInput
            label={"Enter text"}
            variant={"outlined"}
            type={"text"}
            color={"primary"}
            id={"post-TrainingApp-input"}
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
            id={"post-TrainingApp-button-create"}
            method={showCreatePostAlert}
          />
        </div>
      </div>
    </div>
  );
});
