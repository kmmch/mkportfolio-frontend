import { ChakraProvider } from '@chakra-ui/react'
import { BaseLayout } from "./components/templates/BaseLayout";
import { Router } from "./router/Router";

function App() {
    return (
        <>
            <ChakraProvider>
                <BaseLayout>
                    <Router />
                </BaseLayout>
            </ChakraProvider>
        </>
    );
}

export default App;