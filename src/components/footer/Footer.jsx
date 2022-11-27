import './footer.css'
import logo from '../../assets/c3-logo.png'

export function Footer() {
  return(
    <div className="wf__footer">
    <div className="wf__footer-links section__padding ">
      <div className="wf__footer-links_logo">
        <img src={logo} alt="channel3 logo" />
        <p>All Rights Reserved</p>
      </div>
      <div className="wf__footer-links_div">
        <h4>Contact</h4>
        <p>Email</p>
        <p>FaceBook</p>
        <p>Other Social Media</p>
      </div>
      <div className="wf__footer-links_div">
        <h4>Regulations</h4>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
      <div className="wf__footer-links_div">
        <h4>It starts here</h4>
        <p>Tel Aviv, Israel</p>
        <p>Project initialized by Sen Cao</p>
        <a href="mailto:caosen.cn@gmail.com">
          <p>caosen.cn@gmail.com</p>
        </a>
      </div>
    </div>
    <div className="wf__footer-copyright">
      <p>@2023 Channel 3. All rights reserved.</p>
    </div>
  </div>
  )
}
