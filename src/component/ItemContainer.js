import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
import { buyIcecream } from "../redux/iceCream/iceCreamActions";

const ItemContainer = (props) => {
	return (
		<div>
			<h2>Item-{props.item}</h2>
			<button onClick={props.buyItem}>Buy Items</button>
		</div>
	);
};
const mapStateToProps = (state, ownProps) => {
	const itemState = ownProps.cake
		? state.cake.numOfCakes
		: state.icecream.numOfIceCream;

	return { item: itemState };
};
const mapDispatchToProps = (dispatch, ownProps) => {
	const disPatchFunction = ownProps.cake
		? () => dispatch(buyCake())
		: () => dispatch(buyIcecream());
	return { buyItem: disPatchFunction };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
//export default connect(null, mapDispatchToProps)(ItemContainer);
