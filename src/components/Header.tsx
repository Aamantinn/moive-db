import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="sticky top-0 z-10 flex flex-col w-full px-6 py-4 font-sans text-center bg-white shadow sm:flex-row sm:text-left sm:justify-between sm:items-baseline">
      <div className=" ">
        <Link to={`/`}>
          
          <span className="flex flex-row items-center  gap-2 text-base font-bold text-black no-underline ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="w-9 h-9"
            >
              <g
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth=""
              >
                <path d="M16 16V8a1 1 0 00-1-1H5a1 1 0 00-1 1v8a1 1 0 001 1h10a1 1 0 001-1z" />
                <path strokeLinejoin="round" d="M20 7l-4 3v4l4 3V7z"/>
              </g>
            </svg>
            MovieApp
          </span>{" "}
        </Link>
      </div>
    </nav>
  );
};
