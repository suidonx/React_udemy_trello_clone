export const TaskAddInput = ({
  inputText,
  setInputText,
  taskList,
  setTaskList,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === "") {
      return;
    }
    setTaskList([
      ...taskList,
      { id: self.crypto.randomUUID(), text: inputText },
    ]);
    setInputText("");
  };

  console.log(taskList);
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputText}
          type="text"
          placeholder="add a task"
          className="taskAddInput"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};
