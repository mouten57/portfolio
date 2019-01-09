import React from 'react'
import './work.css'

export default props => (
  <div className="porfolio-item">
    <h1 className="portfolio-item-title">{props.title}</h1>
    <a href={props.liveLink}>
      <img src={props.imgSrc} alt={props.imgAlt} />
    </a>
    <p className="portfolio-item-timeline">{props.timeline}</p>
    <p className="portfolio-item-text">{props.body}</p>
    <ul className="portfolio-item-list">
      <li>{props.bulletOne}</li>
      <li>{props.bulletTwo}</li>
      <li>{props.bulletThree}</li>
      {props.children}
    </ul>
    <ul className="portfolio-links">
      <li className="portfolio-item-link">
        <a href={props.githubLink}>
          <i className="icon fa fa-github fa-2x" />
        </a>
      </li>
      <li className="portfolio-item-link">
        <a href={props.liveLink}>
          <i className="fa fa-desktop fa-2x" />
        </a>
      </li>
      <li className="portfolio-item-link">
        <a href={props.readmeLink}>
          <i className="fa fa-book fa-2x" />
        </a>
      </li>
    </ul>
  </div>
)
