import React from "react";
import { storiesOf } from "@storybook/react";

import { ToggleTab } from "../components/ToggleTab";

const stories = storiesOf("ToggleTab", module);
stories.add("default", () => <ToggleTab />);
