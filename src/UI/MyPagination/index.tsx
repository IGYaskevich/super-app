import React, { FC, memo } from "react";

import { Pagination, Stack, ThemeProvider } from "@mui/material";
import { themeMUI } from "../../static/themeMUI";

interface IProps {
  pages: number;
  page: number;
  method: (page: number) => void;
}

export const MyPagination: FC<IProps> = memo((props) => {
  const { pages, page, method } = props;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    method(value);
  };
  return (
    <ThemeProvider theme={themeMUI}>
      <Stack spacing={2}>
        <Pagination
          count={pages}
          color="primary"
          defaultPage={page}
          onChange={handleChange}
        />
      </Stack>
    </ThemeProvider>
  );
});
