import { deleteAsync } from "del";

import { config } from "../config/config.js";

export const clean = () => {
  return deleteAsync([config.OUTPUT_DIR]);
};
