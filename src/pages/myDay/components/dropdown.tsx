import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { useAppDispatch, useAppSelector } from "../../../hook/hooks";
import { changeSort } from "../../../redux/slices/sort-slice";

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
  const sortSlice = useAppSelector((state) => state.sortSlice);
  const dispatch = useAppDispatch();
  const onClick = (e: any) => {
    dispatch(changeSort(e.key));
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
          {sortSlice.sort}
          <DownOutlined />
        </Space>
      </div>
    </Dropdown>
  );
};

export default DropdownComp;
