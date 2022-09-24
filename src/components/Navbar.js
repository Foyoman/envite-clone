import React from 'react'
import icon from '../images/icon.jpeg'

export default function Navbar() {
	return (
		<div className='navbar'>
			<div className='logo'>
				<img src={ icon } alt="envited logo" />
				envited
			</div>
			<button className='login-signup'>
				Login / Signup
			</button>
		</div>
	)
}
