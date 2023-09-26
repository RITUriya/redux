import "./App.css";
import CakeContainer from "./component/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeConatiner from "./component/HooksCakeContainer";
import IceCreamContainer from "./component/IceCreamContainer";
import NewCakeContainer from "./component/NewCakeContainer";
import ItemContainer from "./component/ItemContainer";
import UserContainer from "./component/UserContainer";
function App() {
	return (
		<Provider store={store}>
			<div className="App">
				{/* <HooksCakeConatiner />
				<CakeContainer />
				<IceCreamContainer />
				<NewCakeContainer />
				<ItemContainer cake />
				<ItemContainer /> */}
				<UserContainer />
			</div>
		</Provider>
	);
}

export default App;
