import React from 'react';
import invite from '../images/invite-screenshot.webp';

export default function Invite() {
	return (
		<div className='invite'>
			<div className='container invite-container'>
				<div className='screenshot-container'>
					<img className='screenshot' src={ invite } alt="invite screenshot" />
				</div>
				<div className='content right-flex header-container'>
					<div className='content-container right-flex'>
						<div className='primary-text right-align'>
							<p>
								<span style={{ display: 'block' }}>Invite your</span>
								<span style={{ display: 'block' }}>friends from</span>  
								<span className='red' style={{ display: 'block' }}>any social media</span>
								<span className='red'>platform</span>.
							</p>
						</div>
						<button className='gradient-button'>
							🥳 Start sharing
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
