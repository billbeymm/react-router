import { Nav } from "../../components/nav"
import { Footer } from "../footer"
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <Nav />

      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}