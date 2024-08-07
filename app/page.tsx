"use client";

import { useState } from "react";
import TaskCard from "./components/Card/TaskCard";
import { TaskDataType } from "./Types/task";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function Home() {

   const [tasksList, setTasksList] = useState<TaskDataType[]>([]);

  const fetchTask = async ({ pageParam }: { pageParam: number }) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_page=${pageParam}`
    );

    return res.json();
  };

  const { data, error, fetchNextPage, status,  } = useInfiniteQuery({
    queryKey: ["tasksList"],
    queryFn: fetchTask,
    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages) => {
  
      return allPages?.length + 1;
    },
  });

  const content = data?.pages.map((tasks: TaskDataType[]) => 
    tasks?.map((task) => {
      return  <TaskCard key={task?.id} task={task} />
    }) 
   );


  if (status === "pending") {
    return <p>Loading....</p>;
  }
  if (status === "error") {
    return <p>Error: {error.message}</p>;
  }

  return (
    <main>
      <div className="my-10 lg:my-20">
        {/* -------------Main Title------------ */}
        <h1 className="text-center font-bold text-4xl md:text-5xl lg:text-6xl title-stroke">
          Tasks Manage
        </h1>

        {/* ---------------Main Content---------- */}
        <div className="mt-10 w-10/12 md:w-11/12 xl:w-full mx-auto md:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 lg:gap-y-10">
          {/* ----------------Task Card ----------------  */}
          {content}

           {/* ----------Load More Button----------- */}

        <button
          onClick={() => fetchNextPage()}
          className="bg-black text-[14px] w-[110px] h-[40px] rounded-full text-white mt-auto"
        >
          Load More...
        </button>
        </div>

       
      </div>
    </main>
  );
}
