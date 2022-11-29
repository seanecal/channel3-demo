import './body.css'
import { Discription } from '../../components'
import { Parallax } from 'react-parallax'

export function Body() {
  return(
    <Parallax className="content" strength={800}>
      <div className="c3__body section__padding">
         <Discription />
      </div>
    </Parallax>
  )
}
