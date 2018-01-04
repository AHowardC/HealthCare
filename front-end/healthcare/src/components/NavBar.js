import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component{
	constructor(){
		super();
	}

	render(){

		return(
			<div id="navbar">
				<nav className="navbar navbar-fixed-top">
			  		<div className="container-fluid navbar-white">
				    		<ul className="nav navbar-nav">
				    			<li><Link to="/">Home</Link></li>
                  <li><Link to="/register">Register</Link></li>
				    		</ul>
			    	</div>
			    </nav>
			</div>
		)
	}
}

export default NavBar;
