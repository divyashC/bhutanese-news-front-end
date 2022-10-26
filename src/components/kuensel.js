import React from "react";
import { useState, useEffect } from "react";
import "../assets/css/kuensel.css";

export default function kuensel() {
	const [data, setData] = useState([]);
	var api = "https://bhutanese-news.herokuapp.com/Kuensel";
	useEffect(() => {
		fetch(api)
			.then((response) => response.json())
			.then((data) => {
				setData(data);
			});
	}, []);

	return (
		<div className="news_container">
			{data.map((news) => (
				<div className="card">
					<div className="title">
						<h2>{news.title.replace("&#8211;", "-")}</h2>
					</div>
					<div className="date">
						<p>
							<i class="bi bi-stopwatch"></i>
							{" " + news.date}
						</p>
					</div>
					<div className="link">
						<a href={news.link} target="_blank" rel="noreferrer noopener">
							Read Full Story
						</a>
					</div>
				</div>
			))}
		</div>
	);
}
