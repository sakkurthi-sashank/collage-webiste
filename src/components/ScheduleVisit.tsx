export const ScheduleVisit = () => {
  return (
    <div className="min-h-[200px] bg-blue-900 space-x-4 flex flex-wrap px-4 items-center justify-center">
      <span className="text-4xl text-white text-center font-serif antialiased">
        Schedule a visit at Sacred Heart
      </span>
      <button className="px-4 items-center justify-center py-3 bg-blue-800 text-white flex">
        <span>Schedule a Visit</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-yellow-500 ml-2"
          width={16}
          height={16}
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            stroke="none"
            d="M0 0h24v24H0z"
            fill="none"
          ></path>
          <path d="M9 6l6 6l-6 6"></path>
        </svg>
      </button>
    </div>
  )
}
