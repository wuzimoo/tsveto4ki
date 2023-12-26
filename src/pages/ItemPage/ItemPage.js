import React, {useEffect} from 'react';

import { ProductBigCard, SimilarItems } from '../../components/index';

import css from './item_page_style.module.css'
import {useDispatch} from "react-redux";
import {flowerAction} from "../../redux";

const ItemPage = () => {

    let dispatch = useDispatch();

    useEffect(() =>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
        dispatch(flowerAction.close_menu())
    }, [dispatch])

    return (
        <div className={css.catalog_container}>
            <ProductBigCard/>
            <SimilarItems count={4}/>
        </div>
    );
};

export default ItemPage;