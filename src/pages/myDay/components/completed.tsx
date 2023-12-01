import React from "react";
import { Collapse, ConfigProvider } from "antd";

interface Props {
  children: React.ReactNode;
  count: string;
}

const CompletedComp: React.FC<Props> = ({ children, count }) => (
  <ConfigProvider
    theme={{
      components: {
        Collapse: {
          padding: 0,
          fontSize: 16,
        },
      },
    }}
  >
    <Collapse
      ghost
      defaultActiveKey={["1"]}
      items={[
        {
          key: "1",
          label: (
            <p className="flex items-center gap-2">
              Completed <span className="text-sm">({count})</span>
            </p>
          ),
          children: children,
        },
      ]}
    />
  </ConfigProvider>
);

export default CompletedComp;
