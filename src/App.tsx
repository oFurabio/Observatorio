import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
        <Home />
      </div>
      <Footer />
    </>
  )
}

export default App
