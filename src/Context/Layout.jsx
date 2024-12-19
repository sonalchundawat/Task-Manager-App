function Layout(props) {
  // Determine the background color based on the priority level
  const getBackgroundColor = (level) => {
    if (level === "High") return "bg-red-200 border-red-300"; // Light Red
    if (level === "Medium") return "bg-yellow-200 border-yellow-300"; // Light Yellow
    if (level === "Low") return "bg-green-200 border-green-300"; // Light Green
    return ""; // Default color if something goes wrong
  };

  return (
    <>
      <div className={`p-4 rounded border ${getBackgroundColor(props.level)}`}>
        <h2 className="text-lg font-primary font-semibold mb-4">
          {props.level} Priority
        </h2>
        {props.getTasksByPriority(props.level).map((task, index) => (
          <div key={index} className="bg-white p-2 rounded mb-2">
            <p
              className="text-base cursor-pointer font-secondary"
              onClick={() => props.setSelectedTask(task)}
            >
              - {task.text}
            </p>
            {props.selectedTask === task && (
              <>
                <Action
                  priority={props.level}
                  handleEditTask={props.handleEditTask}
                  handleChangePriority={props.handleChangePriority}
                  handleDeleteTask={props.handleDeleteTask}
                  selectedTask={props.selectedTask}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Layout;
