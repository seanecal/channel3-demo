import './navbar.css'
import logo from '../../assets/c3-text.png'

export function Navbar() {
  return(
    <div className="w3__navbar">
      <div className="w3__navbar-logo">
        <img src={logo} alt="" />
      </div>
    </div>
  )
}
