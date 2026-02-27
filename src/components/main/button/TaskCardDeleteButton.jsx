import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const TaskCardDeleteButton = ({
  taskCard,
  taskCardsList,
  setTaskCardsList,
}) => {
  const onDeleteTaskCard = (id) => {
    setTaskCardsList(taskCardsList.filter((taskCard) => taskCard.id !== id));
  };

  return (
    <div>
      <button
        className="taskCardDeleteButton"
        onClick={() => onDeleteTaskCard(taskCard.id)}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
};
