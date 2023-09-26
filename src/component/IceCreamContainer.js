import React from "react";
import { connect } from "react-redux";
import { buyIcecream } from "../redux/iceCream/iceCreamActions";
const IceCreamContainer = (props) => {
	return (
		<div>
			<h2>Num Of IceCream:{props.numOfIceCream}</h2>
			<button onClick={props.buyIcecream}> Buy IceCream</button>
		</div>
	);
};
const mapStateToProps = (state) => {
	// read about it
	return { numOfIceCream: state.icecream.numOfIceCream };
};

const mapDispatchToProps = (dispatch) => {
	//read it about it as well
	return { buyIcecream: () => dispatch(buyIcecream()) };
};
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
