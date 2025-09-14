export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="h-auto mx-6">
      <div className="h-auto bg-white">
        {/* Decorative Gradient */}
        <div className="rounded-4xl bg-gradient-to-r from-[#a77fbd] to-[#6c3c8a] p-6 text-white">
          {/* Title */}
          <div className="text-center text-2xl font-bold mb-6">Contact</div>

          {/* Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column - Contact Info */}
            <div className="space-y-3 text-sm">
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                <a href="tel:+17215551234" className="hover:underline">
                  +1 (721) 555-1234
                </a>
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a href="mailto:info@mlkprimary.edu" className="hover:underline">
                  info@mlkprimary.edu
                </a>
              </p>
              <p className="flex flex-col space-x-2">
                <span className="font-semibold">Social Media:</span>
                <a
                  href="https://facebook.com/mlkprimary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 hover:underline flex items-center space-x-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.002 3.657 9.128 8.438 9.878v-6.99H8.077v-2.888h2.361V9.797c0-2.337 1.393-3.626 3.52-3.626.999 0 2.043.178 2.043.178v2.25h-1.151c-1.135 0-1.488.704-1.488 1.428v1.715h2.533l-.405 2.888h-2.128v6.99C18.343 21.128 22 17.002 22 12z" />
                  </svg>
                  <span>Facebook Page</span>
                </a>
              </p>
            </div>

            {/* Right Column - Contact Form */}
            <form className="space-y-3 text-black bg-transparent bg-opacity-90 p-4 rounded-xl">
              <div>
                <label className="block text-white text-sm font-medium mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="example@email.com"
                  className="w-full px-3 py-2 bg-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#888888]"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-1">Message</label>
                <textarea
                  required
                  placeholder="Write your message..."
                  className="w-full px-3 py-2 bg-white rounded-lg text-sm h-24 resize-none focus:outline-none focus:ring-2 focus:ring-[#888888]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#888888] text-white text-lg font-semibold py-2 rounded-lg hover:bg-[#727272] hover:cursor-pointer transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-[#afafaf] my-4" />

        {/* Rights Reserved Section */}
        <div className="pb-6 text-center text-xs text-[#898989] space-y-1">
          <p>&copy; {year} Dr. Martin Luther King Primary School.</p>
          <p>All rights reserved.</p>
          <p>Division Public Education | Ministry ECYS - Sint Maarten</p>
        </div>
      </div>
    </footer>
  );
}