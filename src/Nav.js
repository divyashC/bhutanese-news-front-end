import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./assets/css/nav.css";
import logo from "./assets/images/logo_full.png";
import Home from "./components/home";
import Kuensel from "./components/kuensel";
import TheBhutanese from "./components/thebhutanese";

export default class Nav extends Component {
	render() {
		return (
			<Router>
				<header>
					<Link className="logo" to="/">
						<img className="logo_img" src={logo} alt="Bhutan News" />
					</Link>
					<nav>
						<ul>
							<li>
								<Link className="link_effect" to="/">
									Home
								</Link>
							</li>
							<li>
								<Link className="link_effect" to="/thebhutanese">
									The Bhutanese
								</Link>
							</li>
							<li>
								<Link className="link_effect" to="/kuensel">
									Kuensel
								</Link>
							</li>
						</ul>
					</nav>
				</header>
				<div className="routes">
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/thebhutanese" element={<TheBhutanese />} />
						<Route path="/kuensel" element={<Kuensel />} />
					</Routes>
				</div>
			</Router>
		);
	}
}
