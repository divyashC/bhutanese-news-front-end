import React, { Component } from "react";
import "../assets/css/home.css";

export default class home extends Component {
	render() {
		return (
			<div className="homepage">
				<div class="how_it_works">
					<h1>How it works?</h1>
					<ul class="steps">
						<li>
							<span>
								<h1>
									<i class="bi bi-hdd-network"></i>
								</h1>
							</span>
							<h2>ASP.NET Core 6</h2>
							An API has been created with ASP.NET Core 6. This API scrapes all
							news from The Bhutanese and Kuensel and shares its title and link
							through web API.
						</li>
						<li>
							<span>
								<h1>
									<i class="bi bi-server"></i>
								</h1>
							</span>
							<h2>Heroku</h2>
							The ASP.NET project is hosted on Heroku. Heroku is a cloud
							platform as a service supporting several programming languages.
							The API is now accessible through the internet, using{" "}
							<a href="https://bhutanese-news.herokuapp.com/">
								https://bhutanese-news.herokuapp.com
							</a>{" "}
							as the base URL.
						</li>
						<li>
							<span>
								<h1>
									<i class="bi bi-globe"></i>
								</h1>
							</span>
							<h2>React Website</h2>
							The title and link of the news are fetched from the API and
							displayed on the website built with React. The website is hosted
							on Netlify.
						</li>
					</ul>
				</div>
				<div class="about">
					<h1>About</h1>
					<p>
						This website is just created for learning purpose to scrape contents
						from other sites and share it through an API. I dont intend to earn
						or generate any profit from this site by displaying contents or the
						works published by The Bhutanese or Kuensel. None of the contents,
						(appropriate or innappropriate) in this site is uploaded by me. All
						data comes from The Bhutanese and Kuensel's website. I dont have any
						rights to the contents. I am just using their contents to learn
						about scraping contents and passing it through API. I am not
						responsible for any of the contents in this website. If you have any
						issues with the contents, please contact the respective owners of
						the contents.
					</p>
					<p>
						The information contained in this website is for general information
						purposes only. The information is provided just for learning
						purposes and while we endeavour to keep the information up to date
						and correct, I make no representations or warranties of any kind,
						express or implied, about the completeness, accuracy, reliability,
						suitability or availability with respect to the website or the
						information, products, services, or related graphics contained on
						the website for any purpose.
					</p>
					<p>
						In no event will I be liable for any loss or damage including
						without limitation, indirect or consequential loss or damage, or any
						loss or damage whatsoever in connection with, the use of this
						website. Through this website you are able to link to other websites
						which are not under the control of me. I have no control over the
						nature, content and availability of those sites. The inclusion of
						any links does not necessarily imply a recommendation or endorse the
						views expressed within them.
					</p>
				</div>
			</div>
		);
	}
}
