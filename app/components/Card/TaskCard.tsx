const TaskCard = () => {
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md ">
      <h2 className="text-lg mb-1">
        <span className="font-bold">Task ID:</span> 25
      </h2>

      <p className="mb-1">
        {" "}
        <span className="font-bold">Task Info:</span> Lorem ipsum dolor sit amet
        consectetur adipisicing elit.
      </p>

      <div>
        <span className="font-bold">Status:</span>{" "}
        <span className="text-sm py-[2px] px-2 rounded-full bg-blue-500 text-white">
          completed
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
