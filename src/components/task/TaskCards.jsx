import { useState } from "react";
import { AddTaskCardButton } from "./button/AddTaskCardButton";
import { TaskCard } from "./TaskCard";
import { DragDropProvider } from "@dnd-kit/react";
import { move } from "@dnd-kit/helpers";
import { Draggable } from "../../dnd/Draggable";
import { Droppable } from "../../dnd/Droppable";
import { Sortable } from "../../dnd/Sortable";

export const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([]);

  const handleDragEnd = (event) => {
    setTaskCardsList((taskCard) => move(taskCard, event));
  };

  return (
    <DragDropProvider onDragEnd={handleDragEnd}>
      <Droppable id="taskCardList">
        <div className="taskCardsArea">
          {taskCardsList.map((taskCard, index) => (
            <Sortable key={taskCard.id} id={taskCard.id} index={index}>
              <TaskCard
                taskCard={taskCard}
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
              />
            </Sortable>
          ))}
          <AddTaskCardButton
            taskCardsList={taskCardsList}
            setTaskCardsList={setTaskCardsList}
          />
        </div>
      </Droppable>
    </DragDropProvider>
  );
};
