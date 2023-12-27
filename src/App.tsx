import { Test } from "./Test";
import { Home } from "./components/pages/Home";

function App() {
    return (
        <>
            <h1>Hello, MyPortfolio!!</h1>
            <Home />
            <Test text={"This is Test component."} />
        </>
    );
}

export default App;