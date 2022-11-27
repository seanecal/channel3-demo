import './header.css'
import {Navbar} from '../../components'

export function Header() {
  return(
    <div className="w3__header section__padding">
      <Navbar />
      <div className="w3__header-container">
        <div className="w3__header-left"></div>
        <div className="w3__header-right"></div>
      </div>
    </div>
  )
}
