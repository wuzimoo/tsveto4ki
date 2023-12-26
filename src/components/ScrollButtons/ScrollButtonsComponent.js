import React from 'react';

import css from './ScrollButtons.module.css'


const ScrollButtons = () => {
    return (
        <div className={css.scroll_btns_main}>
            <div className={css.scroll_btn_scroll}>
                <div className={css.scroll_btns_flex}>
                    <div className={css.scroll_btns_btn}>Сезон “Лето 2023”</div>
                    <div className={css.scroll_btns_btn}>День матери</div>
                    <div className={css.scroll_btns_btn}>Новинки</div>
                    <div className={css.scroll_btns_btn}>Новогодние</div>
                    <div className={css.scroll_btns_btn}>Корзины</div>
                    <div className={css.scroll_btns_btn}>Крафты</div>
                    <div className={css.scroll_btns_btn}>не видно</div>
                </div>
            </div>
            <div>
                <svg width={12} height={20} className={css.scroll_arrow} viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg" > <rect x="1.93359" y="0.695312" width="13.0503" height="2.73512" rx="1.36756" transform="rotate(45 1.93359 0.695312)" fill="#1F1F1F" /> <rect y="17.2031" width="13.0314" height="2.73512" rx="1.36756" transform="rotate(-45 0 17.2031)" fill="#1F1F1F" /> </svg>
            </div>
        </div>
    );
};

export {ScrollButtons};