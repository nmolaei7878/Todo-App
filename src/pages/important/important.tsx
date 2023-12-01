import { Spin } from "antd";
import AddTodo from "../../components/shared-ui/add-todo";
import TodoTile from "../../components/shared-ui/todo-tile";
import { useGetImportantTodosQuery } from "../../redux/slices/todo-api";

const Important = () => {
  const { data, error, isLoading } = useGetImportantTodosQuery();

  if (error) {
    <div>error</div>;
  }
  if (isLoading) {
    return <Spin className="flex items-center justify-center h-screen" />;
  }

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-white text-2xl">Important</h1>
      <AddTodo category="important" important={true} myDay={false} />
      <div>
        {data?.map((e: TodoType) => (
          <TodoTile todo={e} key={e.id} />
        ))}
      </div>
    </div>
  );
};

export default Important;
