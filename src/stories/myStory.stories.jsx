import React from "react";
import { storiesOf } from "@storybook/react";

import { ToggleTab } from "..";
const stories = storiesOf("ToggleTab", module);
stories.add("default", () => <ToggleTab names={["Tab01", "Tab02", "Tab03"]} id="toggle-tab" />);
