import { BaseLayout } from "./components/templates/BaseLayout";
import { Router } from "./router/Router";

function App() {
    return (
        <>
            <BaseLayout>
                <Router />
            </BaseLayout>
        </>
    );
}

export default App;