import { ContactForm } from "./ContactForm"

export function Hero() {
  return (
    <div className="relative h-[80vh] bg-gray-50">
      <ContactForm />
      <div
        className="object-contain w-full"
        style={{
          backgroundImage: `url("https://i.ibb.co/xDWcHdP/home-image.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "73vh",
        }}
      >
        <div className="bg-black flex-col p-4 w-full h-full flex justify-center bg-opacity-50">
          <h2 className="text-white text-5xl font-serif leading-tight">
            Faith, Community and <br /> Excellence
          </h2>
          <h4 className="text-white text-xl antialiased">
            Education is an environment of faith and <br /> virtue or Pre-K
            through 8th grade
          </h4>
          <div className="max-w-xl divide-x divide-blue-700 flex justify-between items-center w-full h-24 bg-blue-900 absolute bottom-0 right-0">
            <div className="flex h-24 items-center justify-center w-full">
              <span className="text-white antialiased font-inter">Apply</span>
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
            </div>
            <div className="flex h-24 items-center justify-center w-full">
              <span className="text-white antialiased font-inter">Visit</span>
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
            </div>
            <div className="flex h-24 items-center justify-center w-full">
              <span className="text-white antialiased font-inter">Give</span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
