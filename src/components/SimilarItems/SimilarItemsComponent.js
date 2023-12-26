import React, {useEffect} from 'react';

import css from './SimilarItems.module.css'

import { SimilarItemsCard } from '../../components/index';
import {useDispatch, useSelector} from "react-redux";
import {flowerAction} from "../../redux";
import {useParams} from "react-router-dom";


const SimilarItems = ({count}) => {

    let {id} = useParams();

    const dispatch = useDispatch();

    const {similarItem} = useSelector(state => state.flowerReducer)

    useEffect(() => {
        dispatch(flowerAction.getSimilar(count))
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[dispatch, id, count])


    return (
        <div className={css.similar_container}>
            <h4 className={css.similar_text}>Похожие Товары</h4>
            {/*<ScrollButtons/>*/}
            <div className={css.similar_items_wrap}>
                {
                    similarItem.map(value => <SimilarItemsCard card={value} key={value.id}/>)
                }
            </div>
        </div>
    );
};

export {SimilarItems};