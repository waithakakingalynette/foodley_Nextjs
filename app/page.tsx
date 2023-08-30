import Image from 'next/image'
import Landing from './Companents/landing'
import Navbar from './Companents/navigation'
import Categories from './Companents/category'
import Menu from './Companents/menu'
import Footer from './Companents/footer'

export default function Home() {
  return (
     <main >
      <Navbar/>
     <Landing/>
     <Categories/>
     <Menu/>
     <Footer/>
    </main>
  )
}
