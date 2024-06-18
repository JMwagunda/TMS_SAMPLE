import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home.jsx";
import Listing from "../Pages/Listing/Listing.jsx";
import Error from "../components/Error/Error.jsx";
import AddProperty from "../Pages/AddProperty/AddProperty.jsx";
import Bookings from "../Pages/Bookings/Bookings.jsx";
import Favourites from "../Pages/Favourites/Favourites.jsx";
import Layout from "../Pages/Layout/Layout.jsx";

const router = createBrowserRouter([

    {
        path: "/",
        element: <Layout />,
        children:[
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/listing",
                element: <Listing />,
            },
            {
                path: "/addproperty",
                element: <AddProperty />,
            },
            {
                path: "/bookings",
                element: <Bookings />,
            },
            {
                path: "/favourites",
                element: <Favourites />,
            },
            {
                path: "*",
                element: <Error />,
            },
        ]
    },
    
]);

export default router;
