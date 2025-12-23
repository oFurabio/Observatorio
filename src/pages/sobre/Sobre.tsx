function Sobre() {
  const contentContainer = `flex flex-col md:flex-row gap-2 bg-white rounded-2xl mx-8 text-2xl md:mx-16 md:text-3xl`;
  const contentHeader = `bg-blue-950 text-white rounded-t-xl md:rounded-r-none md:rounded-l-xl p-2 flex items-center justify-center md:min-w-36 font-bold`;
  const contentText = `bg-gray-100 rounded-b-xl md:rounded-l-none md:rounded-r-xl p-2 text-justify`;

  return (
    <div className="bg-gray-300 min-h-[84vh] p-2">
      <div className="flex flex-col gap-8 items-center">
        <h1 className="mt-8 text-4xl md:text-6xl font-black text-blue-900">QUEM SOMOS</h1>

        <div className={contentContainer}>
          <h2 className={contentHeader}>Missão</h2>
          <p className={contentText}>
            Contribuir para o fortalecimento do ecossistema global de fomento à
            inovação, por meio da pesquisa científica, capacitação técnica do
            mercado e do desenvolvimento de ferramentas que garantam
            transparência e eficiência na alocação de recursos.
          </p>
        </div>

        <div className={contentContainer}>
          <h2 className={contentHeader}>Atuação</h2>
          <p className={contentText}>
            O Observatório do Fomento atua de forma independente, assegurando
            isenção técnica em suas análises e equidistância entre financiadores
            e beneficiários, focando estritamente na qualidade e viabilidade dos
            projetos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
