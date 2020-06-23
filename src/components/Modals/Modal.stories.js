import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
// get our fontawesome imports
import { faCog } from "@fortawesome/free-solid-svg-icons";

import Modal from "./Modal";

export const actions = {
  onClick: action("onClick"),
};

storiesOf("Modal", module).add(
  "Default",
  withInfo({
    source: false,
    propTables: [Modal],
  })(() => (
    <div>
      <Modal
        avatar={faCog}
        title="Custom Formatting"
        message="Once enabled, we'll send a passcode to this number every time you login."
        close
        okText="Ok"
        cancelText="Cancel"
      />
    </div>
  ))
);
