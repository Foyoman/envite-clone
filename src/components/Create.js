import React from 'react'
import create from '../images/create-screenshot.webp'

export default function Create() {
	return (
		<div className='create'>
			<div className='container create-container'>
				<div className='create-content'>
					<div className='content-container'>
						<p className='primary-text create-text'>
							Create your 
							<span style={{ display: 'block' }}>event in</span>
							<span style={{ display: 'block' }}>
								<span className='red'>2 minutes</span>
								.
							</span>
						</p>
						<button className='gradient-button'>🤗 Get started</button>
					</div>
				</div>
				<div className='screenshot-container'>
					<img className='screenshot' src={ create } alt="create your event screenshot" />
				</div>
			</div>
		</div>
	)
}
