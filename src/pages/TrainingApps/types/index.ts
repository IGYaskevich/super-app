import { FC } from "react";

type TrainingApp = {
  title: string;
  id: string;
  link: string;
  description: string;
  linkApp: string;
  IconFC: FC;
};
export type StateType = {
  apps: Array<TrainingApp>;
  gitHubApps: Array<TrainingApp>;
};
