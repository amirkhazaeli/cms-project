import Comments from "./Components/Comments/Comments";
import Home from "./Components/Home/Home";
import Offs from "./Components/Offs/Offs";
import Order from "./Components/Order/Order";
import Product from "./Components/Product/Product";
import Users from "./Components/Users/Users";

export const routes = [
    {path: '/' , element: <Home />},
    {path: '/product' , element:<Product />},
    {path: '/comments' , element:<Comments />},
    {path: '/users' , element:<Users />},
    {path: '/order' , element:<Order />},
    {path: '/offs' , element:<Offs />},
]