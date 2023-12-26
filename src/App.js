import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import MainLayout from "./layouts/MainLayout/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from './pages/CatalogPage/CatalogPage';
import ItemPage from './pages/ItemPage/ItemPage';
import AllCategoryProductsPage from './pages/AllCategoryProductsPage/AllCategoryProductsPage';
import CartPage from './pages/CartPage/CartPage';
import DeliveryAndPaymentPage from "./pages/DeliveryAndPaymentPage/DeliveryAndPaymentPage";
import ReturnAndExchangePage from "./pages/ReturnAndExchangePage/ReturnAndExchangePage";
import TermsOfUsePage from "./pages/TermsOfUsePage/TermsOfUsePage";

function App() {
    useEffect(() => {
        const preventZoom = event => {
            if (event.touches.length > 1) {
                event.preventDefault();
            }
        };

        document.body.addEventListener('touchmove', preventZoom, { passive: false });

        return () => {
            document.body.removeEventListener('touchmove', preventZoom);
        };
    }, []);

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'home'}/>}/>
                    <Route path={'/home'} element={<HomePage/>}/>
                    <Route path={'/catalog'} element={<CatalogPage/>}/>
                    <Route path={'/item/:id'} element={<ItemPage/>}/>
                    <Route path={'/catalog/:product_type'} element={<AllCategoryProductsPage/>}/>
                    <Route path={'/cart'} element={<CartPage/>}/>
                    <Route path={`/delivery`} element={<DeliveryAndPaymentPage/>}/>
                    <Route path={`/return`} element={<ReturnAndExchangePage/>}/>
                    <Route path={`/terms`} element={<TermsOfUsePage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
