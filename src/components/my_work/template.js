import React from 'react';
import './work.css';

export default (props) => (
	<div className="porfolio-item">
		<h1 className="portfolio-item-title">{props.title}</h1>
		<a href={props.liveLink} target="_blank">
			<img src={props.imgSrc} alt={props.imgAlt} />
		</a>
		<p className="portfolio-item-timeline">{props.timeline}</p>
		<p className="portfolio-item-text">
			<i className="fa fa-angle-double-right" />
			{props.body}
		</p>
		<ul className="portfolio-item-list">
			<li>{props.bulletOne}</li>
			<li>{props.bulletTwo}</li>
			<li>{props.bulletThree}</li>
			{props.children}
		</ul>
		<ul className="portfolio-links">
			<li className="portfolio-item-link">
				<a href={props.githubLink} target="_blank">
					<i className="icon fa fa-github fa-2x" />
				</a>
			</li>
			<li className="portfolio-item-link">
				<a href={props.liveLink} target="_blank">
					<i className="fa fa-desktop fa-2x" />
				</a>
			</li>
			<li className="portfolio-item-link">
				<a href={props.readmeLink} target="_blank">
					<i className="fa fa-book fa-2x" />
				</a>
			</li>
		</ul>
	</div>
);
