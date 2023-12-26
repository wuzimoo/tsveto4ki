import React from 'react';
import {Outlet} from "react-router-dom";

import {FooterComponent, HeaderComponent} from "../../components";

import css from './main_layout.module.css'

const MainLayout = () => {
    return (
        <div className={`${css.main} ${css.background}`}>
            <HeaderComponent/>
            <div className={css.content}>
                <Outlet/>
            </div>
            <FooterComponent/>
        </div>
    );
};

export default MainLayout;