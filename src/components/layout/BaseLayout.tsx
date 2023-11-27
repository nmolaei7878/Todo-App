import { NavLink } from "react-router-dom";
import { AiOutlineStar, AiOutlineCheckCircle } from "react-icons/ai";
import { WiDaySunny } from "react-icons/wi";
import { useEffect } from "react";
import { useGetAllTodosQuery } from "../../redux/slices/todo-api";
import useExtractLenght from "./useExtractLength";
interface Props {
  children?: React.ReactNode;
}

const BaseLayout: React.FC<Props> = (props) => {
  const { data, isLoading } = useGetAllTodosQuery();

  if (isLoading) {
    <div>loading</div>;
  }

  const { Lengths } = useExtractLenght(data ?? []);

  return (
    <div className="bg-white flex gap-3 min-h-screen w-screen p-2">
      <div className="w-1/6 min-w-[200px] flex flex-col">
        <NavComponent
          length={Lengths.myDay}
          leadingIcon={<WiDaySunny />}
          title="My Day"
          toWhere="/myday"
        />
        <NavComponent
          length={Lengths.important}
          leadingIcon={<AiOutlineStar />}
          title="Important"
          toWhere="/important"
        />
        <NavComponent
          length={Lengths.completed}
          leadingIcon={<AiOutlineCheckCircle />}
          title="Completed"
          toWhere="/completed"
        />
      </div>
      <div className="w-5/6">{props.children}</div>
    </div>
  );
};

export default BaseLayout;

const NavComponent = ({
  leadingIcon,
  title,
  toWhere,
  length,
}: {
  leadingIcon: React.ReactNode;
  title: string;
  toWhere: string;
  length: number;
}) => {
  return (
    <NavLink
      className={(navData) =>
        navData.isActive ? "bg-gray-300 p-2" : "p-2 hover:bg-gray-200"
      }
      to={toWhere}
    >
      <div className="flex gap-3 items-center">
        <div className="text-lg w-6">{leadingIcon}</div>
        <div>{title}</div>
        <div>{length}</div>
      </div>
    </NavLink>
  );
};
