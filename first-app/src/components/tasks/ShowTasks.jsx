function ShowTasks({ tasks }) {
  return (
    <>
      {tasks?.length ? (
        <>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>{task.text}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>There is no task Here</p>
      )}
    </>
  );
}

export default ShowTasks;
