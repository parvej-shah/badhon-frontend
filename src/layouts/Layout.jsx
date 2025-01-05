import { Outlet } from 'react-router-dom'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
export default function Layout() {
  return (
    <div className='bg-bgEnd'>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
