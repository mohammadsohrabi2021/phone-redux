import {createBrowserRouter} from "react-router-dom";
import Home from '../Pages/home';
import FormPage from '../Pages/formPage'
import SinglePage from '../Pages/singePage';
import Layout from '../Layout/Layout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: "/addContact",
                element: <FormPage/>,
            },
            {
                path: "/updateContact/:ContactId",
                element: <FormPage/>,
            },
            {
                path: "/contacts/:ContactId",
                element: <SinglePage/>,
            },
        ]
    }
]);

export default router