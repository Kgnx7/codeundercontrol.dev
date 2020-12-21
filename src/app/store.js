import { createStoreon } from "storeon";
import { createRouter } from "@storeon/router";
import routes from "./routes";

export const store = createStoreon([createRouter(routes)]);
