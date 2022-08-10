import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SpriteSelector as SpriteSelectorComponent } from "./SpriteSelector";

export default {
  title: "Components",
  component: SpriteSelectorComponent,
} as ComponentMeta<typeof SpriteSelectorComponent>;

export const SpriteSelector: ComponentStory<typeof SpriteSelectorComponent> = () => (
  <SpriteSelectorComponent />
);
