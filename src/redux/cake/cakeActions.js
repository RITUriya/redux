const BUY_CAKE = "BUY_CAKE";
export const buyCake = (number = 1) => {
	//action creator
	return { type: BUY_CAKE, payload: number };
};
