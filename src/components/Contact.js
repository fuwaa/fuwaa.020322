export default function Experience() {
  return (
    <div className="flex flex-col text-center justify-center">
      <h1 className="mx-8 mt-20 text-4xl font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-indigo-600">
        Let&apos;s turn your dream to a reality.
      </h1>
      <h3 className="text-2xl font-bold mt-4">Let&apos;s get in touch.</h3>
      <div className="flex flex-col flex-grow justify-center p-5 rounded mb-32 mt-10 bg-gradient-to-r from-red-600 to-indigo-600  text-left">
        <form action="">
          <div className="flex flex-col sm:flex-row sm:space-x-2">
            <label className="text-white mt-2" htmlFor="">
              Your Name:
              <input
                className="block rounded bg-white text-black mt-1"
                type="text"
              />
            </label>
            <label className="text-white mt-2" htmlFor="">
              Your Email:
              <input
                className="block rounded bg-white text-black mt-1"
                type="text"
              />
            </label>
          </div>
          <div className="mt-2">
            <label className="text-white" htmlFor="">
              Your Message:
              <textarea
                className="block rounded bg-white text-black mt-1 w-full h-32"
                type="textarea"
              />
            </label>
          </div>
          <button className="rounded bg-slate-300 mt-4 px-2 ">Submit</button>
        </form>
      </div>
    </div>
  );
}
