import React from 'react';

import css from './Pagination.module.css'


const Pagination = () => {
    return (
        <div className={css.pagination_container}>
            <svg width={12} height={20} style={{marginRight: 2}} viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg" > <g id="Group 204"> <rect id="Rectangle 162" x="9.22815" y="19.1367" width="13.0503" height="2.73512" rx="1.36756" transform="rotate(-135 9.22815 19.1367)" fill="#1F1F1F" /> <rect id="Rectangle 163" x="11.1619" y="2.62891" width="13.0314" height="2.73512" rx="1.36756" transform="rotate(135 11.1619 2.62891)" fill="#1F1F1F" /> </g> </svg>
            <div className={css.pagination_item +' '+ css.pagination_item_active}>1</div>
            <div className={css.pagination_item}>2</div>
            <div className={css.pagination_item}>3</div>
            <div className={css.pagination_item}>4</div>
            <div className={css.pagination_item}>5</div>
            <div className={css.pagination_item}>6</div>
            <svg width={12} height={20} style={{transform: 'rotate(180deg)', marginLeft: 2}} viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg" > <g id="Group 204"> <rect id="Rectangle 162" x="9.22815" y="19.1367" width="13.0503" height="2.73512" rx="1.36756" transform="rotate(-135 9.22815 19.1367)" fill="#1F1F1F" /> <rect id="Rectangle 163" x="11.1619" y="2.62891" width="13.0314" height="2.73512" rx="1.36756" transform="rotate(135 11.1619 2.62891)" fill="#1F1F1F" /> </g> </svg>
        </div>
    );
};

export {Pagination};