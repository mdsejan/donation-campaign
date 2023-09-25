import { useState } from "react";
import Donations from "../../components/Donations/Donations";

const Header = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    setQuery(searchValue);
  };

  return (
    <>
      <div
        className="hero min-h-[50vh] lg:min-h-[70vh]"
        style={{
          backgroundImage: "url(https://i.ibb.co/k5qmdQt/hero-bg.png)",
        }}
      >
        <div className="hero-overlay bg-white bg-opacity-95"></div>

        <div className="flex flex-col items-center">
          <div>
            <h1 className="mb-12 text-3xl md:text-5xl font-bold text-center mx-7">
              I Grow By Helping People In Need
            </h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Search here...."
                  name="search"
                  className="input input-bordered focus:outline-none w-48 lg:w-72"
                />
                <button
                  type="submit"
                  className="btn bg-[#FF444A] hover:bg-black text-white capitalize"
                >
                  Search
                </button>
              </label>
            </div>
          </form>
        </div>
      </div>

      <Donations query={query}></Donations>
    </>
  );
};

export default Header;
