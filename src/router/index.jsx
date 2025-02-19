import { createHashRouter } from "react-router-dom";
import FrontLayout from "../layouts/FrontLayout";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ProductsDetailPage from "../pages/ProductsDetailPage";
import CartPage from "../pages/CartPage";
import NotFound from "../pages/NotFound";

const router = createHashRouter([
    {
        path: '/',
        element: <FrontLayout />,
        children: [
            {
                path: '',
                element: <HomePage />,
            },
            {
                path: 'products',
                element: <ProductsPage />,
            },
            {
                path: 'products/:id',
                element: <ProductsDetailPage />,
            },
            {
                path: 'cart',
                element: <CartPage />,
            }

        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router