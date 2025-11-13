function Footer() {
    let currentYear = new Date().getFullYear()

    return (
        <>
        <div className="flex justify-center bg-purple-700 text-white">
            <div className="container flex flex-col items-center py-4">
                <p className="text-xl font-bold">Observatório do Fomento | Copyright: {currentYear}</p>
                <p className="text-lg">Redes Sociais</p>
                <div className="flex gap-2">
                    Facebook
                    LinkedIn
                    Instagram
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer