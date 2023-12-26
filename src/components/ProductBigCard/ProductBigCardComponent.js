import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import css from './ProductBigCard.module.css'
import {flowerAction} from "../../redux";
import { ColorSelect, ColorsBigCart } from '../../components/index';
// Тествові картинки
// import img1 from './img1.jfif'
// import img2 from './img2.jfif'
// import img3 from './img3.jfif'
// import img4 from './img4.jfif'

import { useState } from 'react';

const ProductBigCard = () => {

    const [isOpen, setOpen] = useState(false);

    let {id: id_} = useParams();

    const dispatch = useDispatch();

    const {one_product} = useSelector(state => state.flowerReducer)

    const {name, description, length, width, brand, orign_country, weight, opt_price, colors, main_photo_path = []} = one_product || { colors: [] }

    const [photo_id, setPhoto] = useState();

    useEffect(() => {
        dispatch(flowerAction.getById(id_))
        setOpen(false)
    },[dispatch, id_])

    useEffect(() => {
        setPhoto(main_photo_path[0])
    },[main_photo_path])

    return (
        <div>
            <div className={css.product_card_template}>
                <div className={css.product_card_image_template}>
                    <img src={`http://89.105.201.25/${photo_id ? photo_id : main_photo_path[0] }`} className={css.product_card_big_image} alt=""/>
                    <div className={css.product_card_small_images_template}>
                        <img onClick={()=>setPhoto(main_photo_path[1])} src={`http://89.105.201.25/${main_photo_path[1]}`} className={css.product_card_small_image} alt=""/>
                        <img onClick={()=>setPhoto(main_photo_path[2])} src={`http://89.105.201.25/${main_photo_path[2]}`} className={css.product_card_small_image} alt=""/>
                        <img onClick={()=>setPhoto(main_photo_path[3])} src={`http://89.105.201.25/${main_photo_path[3]}`} className={css.product_card_small_image} alt=""/>
                    </div>
                </div>
                <div className={css.product_card_text_template}>
                    <span className={css.product_card_small_text}>Категории: “Осень 2023”, “Обёрточная бумага”</span>
                    <h1 className={css.product_card_big_text}>{name}</h1>
                    <div className={css.product_color_select_container} >
                        <ColorSelect colors={colors || []} setPhoto={setPhoto} />
                    </div>
                    <div className={css.product_description}>
                        {/* 
                        <span className={css.product_description_bold}>Артикул: </span>
                        <span>1 коробка</span> 
                        */}
                        <span className={css.product_description_bold}>Размер:</span>
                        <span>{`${length}x${width}`}</span>
                        <span className={css.product_description_bold}>Бренд:</span>
                        <span>{brand}</span>
                        <span className={css.product_description_bold}>Страна производитель:</span>
                        <span>{orign_country}</span>
                        {/*                         
                        <span className={css.product_description_bold}>Упаковка:</span>
                        <span>{unit}</span>
                        */}
                        <span className={css.product_description_bold}>Измерения:</span>
                        <span>{`${length}x${width}`}</span>
                        <span className={css.product_description_bold}>Вес:</span>
                        <span>{weight}</span>
                        {/* 
                        <span className={css.product_description_bold}>Минимальный заказ:</span>
                        <span>{count} коробка</span> 
                        */}
                    </div>
                    <div className={css.product_price}><span>Цена:</span> {opt_price} р</div>
                    <div className={css.product_card_info}>
                        <div className={css.product_cart_btn} onClick={() => setOpen(!isOpen)}>Добавить в корзину</div>
                    </div>
                </div>
            </div>
            <ColorsBigCart open={isOpen} setOpen={setOpen} colors={colors || []}/>
            <div className={css.desc}>
                <h1 className={css.desc_big}>Описание товара:</h1>
                <p className={css.desc_text}>{description}</p>
            </div>
        </div>
    );
};

export {ProductBigCard};