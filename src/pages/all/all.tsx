import { Input } from "antd";
import { useState } from "react";
import { debounce } from "../../utils/debounce";
import { useSearchTodosQuery } from "../../redux/slices/todo-api";
import TodoTile from "../../components/shared-ui/todo-tile";

const AllTodos = () => {
  const [query, setQuery] = useState("");
  const { data } = useSearchTodosQuery(`${query}`);

  const queryChanged = debounce((e: any) => {
    setQuery(e.target.value);
  }, 500);

  return (
    <div className="flex flex-col gap-5 mt-[1px]">
      <Input
        className="h-[2.44rem] rounded-sm placeholder-gray-100 bg-[#3A3A39] text-white focus:border-transparent focus:ring-0 border-transparent focus:outline-none"
        placeholder="Search"
        onChange={queryChanged}
      />
      <div>
        {data?.map((e: TodoType) => (
          <TodoTile todo={e} key={e.id} />
        ))}
      </div>
    </div>
  );
};

export default AllTodos;
