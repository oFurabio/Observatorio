import {
  EnvelopeOpenIcon,
  LinkedinLogoIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";

function Home() {
  return (
    <>
      <div className="bg-gray-300 flex justify-center min-h-[84vh]">
        <div className="container grid grid-cols-1 text-[#05256F]">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <img
              src="public/logoEstranho.jpg"
              alt="Logo do Observatório"
              className="max-h-48 md:max-h-72 rounded-md"
            />
            <h2 className="text-2xl md:text-5xl font-bold">Seja Bem Vindo!</h2>
            <div className="flex flex-col items-center gap-16">
              <p className="text-lg md:text-3xl font-black">
                Website em atualização
              </p>
              <p className="text-lg md:text-3xl font-black">
                Enquanto isso, nos acompanhe pelo LinkedIn!
              </p>
            </div>
            <div className="flex items-center text-white gap-2 border-2 bg-[#0072b1] rounded-md p-2 hover:scale-110 duration-300 text-xl md:text-4xl hover:cursor-pointer">
              <a
                href="https://www.linkedin.com/company/104602728"
                target="_blank"
                rel="author"
              >
                LinkedIn
              </a>
              <LinkedinLogoIcon size={50} />
            </div>
            <div className="text-emerald-500 flex items-center justify-center gap-2 text-lg md:text-3xl">
              <WhatsappLogoIcon size={40} />
              <p className="text-[#05256F]">(11) 94276-9097</p>
            </div>
            <div className="text-black flex items-center justify-center gap-2 text-lg md:text-3xl">
              <EnvelopeOpenIcon size={40} />
              <p className="text-[#05256F]">
                contato@observatoriodofomento.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
