import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './ProductBtnMore.module.css'


const ProductBtnMore = ({type}) => {

    let navigate = useNavigate();

    return (
        <div className={css.container_more_btn}>
           <div onClick={() => navigate(`/catalog/${type}?page=1`)} className={css.product_more_btn}>Посмотреть Ещё</div>
        </div>
    );
};

export {ProductBtnMore};