import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "../../redux/slices/todo-api";

interface Props {
  todo: TodoType;
}
const TodoTile: React.FC<Props> = ({ todo }) => {
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const onCheckedTodoClicked = async (status: boolean) => {
    try {
      await updateTodo({
        ...todo,
        completed: status,
      });
    } catch (err) {
      console.log("failure");
    }
  };
  const onStarTodoClicked = async (status: boolean) => {
    try {
      await updateTodo({
        ...todo,
        important: status,
      });
      if (todo.category === "important" && status === false) {
        await deleteTodo(todo.id);
      }
    } catch (err) {
      console.log("failure");
    }
  };
  const handleCheckBox = (e: { target: { checked: boolean } }) => {
    onCheckedTodoClicked(e.target.checked);
  };

  const handleStar = () => {
    onStarTodoClicked(!todo.important);
  };

  return (
    <div className="bg-[#252423] p-3 rounded-sm flex items-center gap-3 mt-1">
      <input
        defaultChecked={todo.completed}
        id="myinput"
        type="checkbox"
        className="cursor-pointer bg-gray-200 border-blue-700 text-blue-600  rounded-full w-5 h-5"
        onChange={handleCheckBox}
      />

      <h5 className="cursor-pointer w-full h-7">{todo.title}</h5>
      <div
        onClick={handleStar}
        className="cursor-pointer min-w-20 h-5 text-2xl"
      >
        {todo.important ? <AiFillStar /> : <AiOutlineStar />}
      </div>
    </div>
  );
};

export default TodoTile;
