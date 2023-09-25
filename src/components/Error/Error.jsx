import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="max-w-screen-2xl mx-auto h-screen flex flex-col justify-center items-center">
      <figure>
        <img
          className="w-full h-[40rem]"
          src="https://i.ibb.co/jhXPqkY/error.jpg"
          alt="error"
        />
      </figure>
      <Link to="/">
        <button className="px-9 py-3 font-semibold rounded-md bg-[#0381F9] hover:bg-black text-white">
          Back Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
