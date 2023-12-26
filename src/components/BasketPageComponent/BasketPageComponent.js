import React from 'react';
import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from 'react-hook-form'

import css from './BasketPage.module.css'
import {OneProductInBigCart} from "../index";
import {flowerAction} from "../../redux";
import {useNavigate} from "react-router-dom";

const BasketPageComponent = () => {
    const [step, setStep] = useState(0);

    let navigate = useNavigate();

    const { products_in_basket } = useSelector(state => state.flowerReducer);
    const { register, handleSubmit, reset, formState: { isValid } } = useForm();

    const dispatch = useDispatch();

    const totalCost = products_in_basket.reduce((total, product) => {
        const productCost = product.opt_price * product.count;
        return total + productCost;
    }, 0);

    const submit = (data) => {
        //Sorry for my messy code, I wanted to do it right
        const form = new FormData();
        const arr = JSON.stringify(products_in_basket)
        form.append('phone ', data.number);
        form.append('name', data.name);
        form.append('title', data.company);
        form.append('last_name', "TEST");
        form.append('email', "mail@example.com");
        form.append('cart', arr);
        form.append('price', "11");
        dispatch(flowerAction.sendData(form))
        reset();
    };

    const handleOrderButtonClick = () => {
        handleSubmit(submit)();
        if (isValid) {
            setStep(step + 1);
        }
    }

    return (
        <div>
            {
                step === 0 && (
                <>
                    <div className={css.basket_container}>
                        <div className={css.basket_content}>
                            <div className={css.basket_content_title}>
                                <div>Корзина</div>
                                <svg width={81} height={24} style={{marginLeft: 30}} className={css.pc} viewBox="0 0 81 22" fill="none" xmlns="http://www.w3.org/2000/svg" > <circle cx={11} cy={11} r={9} fill="#D9D9D9" stroke="#1F1F1F" strokeWidth={4} /> <circle cx={70} cy={11} r={9} stroke="#1F1F1F" strokeWidth={4} /> <line x1="21.2715" y1="11.1714" x2="60.3572" y2="11.1714" stroke="#1F1F1F" strokeWidth={4} strokeDasharray="8 8" /> </svg>
                                <svg width={50} height={14} style={{marginLeft: 15}} className={css.mobile} viewBox="0 0 50 14" fill="none" xmlns="http://www.w3.org/2000/svg" > <circle cx="6.79012" cy="6.79012" r="5.79012" fill="#D9D9D9" stroke="#1F1F1F" strokeWidth={2} /> <circle cx="43.21" cy="6.79012" r="5.79012" stroke="#1F1F1F" strokeWidth={2} /> <line x1="13.1328" y1="7.13086" x2="37.2598" y2="7.13086" stroke="#1F1F1F" strokeWidth={2} strokeDasharray="8 8" /> </svg>
                            </div>

                            <div className={css.spase_for_products}>
                                {
                                    products_in_basket.map(value => <OneProductInBigCart product={value}/>)
                                }
                            </div>

                            <div className={css.total}>
                                <div className={css.total_text}>Всего</div>
                                <div className={css.total_count}>{totalCost}₽</div>
                            </div>
                        </div>
                    </div>
                    <div className={css.basket_continue_btn} onClick={() => products_in_basket.length > 0 ? setStep(step+1) : null}>Продолжить</div>
                </>
                )
            }
            {
                step === 1 && (
                <>
                    <div className={css.basket_container}>
                        <div className={css.basket_content}>
                            <div className={css.basket_content_title}>
                                <div>Корзина</div>
                                <svg width={81} height={24} style={{marginLeft: 30}} className={css.pc} viewBox="0 0 81 22" fill="none" xmlns="http://www.w3.org/2000/svg" > <circle cx={11} cy={11} r={9} fill="#1F1F1F" stroke="#1F1F1F" strokeWidth={4} /> <circle cx={70} cy={11} r={9} fill="#D9D9D9" stroke="#1F1F1F" strokeWidth={4} /> <line x1="21.2715" y1="11.1714" x2="60.3572" y2="11.1714" stroke="#1F1F1F" strokeWidth={4} strokeDasharray="8 8" /> </svg>
                                <svg width={50} height={14} style={{marginLeft: 15}} className={css.mobile} viewBox="0 0 50 14" fill="none" xmlns="http://www.w3.org/2000/svg" > <circle cx="6.79012" cy="6.79012" r="5.79012" fill="#1F1F1F" stroke="#1F1F1F" strokeWidth={2} /> <circle cx="43.212" cy="6.79012" r="5.79012" stroke="#1F1F1F" strokeWidth={2} /> <line x1="13.1328" y1="7.13086" x2="37.2598" y2="7.13086" stroke="#1F1F1F" strokeWidth={2} strokeDasharray="8 8" /> </svg>
                            </div>

                            <form className={css.spase_for_products} onSubmit={handleSubmit(submit)}>
                                <div className={css.form_background}>
                                    <span className={css.form_text}>Ваше Имя:</span>
                                    <input className={css.form_input} type="text" {...register('name', { required: true })}/>
                                </div>
                                <div className={css.form_background}>
                                    <span className={css.form_text}>Номер телефона:</span>
                                    <input className={css.form_input} type="tel" {...register('number', { required: true })}/>
                                </div>
                                <div className={css.form_background}>
                                    <span className={css.form_text}>Название компании:</span>
                                    <input className={css.form_input} type="text" {...register('company')}/>
                                </div>
                                <div className={css.form_tips_text}>
                                    <span className={css.form_top_tip}>Заполните поля выше.</span>
                                    <span className={css.form_bottom_tip}>Наш менеджер подтвердит заказ и свяжется с вами.</span>
                                </div>
                                <button className={css.basket_continue_btn +' '+ css.noContainer} onClick={handleOrderButtonClick} disabled={!isValid}>Оформить Заказ</button>
                            </form>

                        </div>
                    </div>
                </>
                )
            }
            {
                step === 2 && (
                <>
                    <div className={css.basket_container}>
                        <div className={css.basket_content}>
                            <div className={css.basket_content_title}>
                                <div>Корзина</div>
                                <svg width={81} height={24} style={{marginLeft: 30}} className={css.pc} viewBox="0 0 81 22" fill="none" xmlns="http://www.w3.org/2000/svg" > <circle cx={11} cy={11} r={9} fill="#1F1F1F" stroke="#1F1F1F" strokeWidth={4} /> <circle cx={70} cy={11} r={9} fill="#1F1F1F" stroke="#1F1F1F" strokeWidth={4} /> <line x1="21.2715" y1="11.1714" x2="60.3572" y2="11.1714" stroke="#1F1F1F" strokeWidth={4} strokeDasharray="8 8" /> </svg>
                                <svg width={50} height={14} style={{marginLeft: 15}} className={css.mobile} viewBox="0 0 50 14" fill="none" xmlns="http://www.w3.org/2000/svg" > <circle cx="6.79012" cy="6.79012" r="5.79012" fill="#1F1F1F" stroke="#1F1F1F" strokeWidth={2} /> <circle cx="43.212" cy="6.79012" r="5.79012" fill="#1F1F1F" stroke="#1F1F1F" strokeWidth={2} /> <line x1="13.1328" y1="7.13086" x2="37.2598" y2="7.13086" stroke="#1F1F1F" strokeWidth={2} strokeDasharray="8 8" /> </svg>
                            </div>

                            <div className={css.form_tips_text}>
                                <span className={css.final_tip}>Заказ оформлен!<br/>Ожидайте, наш менеджер свяжется с вами.</span>
                            </div>
                        </div>
                    </div>
                    <div className={css.final_order_btn}>
                        <div className={css.invoice_btn}>Расходная накладная</div>
                        <div className={css.to_home_btn} onClick={() => {setStep(0); navigate('/home')}}>Вернуться на Главную</div>
                    </div>
                </>
                )
            }
        </div>
    );
};

export {BasketPageComponent};