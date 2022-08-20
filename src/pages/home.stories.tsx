import React from "react";
import { ComponentMeta } from "@storybook/react";

import HomePage from ".";

export default {
  title: "Pages/Home",
  component: HomePage,
} as ComponentMeta<typeof HomePage>;

export const Page = () => <HomePage />;
