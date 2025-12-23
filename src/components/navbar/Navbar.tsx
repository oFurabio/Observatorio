import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const underlineTransitory = `
    relative
    after:content-['']
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-0.5
    after:w-full
    after:bg-current
    after:scale-x-0
    after:origin-center
    after:transition-transform
    after:duration-300
    hover:after:scale-x-100
  `;

  return (
    <nav className="w-full bg-[#707070] text-[#05256F]">
      <div className="flex items-center justify-between h-[8vh] px-8 md:px-16 lg:px-20 xl:px-24 2xl:px-28">
        <Link
          to="/home"
          className="flex flex-col text-xl md:text-3xl font-bold"
        >
          <h1 className="md:hover:scale-105 md:duration-150 uppercase">
            Observatório
            <span className="flex justify-start">do Fomento</span>
          </h1>
        </Link>

        <ul className="hidden md:flex text-xl md:text-2xl font-black gap-8">
          <li className={underlineTransitory}>
            <Link to="/home">Início</Link>
          </li>
          <li className={underlineTransitory}>
            <Link to="/sobre">Quem somos</Link>
          </li>
        </ul>

        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      <ul
        className={`
          md:hidden
          fixed right-0 top-[8vh]
          bg-[#707070]

          flex flex-col
          items-center
          gap-4
          px-6
          text-xl
          font-black

          overflow-hidden
          transition-all
          duration-150
          ease-in-out
          ${open ? "max-h-40 opacity-100 py-4" : "max-h-0 opacity-0 py-0"}
      `}
      >
        <li>
          <Link to="/home" onClick={() => setOpen(false)}>
            Início
          </Link>
        </li>
        <li>
          <Link to="/sobre" onClick={() => setOpen(false)}>
            Quem somos
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
