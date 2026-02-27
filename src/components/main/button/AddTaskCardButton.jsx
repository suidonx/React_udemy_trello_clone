export const AddTaskCardButton = ({ taskCardsList, setTaskCardsList }) => {
  const addTaskCard = () => {
    setTaskCardsList([...taskCardsList, { id: crypto.randomUUID() }]);
  };
  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={addTaskCard}>
        +
      </button>
    </div>
  );
};
