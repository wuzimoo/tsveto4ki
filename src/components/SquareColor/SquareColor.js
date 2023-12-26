import React from 'react';

import css from './square_color.module.css'

const SquareColor = ({one_color, setPhoto}) => {
    return (
        <div>
            <img onClick={()=>setPhoto(one_color.photo_path)} src={`http://89.105.201.25/${one_color.photo_path}`} className={css.color_item} alt={one_color.photo_path}/>
        </div>
    );
};

export default SquareColor;