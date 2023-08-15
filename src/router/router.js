import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import App from "../App";
import About from "../components/About"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        // children: [
        //     {
        //         path: "About/",
        //         element: <About />,
        //     },
        // ],
    },
    {
        path: "About/",
        element: <About />,
        errorElement: <ErrorPage />
    }
]);

export default router;
//   