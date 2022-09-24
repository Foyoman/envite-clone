import React from 'react'
import screenshot from '../images/header-screenshot.webp'
import Typed from 'react-typed'

export default function Header() {
	return (
		<div className='header'> 
			<div className='container'>
				<div className='screenshot-container'>
					<img className='screenshot' src={ screenshot } alt="header screenshot" />
				</div>
				<div className='content right-flex header-container'>
					<div className='content-container right-flex'>
						<div className='primary-text right-align'>
							<p>
								<span style={{ display: 'block' }}>Imagine if</span>  
								<span className='red'>
									<Typed 
										strings={[
											"Instagram",
											"Snapchat",
											"WhatsApp", 
											"Messenger",
											"Discord",
											"Twitter",
											"Group chats",
										]}
										typeSpeed={50}
										backSpeed={20}
										backDelay={3000}
										loop
									/>
								</span> 
								had events.
							</p>
						</div>
						<div className='subheading'>
							<p>Easily host and share events with your friends across any social media.</p>
						</div>
						<button className='gradient-button'>
							🎉 Create my event
						</button>
					</div>
				</div>
			</div>
	  </div>
	)
}
