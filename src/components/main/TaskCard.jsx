import { useState } from "react";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import { TaskAddInput } from "./input/TaskAddInput";
import { TaskCardTitle } from "./TaskCardTitle";
import { Tasks } from "./Tasks";
import { DragDropProvider } from "@dnd-kit/react";
import { move } from "@dnd-kit/helpers";
import { Draggable } from "../../dnd/Draggable";

export const TaskCard = ({ taskCard, taskCardsList, setTaskCardsList }) => {
  const [taskList, setTaskList] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleDragEnd = (event) => {
    setTaskList((task) => move(task, event));
  };

  return (
    <DragDropProvider onDragEnd={handleDragEnd}>
      <div className="taskCard">
        <div className="taskCardTitleAndTaskCardDeleteButton">
          <TaskCardTitle />
          <TaskCardDeleteButton
            taskCard={taskCard}
            taskCardsList={taskCardsList}
            setTaskCardsList={setTaskCardsList}
          />
        </div>
        <TaskAddInput
          inputText={inputText}
          setInputText={setInputText}
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <Tasks taskList={taskList} setTaskList={setTaskList} />
      </div>
    </DragDropProvider>
  );
};
