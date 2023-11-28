import TodoTile from "../../components/shared-ui/todo-tile";
import { useGetCompletedTodosQuery } from "../../redux/slices/todo-api";

const Completed = () => {
  const { data, error, isLoading } = useGetCompletedTodosQuery();

  if (error) {
    <div>error</div>;
  }
  if (isLoading) {
    <div>loading</div>;
  }

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-white text-2xl">Completed</h1>
      <div>
        {data?.map((e: TodoType) => (
          <TodoTile todo={e} key={e.id} />
        ))}
      </div>
    </div>
  );
};

export default Completed;
