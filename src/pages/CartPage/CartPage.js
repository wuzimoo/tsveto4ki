import React, {useEffect} from 'react';

import css from './cart_page_style.module.css'

import { BasketPageComponent, SimilarItems } from '../../components/index';
import {useDispatch} from "react-redux";
import {flowerAction} from "../../redux";

const CartPage = () => {
    let dispatch = useDispatch();

    useEffect(() =>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
        dispatch(flowerAction.close_menu())
    }, [dispatch])

    return (
        <div className={css.cart_container}>
            <BasketPageComponent/>
            <SimilarItems count={4}/>
        </div>
    );
};

export default CartPage;