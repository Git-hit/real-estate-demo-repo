import { createBrowserRouter } from "react-router";
import Home from "./pages/home";
import PrivacyPolicy from "./pages/privacy-policy";
import TermsAndCo from "./pages/terms-and-co";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/privacy-policy',
        element: <PrivacyPolicy />
    },
    {
        path: '/terms-and-co',
        element: <TermsAndCo />
    }
])