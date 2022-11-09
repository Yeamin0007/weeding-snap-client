import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layouts/Main";
import AddServices from "../../pages/AddServices/AddServices";
import Blogs from "../../pages/Blogs/Blogs";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import MyReviews from "../../pages/MyReviews/MyReviews";
import Register from "../../pages/Register/Register";
import Services from "../../pages/Services/Services/Services";
import Details from "../../shared/Details/Details/Details";

export const routes = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>, 
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
                element: <Blogs></Blogs>
            },
            {
                path: '/myReviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/addServices',
                element: <AddServices></AddServices>,
                
            },
            {
                path: '/services/:id',
                element: <Details></Details>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            
        ]
    }
])