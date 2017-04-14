import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import '../styles/landing.scss';

export default class LandingPage extends Component {

	constructor(props){
		super(props);
		this.handleClickWaitlist = this.handleClickWaitlist.bind(this);
	}

	handleClickWaitlist () {
		const user = this.refs.email.getValue().trim();
		const creds = { email: user};
		this.props.onWaitlistClick(creds);
	}

	render() {

		const { errorMessage } = this.props;

		let successMessage = '';

		return (
			<div className='landing'>
			<div id='cbp-fbscroller' className='cbp-fbscroller'>
			<nav>
				<a href='#fbsection1' className='cbp-fbcurrent'>Section 1</a>
				<a href='#fbsection2'>Section 2</a>
				<a href='#fbsection3'>Section 3</a>
				<a href='#fbsection4'>Section 4</a>
				<a href='#fbsection5'>Section 5</a>
			</nav>
			{successMessage}
			{errorMessage}

			<section id='fbsection1'>
				<div className='nav'>
					<a href='#fbsection2'>About Us</a>
					<a href='#fbsection3'>Designers</a>
					<a href='#fbsection4'>Coming Soon</a>
					<a href='#fbsection5'>Contact Us</a>
				</div>
				
				<Link to={'/login'} className='login_but'>Login</Link>

				<Link to={'/'} className='title_ref'>
				<div className = 'title'>
					<h1>Émotif </h1>
					<h2> Designer Clothes, made for you. </h2>
				</div>
				</Link>

				<Link to={'/signup'} className='link'> Get Started </Link>

			</section>

			<section id='fbsection2'>
				<div className = 'ex_con'>
					<h2>How does this work? </h2>
					<a className='step' href='http://www.emotif-us.com'>
						<img src={require('../../images/woman.png')} className='step_img1'></img>
						<div id='step1'>
							<h4>Inputing your body type </h4><p> Go through our seamless 30 second form to give us a better idea of what you look like.</p>
						</div>
					</a>

					<a className='step' href='http://www.emotif-us.com'>
						<img className='step_img2' src={require('../../images/designer_icon.png')}></img>
						<div id='step2'> 
							<h4>Browse Designer Collections</h4><p> The designers that work with us have designed their clothing line specifically for your figure.</p>
						</div>
					</a>

					<a className='step' href='http://www.emotif-us.com'>
						<img className='step_img3' src={require('../../images/shopping.png')}></img>
						<div id='step3'>
							<h4>Pre-Order and Profit</h4><p> Pre-order and get 20% off. Or wait for retail season and get your clothes faster. </p>
						</div>
					</a>

				</div>

			</section>

			<section id='fbsection3'>
				<div className = 'design_con'>

					<div className='designer' id='desi1'> SongZio </div>
					<div className='designer' id='desi2'> Comme Des Garcons</div>
					<div className='designer' id='desi3'> Altazurra </div>
					<div className='designer' id='desi4'> Others</div>

				</div>

			</section>

			<section id='fbsection4'>
				<div className = 'new_con'>
					<div className='art_text'>
							<h2> Coming Soon </h2>
							<h3> Designers currently creating a line with Émotif </h3>
							
							<p>ROSINA MAE</p>
							<p>REIN LONDON</p>
							<p>KAER</p>
							<p>CHANHO JANG</p>
							<p>GRACIELA RIVAS</p>
							<p>ALLEB ASOR</p>
							<p>JOVAN OCONNOR</p>

						</div>

					<div className='art'>
						<img src={require('../../images/fashion10.jpg')}/>
						<img src={require('../../images/fashion11.jpg')}/>
					</div>
				</div>
			</section>

			<section id='fbsection5'>
				<div className = 'contact_con'>
					<h2>Contact Us</h2>
					<a className='contact' href='http://www.emotif-us.com'>
						<div className='contact_img'> Press</div>
					</a>

					<a className='contact' href='http://www.emotif-us.com'>
						<div className='contact_img'> Designers </div>
					</a>

					<a className='contact' href='http://www.emotif-us.com'>
						<div className='contact_img'> Customers </div>
					</a>

					<div className='footer'>
						<p>FAQ</p>
						<p>Careers</p>
						<p>Policies</p>
						<p>Help</p>
						<p>Manufacturing</p>
					</div>

				</div>

			</section>
		</div>
		</div>
		);
	}

}

LandingPage.propTypes = {
	onWaitlistClick: PropTypes.func.isRequired,
	errorMessage: PropTypes.string
};
