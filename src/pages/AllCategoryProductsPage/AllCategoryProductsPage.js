import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams, Link } from 'react-router-dom';
import { Pagination, PaginationItem } from '@mui/material';

import { flowerAction } from '../../redux';
import { ProductPreview } from './../../components/index';
import css from './all_category_products_page.module.css';

const CatalogPage = () => {
    const location = useLocation();
    const { product_type } = useParams();
    const pageFromUrl = parseInt(new URLSearchParams(location.search).get('page')) || 1;

    const [page, setPage] = useState(pageFromUrl);

    const dispatch = useDispatch();
    const { all_with_paginate } = useSelector(state => state.flowerReducer);

    const searchParams = useMemo(() => new URLSearchParams(location.search), [location.search]);

    useEffect(() => {
        dispatch(flowerAction.getAll([page, product_type]));

        searchParams.set('page', page.toString());
        const newUrl = `${location.pathname}?${searchParams.toString()}`;


        window.history.replaceState(null, null, newUrl);
    }, [dispatch, product_type, page, location.pathname, searchParams]);

    useEffect(() =>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
        dispatch(flowerAction.close_menu())
    }, [dispatch])

    return (
        <div className={css.catalog_container}>
            <hr className={css.catalog_product_hr}/>
            <h4 className={css.catalog_product_big_text}>{product_type}</h4>
            {/*<ScrollButtons/>*/}
            <div className={css.catalog_products_container}>
                {all_with_paginate && all_with_paginate.data ? (
                    all_with_paginate.data.map((product, id) => <ProductPreview product={product} key={id} />)
                ) : (
                    <div>Loading...</div>
                )}
            </div>
            {/*<Pagination/>*/}
            <div className={css.pagination_container}>
                <Pagination
                    count={all_with_paginate.total_pages}
                    page={page}
                    sx={{
                        "& .MuiPaginationItem-root": {
                            fontSize: "30px", // Розмір шрифта для номерів сторінок і стрілочок
                            width: "50px",    // Ширина кругів з цифрами та стрілок
                            height: "50px",   // Висота кругів з цифрами та стрілок
                            margin: "10px",
                            borderRadius: "50%",
                        }
                    }}
                    onChange={(_, num) => setPage(num)}
                    renderItem={
                        (item) => (
                            <PaginationItem
                                component={Link}
                                to={`/catalog/${product_type}?page=${item.page}`}
                                {...item}
                            />
                        )
                    }
                />
            </div>
        </div>
    );
};

export default CatalogPage;