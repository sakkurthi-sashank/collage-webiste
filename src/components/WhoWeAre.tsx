export const WhoWeAre = () => {
  return (
    <div className="w-full py-10 flex flex-col px-4 xl:flex-row">
      <div className="w-full">
        <img
          src="https://www.juicer.io/api/posts/459467762/images.jpg?external_id=Ch5GkrTJAYq&s=d9f5654df7b4c247f030a99a7083ceca11279682"
          alt=""
          className="w-full h-[60vh] object-cover"
        />
      </div>
      <div className="w-full h-full flex flex-col items-center">
        <div className="max-w-xl pt-10">
          <div className="text-blue-950 text-5xl font-serif">Who We Are</div>
          <div className="text-xl font-semibold pt-10 font-inter antialiased text-blue-950">
            Sacred Heart School is a Catholic community which provides an
            excellent academic education in an environment of faith and virtue.
          </div>
          <div className="pt-10 text-gray-600">
            Sacred Heart School builds an active partnership between{" "}
            <span className="font-semibold text-lg text-blue-950">
              school, parish, and family{" "}
            </span>
            .Sacred Heart School graduates leaders who are exceptionally well
            prepared to meet the challenges of college preparatory education
            with a commitment to Catholic service to others. We are accredited
            through the Western Catholic Education Association.
          </div>
          <button className="border mt-16 flex items-center gap-4 border-gray-200 py-4 px-6">
            <span className="text-blue-950 font-semibold">About SHS</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-yellow-500"
              width={20}
              height={20}
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
      </div>
    </div>
  )
}
