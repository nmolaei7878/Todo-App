import { NavLink } from "react-router-dom";
import { AiOutlineStar, AiOutlineCheckCircle } from "react-icons/ai";
import { WiDaySunny } from "react-icons/wi";
import { useGetAllTodosQuery } from "../../redux/slices/todo-api";
import useExtractLenght from "./hooks/useExtractLength";
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
    <div className="bg-[#11100F] flex gap-3 min-h-screen w-screen p-2">
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
        navData.isActive ? "bg-[#3A3A39] p-2 " : "p-2 hover:bg-[#3B3A39] "
      }
      to={toWhere}
    >
      <div className="flex gap-3 items-center">
        <div className="text-lg">{leadingIcon}</div>
        <div className="flex w-full justify-between items-center">
          <div>{title}</div>
          <div>{length}</div>
        </div>
      </div>
    </NavLink>
  );
};
