import React, { useState } from 'react';
import css from './OneProductInColorCart.module.css';

const OneProductInColorCart = ({ one_color, onUpdateCount }) => {

    const {color_name, photo_path, total, opt_price } = one_color;

    const initialCount = !isNaN(one_color.count) ? parseInt(one_color.count, 10) : 0;

    const [count, setCount] = useState(initialCount);

    const handleCountChange = (event) => {
        const newCount = event.target.value;

        if (newCount === '' || (!isNaN(newCount) && newCount >= 0 && newCount <= total)) {
            setCount(newCount === '' ? 0 : parseInt(newCount, 10));
            onUpdateCount({ ...one_color, count: newCount === '' ? 0 : parseInt(newCount, 10) });
        }
    };

    return (
        <>
        <div className={css.mobile}>
            <div className={css.one_product_container}>
                <div className={css.first}>
                    <img src={`http://89.105.201.25/${photo_path}`} className={css.color_item} alt={photo_path}/>
                    {color_name}
                </div>
                <div className={css.second}>
                    На складе:
                    <span className={total ? css.on_sklad : css.no_on_sklad}>{total}</span>
                </div>
                <div className={css.third}>
                    Кол-во:
                    <input className={css.form_input} type="number" value={count.toString()} onChange={handleCountChange} max={total} min={0}/>
                </div>
                <div className={css.four}>
                    <span className={css.price}>{opt_price}₽</span>
                    за шт.
                </div>
            </div>
        </div>
        <div className={css.pc}>
            <div className={css.one_product_container}>
                <div className={css.first}>
                    <img src={`http://89.105.201.25/${photo_path}`} className={css.color_item} alt={photo_path}/>
                    {color_name}
                </div>
                <div className={css.four}>
                    <span className={css.price}>{opt_price}₽</span>
                    за шт.
                </div>
                <div className={css.second}>
                    На складе:
                    <span className={total ? css.on_sklad : css.no_on_sklad}>{total}</span>
                </div>
                <div className={css.third}>
                    Кол-во:
                    <input className={css.form_input} type="number" value={count.toString()} onChange={handleCountChange} max={total} min={0}/>
                </div>
            </div>
        </div>
        </>
    );
};

export { OneProductInColorCart };