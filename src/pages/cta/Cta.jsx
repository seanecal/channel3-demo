import './cta.css'

export function Cta() {
  return(
    <div className="wf__cta">
      <div className="wf__cta-content">
        <p>If you want to follow up or collaborate---</p>
        <h3>Let us keep in touch</h3>
      </div>
      <div className="wf__cta-btn">
        <a href="mailto:caosen.cn@gmail.com">
          <button type='button'>Contact me</button>
        </a>
      </div>
    </div>
  )
}
