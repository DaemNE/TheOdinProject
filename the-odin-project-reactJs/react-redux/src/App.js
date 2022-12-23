import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksCookieContainer from "./components/HooksCookieContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
