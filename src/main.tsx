import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router.tsx";
import { BasicLayout } from "./components/templates/BasicLayout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ChakraProvider>
            <BasicLayout>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </BasicLayout>
        </ChakraProvider>
    </React.StrictMode>,
);