import React from 'react';
import texts from '../images/texts-screenshot.webp';

export default function Texts() {
	return (
		<div className='texts'>
			<div className='container create-container'>
				<div className='create-content'>
					<div className='content-container'>
						<p className='primary-text create-text'>
							<span style={{ display: 'block' }}>Never miss a</span>
							<span style={{ display: 'block' }}>
								thing with {" "}
								<span className='red'>
									text
								</span>
							</span>
							<span style={{ display: 'block' }}>
								<span className='red'>notifications.</span>
							</span>
						</p>
						<button className='gradient-button' style={{ whiteSpace: 'nowrap' }}>👀 Slide into my DM's</button>
					</div>
				</div>
				<div className='screenshot-container'>
					<img className='texts-screenshot' src={ texts } alt="create your event screenshot" />
				</div>
			</div>
		</div>
	)
}
