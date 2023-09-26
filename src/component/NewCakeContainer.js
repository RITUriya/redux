import React, { useState } from "react";
import { buyCake } from "../redux/cake/cakeActions";
import { connect } from "react-redux";

const NewCakeContainer = (props) => {
	const [number, setNumber] = useState(1);
	return (
		<div>
			<h2>Number of Cakes: {props.numOfCakes}</h2>

			<input
				type="text"
				value={number}
				onChange={(e) => setNumber(e.target.value)}
			/>
			<button onClick={() => props.buyCake(number)}>Buy {number} Cakes</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	// read about it
	return { numOfCakes: state.cake.numOfCakes };
};

const mapDispatchToProps = (dispatch) => {
	//read it about it as well
	return { buyCake: (number) => dispatch(buyCake(number)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
