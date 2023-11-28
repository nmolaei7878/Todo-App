import { IoRepeat } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useAddTodoMutation } from "../../redux/slices/todo-api";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

interface AddTodoProps {
  important: boolean;
  myDay: boolean;
  category: string;
}

const AddTodo: React.FC<AddTodoProps> = ({ important, myDay, category }) => {
  const [title, setTitle] = useState("");
  const [addTodo] = useAddTodoMutation();

  const handleInput = (e: any) => {
    if (e.key === "Enter") {
      onAddTodoClicked();
    }
  };

  const onAddTodoClicked = async () => {
    try {
      await addTodo({
        category: category,
        completed: false,
        id: uuidv4(),
        important: important,
        myDay: myDay,
        title: title,
      }).unwrap();
      setTitle("");
    } catch (err) {
      console.error("Failed to save the post: ", err);
    }
  };
  return (
    <div>
      <div className="bg-gray-300 rounded-t-sm p-3  flex items-center gap-3 mt-1">
        <input
          defaultChecked={false}
          id="myinput"
          type="checkbox"
          className="bg-gray-200 border-blue-700 text-blue-600  rounded-full w-5 h-5"
        />
        <input
          value={title}
          onKeyDown={handleInput}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Add a task"
          tabIndex={-1}
          className="bg-transparent  focus:border-transparent focus:ring-0 border-transparent focus:outline-none w-full"
        />
      </div>
      <div className="bg-black w-full h-[0.1rem]"></div>

      <div className="flex justify-between h-11 items-center w-full pl-3 pr-3 bg-gray-200">
        <div className=" rounded-b-sm  flex items-center gap-2 text-xl cursor-pointer">
          <IoIosNotificationsOutline />
          <CiCalendarDate />
          <IoRepeat />
        </div>
        <button
          onClick={onAddTodoClicked}
          className="border-2 border-slate-600 pl-2 pr-2"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
