export const Blockquote = () => {
  return (
    <div className="min-h-[70vh] flex-col flex w-full items-center px-4 justify-center">
      <div className="my-8 p-3 rounded-full border">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-yellow-600"
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
          <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
          <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
        </svg>
      </div>
      <div className="text-center italic text-blue-950 md:text-4xl text-2xl font-serif">
        "Sacred Heart is an academically challenging <br /> school that preps
        students not only for high school <br /> and beyond, but also as young
        Catholics."
      </div>
      <div className="py-6 text-gray-500 font-inter">Joe Deo | Parent</div>
    </div>
  )
}
