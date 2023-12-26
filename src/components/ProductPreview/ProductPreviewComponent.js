import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './ProductPreview.module.css'
// Тествові картинки
// import img1 from './img1.jfif'
// import img2 from './img2.jfif'
// import img3 from './img3.jfif'
// import img4 from './img4.jfif'


const ProductPreview = ({product}) => {

    const navigate = useNavigate();

    const {id, name, colors, main_photo_path = []} = product

    return (
        <div className={css.product_pre} onClick={() => navigate(`/item/${id}`)}>
           <img src={`http://89.105.201.25/${main_photo_path[0]}`} className={css.product_big_image} alt=''/>
           <div className={css.product_container_small_images}>
                <img src={`http://89.105.201.25/${main_photo_path[1]}`} className={css.product_small_image} alt=''/>
                <img src={`http://89.105.201.25/${main_photo_path[2]}`} className={css.product_small_image} alt=''/>
                <div className={css.product_small_image} style={{position: 'relative'}}>
                    <span>+{colors.length} цветов</span>
                    <img src={`http://89.105.201.25/${main_photo_path[3]}`} className={css.product_small_image} alt=''/>
                </div>
           </div>
           <h4 className={css.product_pre_text}>{name}</h4>
        </div>
    );
};

export {ProductPreview};