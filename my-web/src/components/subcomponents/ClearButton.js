import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const ClearButton = (props) => {
	return (
		<button type="button" className='btn btn-warning' onClick={() => props.handleClick()}
			style={{
				width: "100%",
				height: "50px",
				fontSize: "1.5rem",
				margin: "2.5px"
			}}>
			{props.children}
		</button>
	);
}

export default ClearButton;