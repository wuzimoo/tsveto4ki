import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {flowerAction} from "../../redux";
import { CatalogProductCard } from './../../components/index'
import css from './catalog_page_style.module.css'

const CatalogPage = () => {

    const dispatch = useDispatch();

    const {category} = useSelector(state => state.flowerReducer);

    useEffect(() =>{
        dispatch(flowerAction.getCategory())
        }, [dispatch])

    useEffect(() =>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
        dispatch(flowerAction.close_menu())
    }, [dispatch])

    return (
        <div className={css.catalog_container}>
            {
                category.map((value, id) => <CatalogProductCard category={value} key={id}/>)
            }
        </div>
    );
};

export default CatalogPage;