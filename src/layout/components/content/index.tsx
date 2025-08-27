import { Outlet } from "react-router"
import "./index.scss"

const Content = () => {
  return <div className="main-content">
    <Outlet />
  </div>
}

export default Content