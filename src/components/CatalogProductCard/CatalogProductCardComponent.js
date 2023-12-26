import React from 'react';
import { useState } from 'react';

import css from './CatalogProductCard.module.css'

import { ProductPreview, ProductBtnMore } from './../index'

const CatalogProductCard = ({category}) => {
    const [open, setOpen] = useState(false);

    const {name, data, type} = category // eslint-disable-next-line

    return (
        <>
            <div onClick={() => setOpen(!open)}>
                <hr className={css.catalog_product_hr}/>
                <h4 className={css.catalog_product_big_text}>{name}</h4>
            </div>
            <div className={css.catalog_product_open_panel} style={{maxHeight: open ? 1315 : 0 }}>
                {/*<ScrollButtons/>*/}
                <div className={css.catalog_product_container}>
                    {
                        data.map((value, id) => <ProductPreview product={value} key={id}/>)
                    }
                </div>
                <ProductBtnMore type={type}/>
            </div>
        </>
    );
};

export {CatalogProductCard};