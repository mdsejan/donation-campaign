const Header = () => {
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

          <div className="form-control">
            <label className="input-group">
              <input
                type="text"
                placeholder="Search here...."
                className="input input-bordered focus:outline-none w-48 lg:w-72"
              />
              <span className="btn bg-[#FF444A] hover:bg-black text-white capitalize">
                Search
              </span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
