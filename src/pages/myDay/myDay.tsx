import { useState } from "react";
import AddTodo from "../../components/shared-ui/add-todo";
import TodoTile from "../../components/shared-ui/todo-tile";
import {
  useGetMyDayCompletedTodosQuery,
  useGetMyDayTodosQuery,
} from "../../redux/slices/todo-api";
import { FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";
const MyDay = () => {
  const [sort, setSort] = useState(true);

  const { data, error, isLoading, refetch } = useGetMyDayTodosQuery(
    `&_sort=important&_order=${sort ? "desc" : "asc"}`
  );
  const { data: dataCompleted } = useGetMyDayCompletedTodosQuery();

  const handleSort = async () => {
    await refetch();
    setSort((pervState) => !pervState);
  };

  if (error) {
    <div>error</div>;
  }
  if (isLoading) {
    <div>loading</div>;
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between pr-4 text-sm">
        <h1 className="text-white text-2xl">My Day</h1>
        <div
          onClick={handleSort}
          className="flex items-center gap-2 rounded-md hover:bg-slate-800 cursor-pointer p-1 pr-3 pl-3"
        >
          {sort ? <FaSortAlphaUp /> : <FaSortAlphaDown />}
          <div>Sort</div>
        </div>
      </div>
      <AddTodo category="myday" important={false} myDay={true} />
      <div>
        {data?.map((e: TodoType) => (
          <TodoTile todo={e} key={e.id} />
        ))}
      </div>
      {dataCompleted?.length !== 0 && (
        <h1 className="text-white text-2xl">Completed</h1>
      )}
      <div>
        {dataCompleted?.map((e: TodoType) => (
          <TodoTile todo={e} key={e.id} />
        ))}
      </div>
    </div>
  );
};

export default MyDay;
