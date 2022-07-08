import React from 'react';

//props = all elements between the tag <Scroll> in the App will be in props.shildren
const Scroll = (props) => {
	return (
		<div style={{ overflowY:'scroll', border: '1px solid black', height: '500px' }}>
			{props.children}
		</div>
	)
};

export default Scroll;