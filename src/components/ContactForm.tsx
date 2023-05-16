import { useEffect, useState } from "react"

export const ContactForm = () => {
  const [closeContactForm, setCloseContactForm] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setCloseContactForm(true)
    }, 3000)
  }, [])

  return (
    <div>
      {closeContactForm ? (
        <div className="max-w-xl w-full z-20 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-96 bg-white">
          <div className="text-center text-2xl pt-4 font-semibold text-gray-700">
            Contact Us
          </div>
          <div className="rounded-lg bg-white p-8 lg:col-span-3">
            <form
              action=""
              className="space-y-4"
            >
              <div>
                <label
                  className="sr-only"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    className="sr-only"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label
                    className="sr-only"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>

              <div>
                <label
                  className="sr-only"
                  htmlFor="message"
                >
                  Message
                </label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  id="message"
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Send Enquiry
                </button>
                <button
                  onClick={() => setCloseContactForm(false)}
                  className="inline-block mt-3 w-full rounded-lg border border-gray-700 px-5 py-3 font-medium text-gray-700 sm:w-auto"
                >
                  Close Form
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  )
}
