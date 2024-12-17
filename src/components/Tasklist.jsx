// src/components/TaskList.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTaskCompletion } from "../features/tasks/taskSlice";
// import { deleteTask, toggleTaskCompletion } from "../features/tasks/tasksSlice";

const TaskList = () => {
  const { tasks, filter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    return task.category === filter;
  });

  return (
    <div className="mt-6 w-full max-w-md mx-auto bg-white p-4 rounded shadow-md">
      <ul className="divide-y divide-gray-200">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between py-2 px-4 hover:bg-gray-50"
            >
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => dispatch(toggleTaskCompletion(task.id))}
                  className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                />
                <span
                  className={`text-sm ${task.completed ? "line-through text-gray-400" : ""}`}
                >
                  {task.text}
                </span>
                <span className="text-xs px-2 py-1 bg-gray-200 text-gray-600 rounded">
                  {task.category}
                </span>
              </div>
              <button
                onClick={() => dispatch(deleteTask(task.id))}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500">No tasks found</p>
        )}
      </ul>
    </div>
  );
};

export default TaskList;
