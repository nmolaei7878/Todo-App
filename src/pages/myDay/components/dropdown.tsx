import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { useSearchParams } from "react-router-dom";

interface Props {
  refetchWithSort: () => void;
}

const items: MenuProps["items"] = [
  {
    label: <div className="text-black">Alphabitcally</div>,
    key: "Alphabitcally",
  },
  {
    label: <div className="text-black">Important</div>,
    key: "Important",
  },
];

const DropdownComp: React.FC<Props> = ({ refetchWithSort }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortType = searchParams.get("sort");
  const onClick = (e: any) => {
    searchParams.set("sort", e.key);
    setSearchParams(searchParams);
    refetchWithSort();
  };
  return (
    <Dropdown
      className="hover:bg-slate-800 rounded-md  cursor-pointer p-1 pr-3 pl-3"
      menu={{
        items,
        onClick: onClick,
      }}
      placement="bottom"
    >
      <div>
        <Space>
          {sortType ?? "Sort By"}
          <DownOutlined />
        </Space>
      </div>
    </Dropdown>
  );
};

export default DropdownComp;
