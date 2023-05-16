import { useState } from "react"

const navLinks = [
  {
    id: 1,
    name: "About SHS",
    link: "about",
  },
  {
    id: 2,
    name: "Admissions",
    link: "admission",
  },
  {
    id: 3,
    name: "Academics",
    link: "academics",
  },
  {
    id: 4,
    name: "Parents/Students",
    link: "parents/students",
  },
  {
    id: 5,
    name: "Giving",
    link: "Quick Links",
  },
]

export const Header = () => {
  return (
    <div className="h-28 relative bg-white flex items-center justify-between px-4">
      <div className="flex items-center space-x-3">
        <img
          src="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_1/v1564056119/sacredheartorg/ysejohopffnambjo2mie/header-logo.png"
          alt=""
          className="md:w-20 md:h-20 h-16 w-16"
        />
        <h4 className="text-xl md:text-2xl font-serif text-gray-700 text-center">
          SACRED HEART <br /> <span className="text-xl">SCHOOL</span>
        </h4>
      </div>
      <DesktopLinks />
      <MobileLinks />
    </div>
  )
}

export function DesktopLinks() {
  return (
    <div className="hidden lg:block">
      <div className="flex flex-col space-y-4 px-4">
        <div className="flex space-x-8 items-center justify-end pr-6">
          <div className="font-serif flex items-center space-x-2 text-lg font-semibold text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue-400"
              width={20}
              height={20}
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
              <path
                d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z"
                strokeWidth={0}
                fill="currentColor"
              ></path>
            </svg>
            <span>425 451-1773</span>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-sky-500"
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
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                <path d="M21 21l-6 -6"></path>
              </svg>
            </div>
            <input
              placeholder="search"
              className="bg-gray-100 focus:outline-none w-52 py-2 px-3 text-sm border"
              type="text"
            />
          </div>
        </div>
        <div className="flex space-x-10 text-gray-500 font-medium">
          {navLinks.map((links) => (
            <div
              className="flex items-center space-x-1"
              key={links.name}
            >
              <span className="font-inter text-sm">{links.name}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-yellow-500"
                width="20"
                height="20"
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
                <path d="M6 9l6 6l6 -6"></path>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function MobileLinks() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className="block lg:hidden">
      <button onClick={() => setOpenMenu(!openMenu)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={28}
          height={28}
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
          <path d="M4 8l16 0"></path>
          <path d="M4 16l16 0"></path>
        </svg>
      </button>
      <div>
        {openMenu && (
          <div className="absolute w-full left-0 right-0 top-28 z-10 flex flex-col space-y-6 bg-white  bg-opacity-95 px-10 py-8 backdrop-blur-lg backdrop-filter">
            <div className="flex space-x-8 items-center w-full">
              <div className="relative w-full">
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-sky-500"
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
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                    <path d="M21 21l-6 -6"></path>
                  </svg>
                </div>
                <input
                  placeholder="search"
                  className="bg-gray-100 focus:outline-none w-full py-2 px-3 text-sm border"
                  type="text"
                />
              </div>
            </div>
            {navLinks.map((link) => (
              <a
                className="indigo cursor-pointer text-lg text-gray-800 antialiased hover:text-indigo-500"
                key={link.name}
                // href={`#${link.link}`}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
