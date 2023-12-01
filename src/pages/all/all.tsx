import { Input, Spin } from "antd";
import { useState } from "react";
import { debounce } from "../../utils/debounce";
import { useSearchTodosQuery } from "../../redux/slices/todo-api";
import TodoTile from "../../components/shared-ui/todo-tile";
import CollapseComp from "./components/collapse";

const AllTodos = () => {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useSearchTodosQuery(`${query}`);

  const { completed, inProgress } = useSeperator(data as TodoType[]);

  const queryChanged = debounce((e: any) => {
    setQuery(e.target.value);
  }, 500);

  if (isLoading) {
    return <Spin className="flex items-center justify-center h-screen" />;
  }

  return (
    <div className="flex flex-col gap-5 mt-[1px]">
      <Input
        className="h-[2.44rem] rounded-sm placeholder-gray-100 bg-[#3A3A39] text-white focus:border-transparent focus:ring-0 border-transparent focus:outline-none"
        placeholder="Search"
        onChange={queryChanged}
      />
      <div>
        <CollapseComp
          children1={inProgress?.map((e: TodoType) => (
            <TodoTile todo={e} key={e.id} />
          ))}
          children2={completed?.map((e: TodoType) => (
            <TodoTile todo={e} key={e.id} />
          ))}
          count1={inProgress.length.toString()}
          count2={completed.length.toString()}
        />
      </div>
    </div>
  );
};

export default AllTodos;

const useSeperator = (items: TodoType[]) => {
  const completed: TodoType[] = [];
  const inProgress: TodoType[] = [];

  items?.forEach((e: TodoType) => {
    if (e.completed) {
      completed.push(e);
    } else {
      inProgress.push(e);
    }
  });
  return { completed, inProgress };
};
