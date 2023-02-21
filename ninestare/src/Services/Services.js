import React from 'react';
import Portfolio from '../Portfolio/Portfolio';
import "./Services.css";

const Services = () => {
  return (
    <div>
        <div className="page3">
			<section className="container">
				<div className="service" id="Services">
					<h3>Services</h3>
					<h1>Check out the great services we offer</h1>
				</div>
					<div className="row">
						<div className="col-sm-12 col-md-6 col-lg-3 ">
							<div className="ipsum shadow-sm">
								<iconify-icon icon="bxl:dribbble"></iconify-icon>
								<h5>Lorem Ipsum</h5>
								<p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
							</div>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-3 ">
							<div className="ipsum shadow-sm">
								<iconify-icon icon="bx:file"></iconify-icon>
								<h5>Sed ut perspiciatis</h5>
								<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
							</div>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-3 ">
							<div className="ipsum shadow-sm">
								<iconify-icon icon="bx:tachometer"></iconify-icon>
								<h5>Magni Dolores</h5>
								<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</p>
							</div>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-3 ">
							<div class="ipsum shadow-sm">
								<iconify-icon icon="bx:world"></iconify-icon>
								<h5>Nemo Enim</h5>
								<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
							</div>
						</div>
					</div>
				
			</section>
		</div>
        <Portfolio />
    </div>
  )
}

export default Services
