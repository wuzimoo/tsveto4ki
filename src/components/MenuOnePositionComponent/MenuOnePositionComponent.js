import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {flowerAction} from "../../redux";

const MenuOnePositionComponent = ({category}) => {

    const navigate = useNavigate();

    let dispatch = useDispatch();

    return (
        <div onClick={() => {navigate(`/catalog/${category.type}?page=1`); dispatch(flowerAction.open_menu())}}>
            {category.name}
        </div>
    );
};

export default MenuOnePositionComponent;