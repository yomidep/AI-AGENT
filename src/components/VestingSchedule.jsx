import React, { useState } from "react";

const VestingSchedule = () => {
  const events = [
    {
      date: "November 29, 2023",
      title: "Contract in place",
      completed: true,
    },
    {
      date: "November 29, 2023",
      title: "1 month cliff started",
      completed: true,
    },
    {
      date: "December 29, 2023",
      title: "Cliff started",
      completed: true,
    },
    {
      date: "December 29, 2023",
      title: "Cliff started",
      completed: true,
    },
    {
      date: "December 29, 2023",
      title: "Cliff started",
      completed: true,
    },
    {
      date: "December 29, 2023",
      title: "Cliff started",
      completed: true,
    },
    {
      date: "December 29, 2023",
      title: "Cliff started",
      completed: true,
    },
    {
      date: "December 29, 2023",
      title: "Cliff started",
      completed: true,
    },
    {
      date: "December 29, 2023",
      title: "Vesting begins",
      completed: false,
    },
    // ... other events
  ];

  const [showAll, setShowAll] = useState(false);
  const eventsToShow = showAll ? events : events.slice(0, 5);
  const hasMore = events.length > 5;

  return (
    <div className="w-full h-full rounded-xl  dark:bg-lightBrown bg-white shadow-custom ">
      <div className=" flex flex-row items-center justify-start gap-2">
        <div className=" dark:text-white text-title-light  p-4 rounded-lg max-w-sm">
          <div className="flex justify-start gap-3  mb-4">
            <h2 className=" text-lg font-semibold">Vesting Schedule</h2>
            <img src="icons/info.svg" alt="" />
          </div>
          <ul className="">
            {eventsToShow.map((event, index) => (
              <li key={index} className="relative">
                <div
                  className={`w-3 h-3 rounded-full ${
                    event.completed
                      ? "bg-[#BE854B] shadow-[0px_0px_5.8px_rgba(197,_118,_37,_0.5)] "
                      : "border-[#ababab] border-2"
                  }`}
                ></div>
                <div className="absolute top-0 left-8 h-16 flex flex-col w-full   ">
                  <time className=" text-xs dark:text-subtitle-dark text-subtitle-light font-normal leading-none">
                    {event.date}
                  </time>
                  <h3 className="text-base font-semibold">{event.title}</h3>
                </div>

                {index !== eventsToShow.length - 1 && (
                  <div
                    className={`h-12 my-1 border-l-2 ml-1.5 border-[#BE854B] ${
                      eventsToShow[index + 1].completed
                        ? "border-[#BE854B]"
                        : "border-[#ababab]"
                    }`}
                  ></div>
                )}
              </li>
            ))}

            {hasMore && showAll && (
              <button
                onClick={() => setShowAll(false)}
                className="mt-12  flex flex-col w-full text-sm text-[#FB9037] "
              >
                SHOW LESS
              </button>
            )}
            {hasMore && !showAll && (
              <>
                <div
                  className={`h-12 my-1 border-l-2 ml-1.5 border-[#BE854B]`}
                ></div>
                <li className="relative">
                  <div
                    className={`w-3 h-3 rounded-full border-2 border-[#FB9037] shadow-[0px_0px_5.8px_rgba(197,_118,_37,_0.5)] 
                  `}
                  ></div>
                  <button
                    onClick={() => setShowAll(true)}
                    className="absolute top-0 left-8 h-16 flex flex-col w-full text-sm text-[#FB9037] "
                  >
                    SHOW MORE
                  </button>
                  {/* <div className="h-12 my-1 border-l-2 ml-1.5 border-[#BE854B]"></div> */}
                </li>
              </>
            )}
          </ul>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default VestingSchedule;
