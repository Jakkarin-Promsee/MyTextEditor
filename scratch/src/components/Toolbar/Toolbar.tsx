import React from "react";
import ToolbarButton from "./ToolbarButton";

type Props = {};

const Toolbar: React.FC<Props> = ({}) => (
  <>
    <ToolbarButton
      onClick={() => console.log("Bold clicked")}
      isActive={false}
      tooltip="Bold (Ctrl+B)"
    >
      <span>Test</span>
    </ToolbarButton>
  </>
);

export default Toolbar;
