import { ChakraProvider } from '@chakra-ui/react'
import { BaseLayout } from "./components/templates/BaseLayout";
import { Router } from "./router/Router";
import { Theme } from './theme/Theme';

function App() {
    return (
        <>
            <ChakraProvider theme={Theme}>
                <BaseLayout>
                    <Router />
                </BaseLayout>
            </ChakraProvider>
        </>
    );
}

export default App;