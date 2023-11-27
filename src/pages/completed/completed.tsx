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
    <div>
      {data?.map((e) => (
        <div>{e.title}</div>
      ))}
    </div>
  );
};

export default Completed;
