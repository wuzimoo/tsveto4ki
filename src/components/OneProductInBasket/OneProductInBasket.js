import React from 'react';
import {useDispatch} from "react-redux";

import css from './one_product_basket.module.css'
import {flowerAction} from "../../redux";

const OneProductInBasket = ({product}) => {

    const {product_name, opt_price, count, color_id, product_id} = product;

    const dispatch = useDispatch();

    const handleDeleteProduct = () => {
        dispatch(flowerAction.delete_product_by_ids({color_id, product_id}));
    };

    return (
        <div className={css.one_product_container}>
            <div className={css.one}>{product_name}</div>
            <div className={css.two}>{count}</div>
            <div className={css.three}>{count*opt_price}₽</div>
            <div className={css.four} onClick={handleDeleteProduct}>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path d="M9.79816 0.707092L0.707275 9.79797M10.0002 9.99992L0.90935 0.909043" stroke="#1F1F1F" strokeWidth="2"/>
                </svg>
            </div>
        </div>
    );
};

export {OneProductInBasket};