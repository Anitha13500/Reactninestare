import React from 'react';
import About from '../About/About';
import "./Home.css";

const Home = () => {
  return (
    <div>
		<header id="header" class="container-fluid fixed-top">
        <div className="row">
		<nav className="navbar navbar-expand-lg navbar-light bg-white d-flex justify-content-center py-2 shadow	 p-2">
			<div className="container">
				<a className="navbar-brand fs-3" href="#">Ninestars</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>
				
				<div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
					 <ul className="navbar-nav">
							<li className="nav-item">
							  <a className="nav-link active px-1" aria-current="page" href="#Home">Home</a>
							</li>
							<li className="nav-item">
							  <a className="nav-link px-3" href="#About">About us</a>
							</li>
							<li className="nav-item">
							  <a className="nav-link px-3" href="#Services">Services</a>
							</li>
							<li className="nav-item">
							  <a className="nav-link px-3" href="#Portfolio">Portfolio</a>
							</li>
							<li className="nav-item">
							  <a className="nav-link px-3" href="#Team">Team</a>
							</li>
							<li className="nav-item dropdown">
							  <a className="nav-link dropdown-toggle px-3" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Dropdown link
							  </a>
							  <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								<li><a className="dropdown-item" href="#">Drop Down 1</a></li>
								<li><a className="dropdown-item" href="#">Deep Drop Down</a></li>
								<li><a className="dropdown-item" href="#">Drop Down 2</a></li>
								<li><a className="dropdown-item" href="#">Drop Down 3</a></li>
								<li><a className="dropdown-item" href="#">Drop Down 4</a></li>
							  </ul>
						</li>
						<li className="nav-item px-2">
							<a className="nav-link" href="#Contact">Contact</a>
						</li>
						<a type="button" className="btn btn rounded-pill px-4 started" href="#abt">Get Started</a>
					</ul>
				</div>
			</div>
		</nav>
	</div>
	</header>
    
		<div className="page1">
			<section className="container">
				<div className="row ">
					<div className="col-sm-12 col-md-12 col-lg-6 order-1 order-lg-1" id="Home">
						<div className="head">
							<h1>Bettter digital experience with Ninestars</h1>
							<p>We are team of talented designers making websites with Bootstrap</p>
							<button type="button">Get Started</button>
						</div>
					</div>
					<div className="col-sm-12 col-md-12 col-lg-6 order-0 order-lg-1 ">
						<img className="img1"src="https://bootstrapmade.com/demo/templates/Ninestars/assets/img/hero-img.svg" width="100%"></img>
					</div>
				</div>
			</section>
		</div>
			<About />

    </div>
  )
}

export default Home
