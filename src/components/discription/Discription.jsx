import './discription.css'
import line from '../../assets/line.png'

export function Discription() {
  return(
    <div className="w3__body__discription">
      <div className="w3__body-title">
        <h3>Everyone is a journalist</h3>
        <img src={line} alt="" />
      </div>
      <p>
        Channel 3's vision is to explore the possibility of Web 3.0 in changing the traditional news and social media.
        <br />
        <br />
        Centralized news has its downsides, it could be great if the news can stay pure - <b>as informative, brief and transparent</b> - no more opinion-swaying editorials when people just are trying to know what exactly happened.
        <br />
        <br />
        Channel 3 will bring people together to encourage them to be the journalists in their own life, the captured moments will be shown on the platform as their pure original forms and all perspectives will be summed up by the AI to present the world the <b>truly unbaised news</b>.
      </p>
    </div>
  )
}
