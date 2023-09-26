import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
import { buyIcecream } from "../redux/iceCream/iceCreamActions";

const HooksCakeConatiner = () => {
	const numOfCakes = useSelector((state) => state.cake.numOfCakes);
	const dispatch1 = useDispatch();
	const dispatch2 = useDispatch();
	const numOfIcecream = useSelector((state1) => state1.icecream.numOfIcecream);

	return (
		<div>
			<h2>Num of Cakes: {numOfCakes}</h2>
			<button onClick={() => dispatch1(buyCake())}>Buy Cake</button>

			<h2>No of IceCream: {numOfIcecream}</h2>
			<button onClick={() => dispatch2(buyIcecream())}>Buy Icecream</button>
		</div>
	);
};

export default HooksCakeConatiner;
