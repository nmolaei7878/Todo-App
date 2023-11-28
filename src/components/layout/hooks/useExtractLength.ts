import { useEffect, useState } from "react";

const extractLength = (list: Array<TodoType>) => {
  const myDayLength = list.filter((item) => item.myDay)?.length;
  const completedLength = list.filter((item) => item.completed)?.length;
  const ImportantLength = list.filter((item) => item.important)?.length;
  return {
    completed: completedLength,
    myDay: myDayLength,
    important: ImportantLength,
  };
};

const useExtractLenght = (list: Array<TodoType>) => {
  const [Lengths, setLengths] = useState({
    completed: 0,
    myDay: 0,
    important: 0,
  });

  useEffect(() => {
    const data = extractLength(list);
    setLengths({
      completed: data.completed,
      myDay: data.myDay,
      important: data.important,
    });
  }, [list]);

  return { Lengths };
};

export default useExtractLenght;
