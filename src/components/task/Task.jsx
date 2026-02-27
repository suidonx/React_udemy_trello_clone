import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Sortable } from "../../dnd/Sortable";

export const Task = ({ task, taskList, setTaskList, index }) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  return (
    <Sortable id={task.id} index={index}>
      <div className="taskBox">
        <p className="taskTitle">{task.text}</p>
        <button
          className="taskTrashButton"
          onClick={() => handleDelete(task.id)}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </Sortable>
  );
};
