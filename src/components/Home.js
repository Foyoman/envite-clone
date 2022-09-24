import React from 'react';
import Header from './Header';
import Create from './Create';
import Invite from './Invite';
import Texts from './Texts';
import Party from './Party';
import Footer from './Footer';

export default function Home() {
	return (
		<div>
			<Header />
			<Create />
			<Invite />
			<Texts />
			<Party />
			<Footer />
		</div>
	)
}
