import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";

import css from './ColorsBigCart.module.css'
import { OneProductInColorCart } from '../index'
import {flowerAction} from "../../redux";

const ColorsBigCart = ({ open, setOpen, colors }) => {
    const [updatedColors, setUpdatedColors] = useState([colors]);

    let dispatch = useDispatch();

    useEffect(() => {
        setUpdatedColors(colors);
    }, [colors]);

    const handleUpdateCount = (updatedColor) => {
        const updatedColorsArray = updatedColors.map((color) =>
            color.color_id === updatedColor.color_id ? updatedColor : color
        );

        setUpdatedColors(updatedColorsArray);

    };
    const totalCost = updatedColors.reduce((total, product) => {
        const productCost = product.opt_price * product.count;
        return total + productCost;
    }, 0);
    return (
        <div>
            { open &&
                <div className={css.animate}>
                    <div className={css.container}>
                        <div className={css.basket_content}>
                            <div className={css.basket_content_title}>
                                <div>Цвета</div>
                            </div>

                            <div className={css.spase_for_products}>
                                {updatedColors.map((value, index) => (
                                    <OneProductInColorCart one_color={value} key={index} onUpdateCount={handleUpdateCount} />
                                ))}
                            </div>

                            <div className={css.total}>
                                <div className={css.total_text}>Всего</div>
                                <div className={css.total_count}>{totalCost}₽</div>
                            </div>
                            <div className={css.basket_button} onClick={() => {
                                setOpen()
                                dispatch(flowerAction.add_product_in_basket(updatedColors.filter(color => color.count !== 0)))
                            }}>Продолжить</div>
                        </div>
                    </div>
                    <div className={css.blur_bg} onClick={() => {setOpen()}}></div>
                </div>
            }
        </div>
    );
};

export {ColorsBigCart};