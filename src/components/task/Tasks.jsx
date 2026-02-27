import { Droppable } from "../../dnd/Droppable";
import { Task } from "./task";
import { DragDropProvider } from "@dnd-kit/react";

export const Tasks = ({ taskList, setTaskList }) => {
  return (
    <Droppable id="taskList">
      {taskList.map((task, index) => (
        <Task
          key={task.id}
          task={task}
          taskList={taskList}
          setTaskList={setTaskList}
          index={index}
        />
      ))}
    </Droppable>
  );
};
