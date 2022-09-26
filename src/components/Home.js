import React from 'react';
import Header from './Header';
import Create from './Create';
import Invite from './Invite';
import Texts from './Texts';
import Party from './Party';
import Footer from './Footer';

export default function Home() {
	return (
		<div id='container'>
			<section className='one'>
				<Header />
			</section>
			<section className='two'>
				<Create />
			</section>
			<section className='three'>
				<Invite />
			</section>  
			<section className='four'>
				<Texts />
			</section>
			<section className='five'>
			 	<Party />
			</section>
			<section className='six'>
				<Footer />
			</section>
		</div>
	)
}
