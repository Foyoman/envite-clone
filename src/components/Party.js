import React from 'react';
import Typed from 'react-typed';

export default function Party() {
	return (
		<div className='party'>
			<div className='party-container'>
				<div className='party-content'>
					<p className='primary-text'>
						Ready to party?
						<span style={{ display: 'block' }}>
							Create your next
						</span>
						<span className='red' style={{ display: 'block', marginBottom: '40px' }}>
							<Typed 
								strings={[
									"movie night",
									"birthday party",
									"games night", 
									"picnic",
									"dinner",
									"house party",
									"lowkey gatho",
									"networking event",
									"drinks night"
								]}
								typeSpeed={50}
								backSpeed={20}
								backDelay={3000}
								loop
							/>
							👇
						</span>
					</p>
					<button style={{ margin: '0' }} className='gradient-button'>🎉 Create my event</button>
				</div>
			</div>
		</div>
	)
}
