function Footer() {
  let currentYear = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center items-center bg-[#707070] text-[#05256F] h-[8vh]">
        <div className="container flex flex-col items-center py-4">
          <p className="text-lg md:text-3xl font-bold">
            Observatório do Fomento | Copyright: {currentYear}
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
