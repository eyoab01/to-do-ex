const setTaskAsComplete = (task) => {
  task.completed = true;
};

const setTaskAsIncomplete = (task) => {
  task.completed = false;
};

const clearAllCompletedTasks = (tasks) => {
  const newTaskList = tasks.filter((task) => !task.completed);
  // Update remaining task indices
  newTaskList.forEach((task, idx) => {
    task.index = idx + 1;
  });
  return newTaskList;
};

export {
  setTaskAsComplete,
  setTaskAsIncomplete,
  clearAllCompletedTasks,
};
