import { FC, memo } from "react";

import "./styles.scss";

interface IProps {
  title: string;
  description: string;
}

export const AboutItem: FC<IProps> = memo((props) => {
  const { title, description } = props;
  return (
    <div className={"about-item"}>
      <div className={"about-item--title"}>
        <strong>{title}</strong>
      </div>
      <div className={"about-item--description"}>{description}</div>
    </div>
  );
});
