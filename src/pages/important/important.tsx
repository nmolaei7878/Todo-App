import { useGetImportantTodosQuery } from "../../redux/slices/todo-api";

const Important = () => {
  const { data, error, isLoading } = useGetImportantTodosQuery();

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

export default Important;
