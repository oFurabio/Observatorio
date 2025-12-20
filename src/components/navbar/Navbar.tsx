import { Link } from "react-router-dom";

function Navbar() {
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
    <>
      <div className="w-full flex items-center bg-[#707070] text-[#05256F] h-[8vh]">
        <div className="flex flex-col text-2xl md:text-4xl font-bold mx-8">
          <Link to='home'>
            <p>Observatório</p>
            <p>do Fomento</p>
          </Link>
        </div>
        <div className="container">
          <ul className="flex justify-end text-xl md:text-2xl font-black gap-8">
            <li className={underlineTransitory}><Link to='home'>Início</Link></li>
            <li className={underlineTransitory}><Link to='sobre'>Sobre</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;