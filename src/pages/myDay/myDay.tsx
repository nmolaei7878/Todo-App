import { FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";

import AddTodo from "../../components/shared-ui/add-todo";
import TodoTile from "../../components/shared-ui/todo-tile";
import {
  useGetMyDayCompletedTodosQuery,
  useGetMyDayTodosQuery,
} from "../../redux/slices/todo-api";
import DropdownComp from "./components/dropdown";
import { useAppDispatch, useAppSelector } from "../../hook/hooks";
import { changeOrder, createUrl } from "../../redux/slices/sort-slice";
const MyDay = () => {
  const sortSlice = useAppSelector((state) => state.sortSlice);
  const dispatch = useAppDispatch();

  const { data, error, isLoading, refetch } = useGetMyDayTodosQuery(
    sortSlice.url
  );
  const { data: dataCompleted } = useGetMyDayCompletedTodosQuery();

  const refetchWithSort = async () => {
    dispatch(createUrl());
    await refetch();
  };

  const onChangeOrder = async () => {
    dispatch(changeOrder());
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
            {sortSlice.order === "asc" ? (
              <FaSortAlphaDown />
            ) : (
              <FaSortAlphaUp />
            )}
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
