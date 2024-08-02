import { TaskDataType } from "@/app/Types/task";

type TaskCardProps = {
  task: TaskDataType;
};

const TaskCard = ({ task }: TaskCardProps) => {
  const { id, title, completed } = task;
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md ">
      <h2 className="text-lg mb-1">
        <span className="font-bold">Task ID:</span> {id}
      </h2>

      <p className="mb-1">
        {" "}
        <span className="font-bold">Task Info:</span>
        {title}
      </p>

      <div>
        <span className="font-bold">Status:</span>{" "}
        <span
          className={`text-sm pt-[2px] pb-1 px-2 rounded-full  text-white ${
            completed ? "bg-green-600" : "bg-blue-500"
          }`}
        >
          {completed ? "completed" : "pending"}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
