import React from "react";
import { Collapse } from "antd";

interface Props {
  children1: React.ReactNode;
  count1: string;
  children2: React.ReactNode;
  count2: string;
}

const CollapseComp: React.FC<Props> = ({
  children1,
  count1,
  children2,
  count2,
}) => (
  <Collapse
    ghost
    defaultActiveKey={["1", "2"]}
    items={[
      {
        key: "1",
        label: (
          <p className="flex items-center gap-2">
            Todo <span className="text-sm">({count1})</span>
          </p>
        ),
        children: children1,
      },
      {
        key: "2",
        label: (
          <p className="flex items-center gap-2">
            Completed <span className="text-sm">({count2})</span>
          </p>
        ),
        children: children2,
      },
    ]}
  />
);

export default CollapseComp;
