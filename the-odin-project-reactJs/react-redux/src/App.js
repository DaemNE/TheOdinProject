import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import CookieContainer from "./components/CookieContainer";
import HooksCookieContainer from "./components/HooksCookieContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <CookieContainer />
        <HooksCookieContainer />
      </div>
    </Provider>
  );
}

export default App;
