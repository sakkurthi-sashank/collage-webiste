export const NewsAndEvents = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white">
      <div className="max-w-7xl px-6 overflow-scroll w-full flex justify-start items-center space-x-20">
        <div className="space-y-6">
          <div className="border h-fit w-fit p-2 rounded-full bg-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="2"
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
              <path d="M5 12l14 0"></path>
              <path d="M15 16l4 -4"></path>
              <path d="M15 8l4 4"></path>
            </svg>
          </div>
          <div className="border h-fit w-fit p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue-800"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="2"
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
              <path d="M5 12l14 0"></path>
              <path d="M5 12l4 4"></path>
              <path d="M5 12l4 -4"></path>
            </svg>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col justify-evenly h-56 w-72 bg-blue-900 p-6">
            <span className="text-4xl font-serif antialiased text-white">
              News And Events
            </span>
            <span className="font-inter text-white flex items-center text-sm">
              <span>View All</span>
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
            </span>
          </div>
          <div className="flex flex-col justify-evenly h-56 w-72 bg-gray-100 p-4">
            <span className="text-2xl font-serif antialiased text-blue-900">
              Catholic High School Information Night and Open Houses
            </span>
            <span className="text-gray-600">May 17 - 20, 2023</span>
          </div>
          <div className="flex flex-col justify-evenly h-56 w-72 bg-gray-100 p-4">
            <span className="text-2xl font-serif antialiased text-blue-900">
              Catholic High School Information Night and Open Houses
            </span>
            <span className="text-gray-600">May 17 - 20, 2023</span>
          </div>
          <div className="flex flex-col justify-evenly h-56 w-72 bg-gray-100 p-4">
            <span className="text-2xl font-serif antialiased text-blue-900">
              Catholic High School Information Night and Open Houses
            </span>
            <span className="text-gray-600">May 17 - 20, 2023</span>
          </div>
        </div>
      </div>
    </div>
  )
}
