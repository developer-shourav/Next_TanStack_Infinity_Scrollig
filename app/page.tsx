import TaskCard from "./components/Card/TaskCard";

export default function Home() {
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
          <TaskCard/>
        </div>
      </div>
    </main>
  );
}
