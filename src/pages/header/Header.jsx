import './header.css'
import {Navbar} from '../../components'
import butterfly_left from '../../assets/logo-left.png'
import butterfly_right from '../../assets/logo-right.png'
import hero from '../../assets/c3-hero.png'
import line from '../../assets/line.png'

export function Header() {
  return(
    <div className="w3__header section__padding gradient-bg">
      <Navbar />
      <div className="w3__header-container">
        <div className="w3__header-leftcontainer">
          <div className="w3__header-left">
            <div className='w3__header-left__left'>
              <img src={butterfly_left} alt="" />
            </div>
            <div className='w3__header-left__right'>
                <img src={butterfly_right} alt="" />
            </div>
          </div>
          <button data-hover="and make a voice" type='button'>
            <div>Join</div>
          </button>
        </div>
        <div className="w3__header-right">
          <div className="w3__header-right__hero">
            <img src={hero} alt="a man recording with his phone" />
          </div>
          <div className="w3__header-right__text">
            <h3>Everyone is a journalist</h3>
            <img src={line} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
