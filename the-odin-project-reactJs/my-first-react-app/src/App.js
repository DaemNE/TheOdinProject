import {Header} from "./components/Header"
import {Home} from "./components/Home"


function App() {

    const homeLink = "home"

    function onGreet() {
        alert("hello")
    }

    return (
        <div className="container">
         <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
                <Header homeLink={homeLink}/>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
                <Home 
                    name="Max" 
                    initialAge={27} 
                    greet={onGreet}
                />
            </div>
        </div>
        </div>
    );
}

export default App;
