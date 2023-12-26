import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {OneProductInBasket} from "../OneProductInBasket/OneProductInBasket";
import css from './basket_side.module.css'
import {flowerAction} from "../../redux";
import {useClickOutside} from "../../hooks/useClickOutside";

const BasketSideComponent = () => {

    let basketRef = useRef(null);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const {basket_open, products_in_basket} = useSelector(state => state.flowerReducer);

    useClickOutside(basketRef, () => dispatch(flowerAction.close_basket()))


    const totalCost = products_in_basket.reduce((total, product) => {
        const productCost = product.opt_price * product.count;
        return total + productCost;
    }, 0);

    return (
        <div className={basket_open ? css.basket_container_open : css.basket_container_close} ref={basketRef}>
            <div className={css.basket_content}>
                <div className={css.basket_content_title}>
                    <div>Корзина</div>
                    <div className={css.korzina} onClick={() => dispatch(flowerAction.open_basket())}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="71" height="71" viewBox="0 0 71 71" fill="none">
                            <rect width="71" height="71" rx="35.5" fill="white"/>
                            <path
                                d="M26.7663 25H48L45.1111 35.5H28.3219M46.5556 41.5H29.2222L26.3333 22H22M30.6667 47.5C30.6667 48.3284 30.02 49 29.2222 49C28.4245 49 27.7778 48.3284 27.7778 47.5C27.7778 46.6716 28.4245 46 29.2222 46C30.02 46 30.6667 46.6716 30.6667 47.5ZM46.5556 47.5C46.5556 48.3284 45.9089 49 45.1111 49C44.3133 49 43.6667 48.3284 43.6667 47.5C43.6667 46.6716 44.3133 46 45.1111 46C45.9089 46 46.5556 46.6716 46.5556 47.5Z"
                                stroke="#1F1F1F" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>

                <div className={css.spase_for_products}>
                    {
                        products_in_basket.map(value => <OneProductInBasket product={value}/>)
                    }
                </div>

                <div className={css.total}>
                    <div className={css.total_text}>Всего</div>
                    <div className={css.total_count}>{totalCost}₽</div>
                </div>
            </div>
            <div className={css.basket_button}  onClick={() => {navigate('/cart'); dispatch(flowerAction.open_basket())}}>
                <div>Перейти к оплате</div>
            </div>
        </div>
    );
};

export {BasketSideComponent};