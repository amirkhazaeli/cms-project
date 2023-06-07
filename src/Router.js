import Comments from "./Components/Comments/Comments";
import Offs from "./Components/Offs/Offs";
import Order from "./Components/Order/Order";
import Product from "./Components/Product/Product";
import Users from "./Components/Users/Users";

export const routes = [
    {path: '/product' , element:<Product />},
    {path: '/comments' , element:<Comments />},
    {path: '/users' , element:<Users />},
    {path: '/order' , element:<Order />},
    {path: '/offs' , element:<Offs />},
]