import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <form
        action="submit"
        className="flex flex-col space-y-2 bg-black/40 p-5 rounded-md w-full sm:w-[20rem] text-gray-300 border border-gray-900 shadow-xl  shadow-stone-600"
      >
        <h1 className="mb-5 text-center font-bold">Contact Us</h1>
        <div>
          <label htmlFor="name" className="block text-sm font-bold">
            Name
          </label>
          <input
            className="rounded-md w-full p-1 text-gray-800 text-sm font-bold"
            type="text"
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold">
            Email
          </label>
          <input
            className="rounded-md w-full p-1 text-gray-800 text-sm font-bold"
            type="text"
            name="email"
          />
        </div>
        <div>
          <label htmlFor="text" className="block text-sm font-bold">
            Text
          </label>
          <input
            className="rounded-md w-full p-1 text-gray-800 mb-5 text-sm font-bold"
            type="text"
            name="text"
          />
        </div>
        <button className="w-full p-1 rounded-md bg-black/70 border border-gray-900 text-sm font-bold hover:font-extrabold">
          Send
        </button>
      </form>
    </div>
  );
};

export default page;
