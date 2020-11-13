import React from 'react'
import './work.css'

export default props => (
  <div className="porfolio-item">
    <h2 className="portfolio-item-title">{props.title}</h2>
    <a href={props.liveLink} target="_blank" rel="noreferrer">
      <img src={props.imgSrc} alt={props.imgAlt} height="500px" />
    </a>
    <p className="portfolio-item-timeline">{props.timeline}</p>
    <p className="portfolio-item-text">
      <i className="fa fa-angle-double-right" />
      {props.body}
    </p>
    <ul className="portfolio-item-list">
    { props.bulletOne ? (
      <li>{props.bulletOne}</li>
    ): null}
        { props.bulletTwo? (
      <li>{props.bulletTwo}</li>
        ) : null }
      { props.bulletThree ? (
      <li>{props.bulletThree}</li>
      ): null }
           { props.bulletFour ? (
      <li>{props.bulletFour}</li>
      ): null }
           { props.bulletFive? (
      <li>{props.bulletFive}</li>
      ): null }
      {props.children}
    </ul>
    <ul className="portfolio-links">
      { props.githubLink ? (
      <li className="portfolio-item-link">
        <a href={props.githubLink} target="_blank">
          <i className="icon fa fa-github fa-2x" />
        </a>
      </li>
      ): null }
      { props.liveLink ? (
      <li className="portfolio-item-link">
        <a href={props.liveLink} target="_blank">
          <i className="fa fa-desktop fa-2x" />
        </a>
      </li>
      ): null }
      { props.readmeLink ? (
      <li className="portfolio-item-link">
        <a href={props.readmeLink} target="_blank">
          <i className="fa fa-book fa-2x" />
        </a>
      </li>
      ):null}
    </ul>
  </div>
)
