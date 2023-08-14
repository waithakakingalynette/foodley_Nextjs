import Image from 'next/image'
import Landing from './landing/page'
import Navbar from './navigation/page'
import Categories from './category/page'
import Menu from './menu/page'
import Discount from './discount/page'
import Footer from './footer/page'

export default function Home() {
  return (
     <main >
      <Navbar/>
     <Landing/>
     <Categories/>
     <Menu/>
     <Discount/>
     <Footer/>
    </main>
  )
}
