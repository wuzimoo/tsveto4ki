import React, {useEffect} from 'react';

import css from './delivery.module.css'
import {useDispatch} from "react-redux";
import {flowerAction} from "../../redux";

const DeliveryAndPaymentPage = () => {

    let dispatch = useDispatch();

    useEffect(() =>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
        dispatch(flowerAction.close_menu())
    }, [dispatch])

    return (
        <div className={css.container}>
            <hr className={css.hr}/>
            <h4 className={css.big_text}>Доставка и Оплата</h4>

            <div className={css.text}>
                Доставка по Приморскому краю - бесплатно при заказе от 10000 руб
                <br/>
                <br/>
                Заказ на меньшую сумму либо отправка в другой регион страны осуществляется по прайсу выбранной Транспортной компании.
                Доставка до пункта забора груза транспортной компании осуществляется бесплатно вне зависимости от суммы заказа.
                <br/>
                <br/>
                Оплата заказа происходит только после согласования и подтверждения заказа менеджером.

            </div>
        </div>
    );
};

export default DeliveryAndPaymentPage;