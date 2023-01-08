import { FC, memo, useState } from "react";

import * as MUI from "@mui/material";
import { themeMUI } from "../../static/themeMUI";

import "./styles.scss";

export type OptionType = { title: string; value: string | number };

interface IProps {
  id: string;
  label: string;
  color: "error" | "primary" | "secondary" | "info" | "success" | "warning";
  options: Array<OptionType>;
  selectValue: (selected: string) => void;
}

export const MySelect: FC<IProps> = memo((props) => {
  const { id, label, color, options, selectValue } = props;

  const [value, setValue] = useState("");

  const handleChange = (event: MUI.SelectChangeEvent) => {
    const selected = event.target.value as string;
    setValue(selected);
    selectValue(selected);
  };

  return (
    <MUI.ThemeProvider theme={themeMUI}>
      <MUI.FormControl fullWidth>
        <MUI.InputLabel size={"small"} id={`${id}-label`} color={color}>
          {`${label}`}
        </MUI.InputLabel>
        <MUI.Select
          labelId={`${id}-label`}
          id={`${id}-select`}
          value={value}
          label={`${label}`}
          color={color}
          size={"small"}
          onChange={handleChange}
        >
          {options.map((option) => (
            <MUI.MenuItem value={option.value} key={option.value}>
              {option.title}
            </MUI.MenuItem>
          ))}
        </MUI.Select>
      </MUI.FormControl>
    </MUI.ThemeProvider>
  );
});
