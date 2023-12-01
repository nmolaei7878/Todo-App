import { FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";
import AddTodo from "../../components/shared-ui/add-todo";
import TodoTile from "../../components/shared-ui/todo-tile";
import {
  useGetMyDayCompletedTodosQuery,
  useGetMyDayTodosQuery,
} from "../../redux/slices/todo-api";
import DropdownComp from "./components/dropdown";
import { useSearchParams } from "react-router-dom";
import CompletedComp from "./components/completed";
const MyDay = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortType = searchParams.get("sort");
  const order = searchParams.get("order");

  let RealSortValue = "";
  if (sortType === "Alphabitcally") {
    RealSortValue = "title";
  }
  if (sortType === "Important") {
    RealSortValue = "important";
  }

  const { data, error, isLoading, refetch } = useGetMyDayTodosQuery(
    `&_sort=${RealSortValue}&_order=${order}`
  );
  const { data: dataCompleted } = useGetMyDayCompletedTodosQuery();

  const refetchWithSort = async () => {
    await refetch();
  };

  const onChangeOrder = async () => {
    const localOrder = order === "asc" ? "desc" : "asc";
    searchParams.set("order", localOrder);
    setSearchParams(searchParams);
    refetchWithSort();
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
        <div className="flex items-center ">
          <DropdownComp refetchWithSort={refetchWithSort} />
          <div
            onClick={onChangeOrder}
            className="hover:bg-slate-800 rounded-md  cursor-pointer p-[0.45rem] pr-3 pl-3"
          >
            {order === "asc" ? <FaSortAlphaDown /> : <FaSortAlphaUp />}
          </div>
        </div>
      </div>
      <AddTodo category="myday" important={false} myDay={true} />
      <div>
        {data?.map((e: TodoType) => (
          <TodoTile todo={e} key={e.id} />
        ))}
      </div>
      {dataCompleted?.length !== 0 && (
        <CompletedComp
          count={dataCompleted?.length.toString() ?? ""}
          children={dataCompleted?.map((e: TodoType) => (
            <TodoTile todo={e} key={e.id} />
          ))}
        />
      )}
    </div>
  );
};

export default MyDay;
