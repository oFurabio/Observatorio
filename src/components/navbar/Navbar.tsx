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
      <div className="flex items-center justify-between h-[8vh] px-8">

        <Link to="/home" className="flex flex-col text-2xl md:text-4xl font-bold">
          <p>Observatório</p>
          <p>do Fomento</p>
        </Link>

        <ul className="hidden md:flex text-xl md:text-2xl font-black gap-8">
          <li className={underlineTransitory}>
            <Link to="/home">Início</Link>
          </li>
          <li className={underlineTransitory}>
            <Link to="/sobre">Sobre</Link>
          </li>
        </ul>

        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-6 text-xl font-black bg-[#707070]">
          <li>
            <Link to="/home" onClick={() => setOpen(false)}>
              Início
            </Link>
          </li>
          <li>
            <Link to="/sobre" onClick={() => setOpen(false)}>
              Sobre
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;