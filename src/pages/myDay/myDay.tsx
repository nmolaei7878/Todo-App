import AddTodo from "../../components/shared-ui/add-todo";
import TodoTile from "../../components/shared-ui/todo-tile";
import {
  useGetMyDayCompletedTodosQuery,
  useGetMyDayTodosQuery,
} from "../../redux/slices/todo-api";

const MyDay = () => {
  const { data, error, isLoading } = useGetMyDayTodosQuery();
  const { data: dataCompleted } = useGetMyDayCompletedTodosQuery();

  if (error) {
    <div>error</div>;
  }
  if (isLoading) {
    <div>loading</div>;
  }

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-white text-2xl">My Day</h1>
      <AddTodo category="myday" important={false} myDay={true} />
      <div>
        {data?.map((e: TodoType) => (
          <TodoTile todo={e} key={e.id} />
        ))}
      </div>
      <h1 className="text-white text-2xl">Completed</h1>
      <div>
        {dataCompleted?.map((e: TodoType) => (
          <TodoTile todo={e} key={e.id} />
        ))}
      </div>
    </div>
  );
};

export default MyDay;
