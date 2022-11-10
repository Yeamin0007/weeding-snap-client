import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layouts/Main";
import AddServices from "../../pages/AddServices/AddServices";
import Blogs from "../../pages/Blogs/Blogs";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import UpdatePage from "../../pages/UpdatePage/UpdatePage";
import MyReviews from "../../pages/MyReviews/MyReviews";
import Register from "../../pages/Register/Register";
import Services from "../../pages/Services/Services/Services";
import Details from "../../shared/Details/Details/Details";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        errorElement:<Error></Error>, 
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/allServices',
                element: <Services></Services>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blogs',
                element: <PrivateRoute><Blogs></Blogs></PrivateRoute>
            },
            {
                path: '/myReviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/addServices',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
                
            },
            {
                path: '/update/:id',
                element: <UpdatePage></UpdatePage>,
                loader: ({params}) => fetch(`https://wedding-snap-server.vercel.app/reviews/${params.id}`)
                
            },
            {
                path: '/services/:id',
                element: <Details></Details>,
                loader: ({params})=> fetch(`https://wedding-snap-server.vercel.app/services/${params.id}`)
            },
            
        ]
    }
])