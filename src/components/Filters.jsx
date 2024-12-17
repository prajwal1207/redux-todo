// src/components/Filters.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/tasks/taskSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.tasks.filter);

  const filters = [
    { label: "All", value: "all" },
    { label: "Work", value: "work" },
    { label: "Personal", value: "personal" },
    { label: "Urgent", value: "urgent" },
  ];

  return (
    <div className="flex justify-center gap-4 mt-4">
      {filters.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => dispatch(setFilter(value))}
          className={`px-4 py-2 rounded text-sm font-medium border border-gray-300 hover:bg-blue-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            filter === value ? "bg-blue-500 text-white" : ""
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Filters;
