import { FC } from "react";

import "./styles.scss";
import { ICONS } from "../../static/icons";

export const Louder: FC = () => {
  return (
    <div className={"louder"}>
      <div className={"louder--content"}>
        <ICONS.louder />
      </div>
    </div>
  );
};
