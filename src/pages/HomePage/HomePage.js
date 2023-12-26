import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './home_page_style.module.css'
import { ProductPreview, HomePopup } from '../../components/index'
import {flowerAction} from "../../redux";
import women from './women_.png'

const HomePage = () => {
    const svgRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const svgElement = svgRef.current;


        if (windowWidth < 768) {
            svgElement.setAttribute('height', '1700');
        }else if (windowWidth < 1100) {
            svgElement.setAttribute('height', '2900');
        }else if (windowWidth < 1440) {
            svgElement.setAttribute('height', '2700');
            svgElement.setAttribute('viewBox', '0 0 100% 100%');
        }

        else if (windowWidth < 1920){
            svgElement.setAttribute('height', '2400');
            svgElement.setAttribute('viewBox', '0 0 1920 3311');
        } else{
            svgElement.setAttribute('height', '2520');
        }
    }, [windowWidth]);
    let navigate = useNavigate();

    const dispatch = useDispatch();

    const {similarItem} = useSelector(state => state.flowerReducer)

    useEffect(() => {
        dispatch(flowerAction.getSimilar(3))
    },[dispatch])

    useEffect(() =>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
        dispatch(flowerAction.close_menu())
    }, [dispatch])

    return (
        <div>
            <div className={css.up_bg}>
                <img src={women} alt="women"/>
            </div>
            <div className={css.up_content_container}>
                <div className={css.title}>Красота в деталях</div>
                <div className={css.two_text}>
                    <div className={css.lower_title_text}>Коробки, ленты, упаковка и вазы. Оптовые продажи.</div>
                    <div className={css.lower_title_text}>Просто и красиво.</div>
                </div>
                <div className={css.two_buttons}>
                    <div className={css.button_catalog} onClick={() => navigate('/catalog')}>
                        <div>Перейти в Каталог</div>
                    </div>
                    <div className={css.button_price_list} onClick={() => window.location.href = 'http://89.105.201.25/price_list.xlsx'}>
                        <div>Прайс-лист</div>
                    </div>
                </div>
            </div>
            <div  className={css.in_down_bg}>
                <div>
                <svg ref={svgRef} className={css.svg_down} height="2520" viewBox="0 0 1920 3311" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" >
                    <g clip-path="url(#clip0_525_2379)">
                        <path d="M141.001 3.00001C86.6571 9.1356 0.000976562 37 0.000976562 37V353.5L0 3316H1920L1920 387.5C1853.83 363.333 1753.2 242.1 1542 224.5C1234.94 198.912 1064.23 330.123 743.501 258C490.112 201.02 420.001 -28.5 141.001 3.00001Z" fill="white"/>
                        <g opacity="0.7" filter="url(#filter0_f_525_2379)">
                            <path d="M295.402 1135.05C389.512 1135.05 465.804 1058.51 465.804 964.09C465.804 869.671 389.512 793.129 295.402 793.129C201.292 793.129 125 869.671 125 964.09C125 1058.51 201.292 1135.05 295.402 1135.05Z" fill="#00A4FF"/>
                            <path d="M527.26 1060.19C619.827 1060.19 694.868 985.147 694.868 892.58C694.868 800.013 619.827 724.972 527.26 724.972C434.693 724.972 359.652 800.013 359.652 892.58C359.652 985.147 434.693 1060.19 527.26 1060.19Z" fill="#FB3FFF"/>
                            <path d="M475.86 1196.51C540.04 1196.51 592.068 1144.48 592.068 1080.3C592.068 1016.12 540.04 964.092 475.86 964.092C411.68 964.092 359.652 1016.12 359.652 1080.3C359.652 1144.48 411.68 1196.51 475.86 1196.51Z" fill="#FF6B00"/>
                            <path d="M295.402 2995.05C389.512 2995.05 465.804 2918.51 465.804 2824.09C465.804 2729.67 389.512 2653.13 295.402 2653.13C201.292 2653.13 125 2729.67 125 2824.09C125 2918.51 201.292 2995.05 295.402 2995.05Z" fill="#00A4FF"/>
                            <path d="M527.26 2920.19C619.827 2920.19 694.868 2845.15 694.868 2752.58C694.868 2660.01 619.827 2584.97 527.26 2584.97C434.693 2584.97 359.652 2660.01 359.652 2752.58C359.652 2845.15 434.693 2920.19 527.26 2920.19Z" fill="#FB3FFF"/>
                            <path d="M475.86 3056.51C540.04 3056.51 592.068 3004.48 592.068 2940.3C592.068 2876.12 540.04 2824.09 475.86 2824.09C411.68 2824.09 359.652 2876.12 359.652 2940.3C359.652 3004.48 411.68 3056.51 475.86 3056.51Z" fill="#FF6B00"/>
                            <path d="M1397.66 456.492C1331.12 523.039 1331.29 631.108 1398.06 697.873C1464.82 764.637 1572.89 764.814 1639.44 698.268C1705.98 631.722 1705.81 523.652 1639.04 456.888C1572.28 390.123 1464.21 389.946 1397.66 456.492Z" fill="#00A4FF"/>
                            <path d="M1286.65 673.373C1221.2 738.828 1221.2 844.952 1286.65 910.407C1352.11 975.862 1458.23 975.862 1523.69 910.407C1589.14 844.952 1589.14 738.828 1523.69 673.373C1458.23 607.918 1352.11 607.918 1286.65 673.373Z" fill="#FB3FFF"/>
                            <path d="M1226.61 540.639C1181.23 586.021 1181.23 659.6 1226.61 704.982C1271.99 750.364 1345.57 750.364 1390.95 704.982C1436.33 659.6 1436.33 586.021 1390.95 540.639C1345.57 495.257 1271.99 495.257 1226.61 540.639Z" fill="#FF6B00"/>
                            <path d="M1397.66 1946.49C1331.12 2013.04 1331.29 2121.11 1398.06 2187.87C1464.82 2254.64 1572.89 2254.81 1639.44 2188.27C1705.98 2121.72 1705.81 2013.65 1639.04 1946.89C1572.28 1880.12 1464.21 1879.95 1397.66 1946.49Z" fill="#FFB800"/>
                            <path d="M1286.65 2163.37C1221.2 2228.83 1221.2 2334.95 1286.65 2400.41C1352.11 2465.86 1458.23 2465.86 1523.69 2400.41C1589.14 2334.95 1589.14 2228.83 1523.69 2163.37C1458.23 2097.92 1352.11 2097.92 1286.65 2163.37Z" fill="#FF3FEC"/>
                            <path d="M1226.61 2030.64C1181.23 2076.02 1181.23 2149.6 1226.61 2194.98C1271.99 2240.36 1345.57 2240.36 1390.95 2194.98C1436.33 2149.6 1436.33 2076.02 1390.95 2030.64C1345.57 1985.26 1271.99 1985.26 1226.61 2030.64Z" fill="#FF6B00"/>
                            <path d="M1357.66 3236.49C1291.12 3303.04 1291.29 3411.11 1358.06 3477.87C1424.82 3544.64 1532.89 3544.81 1599.44 3478.27C1665.98 3411.72 1665.81 3303.65 1599.04 3236.89C1532.28 3170.12 1424.21 3169.95 1357.66 3236.49Z" fill="#00A4FF"/>
                            <path d="M1186.61 3320.64C1141.23 3366.02 1141.23 3439.6 1186.61 3484.98C1231.99 3530.36 1305.57 3530.36 1350.95 3484.98C1396.33 3439.6 1396.33 3366.02 1350.95 3320.64C1305.57 3275.26 1231.99 3275.26 1186.61 3320.64Z" fill="#FF6B00"/>
                            <path d="M1585.11 1570.76C1641.38 1570.76 1687 1525.14 1687 1468.87C1687 1412.6 1641.38 1366.98 1585.11 1366.98C1528.84 1366.98 1483.22 1412.6 1483.22 1468.87C1483.22 1525.14 1528.84 1570.76 1585.11 1570.76Z" fill="#00A4FF"/>
                            <path d="M1483.22 1453.93C1563.5 1453.93 1628.59 1388.84 1628.59 1308.56C1628.59 1228.28 1563.5 1163.19 1483.22 1163.19C1402.94 1163.19 1337.85 1228.28 1337.85 1308.56C1337.85 1388.84 1402.94 1453.93 1483.22 1453.93Z" fill="#FF6B00"/>
                            <path d="M757.892 2621.12C814.165 2621.12 859.784 2575.5 859.784 2519.23C859.784 2462.96 814.165 2417.34 757.892 2417.34C701.619 2417.34 656 2462.96 656 2519.23C656 2575.5 701.619 2621.12 757.892 2621.12Z" fill="#00A4FF"/>
                            <path d="M539 2306.34C659.95 2306.34 758 2208.29 758 2087.34C758 1966.39 659.95 1868.34 539 1868.34C418.05 1868.34 320 1966.39 320 2087.34C320 2208.29 418.05 2306.34 539 2306.34Z" fill="#FFA768"/>
                            <path d="M336.769 2087.3C478.579 2087.3 593.538 1972.34 593.538 1830.53C593.538 1688.72 478.579 1573.76 336.769 1573.76C194.959 1573.76 80 1688.72 80 1830.53C80 1972.34 194.959 2087.3 336.769 2087.3Z" fill="#FF3FB2"/>
                            <path d="M154.042 1789.77C194.934 1789.77 228.084 1756.93 228.084 1716.41C228.084 1675.89 194.934 1643.05 154.042 1643.05C113.15 1643.05 80.0002 1675.89 80.0002 1716.41C80.0002 1756.93 113.15 1789.77 154.042 1789.77Z" fill="#00A4FF"/>
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_f_525_2379" x="-220" y="106.698" width="2209.23" height="3932.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_525_2379"/>
                        </filter>
                        <clipPath id="clip0_525_2379">
                            <rect width="1920" height="3808.54" fill="white" transform="matrix(-1 0 0 1 1920 0.0457153)"/>
                        </clipPath>
                    </defs>
                </svg>
                </div>
            </div>
            <div className={css.home_content_container}>
                <h3 className={css.popular_text}>Популярное</h3>
                <div className={css.popular_product_container}>
                    {
                        similarItem.map(value => <ProductPreview  product={value} key={value.id}/>)
                    }

                </div>
                <div className={css.another_links}>
                    <HomePopup num={1}/>
                    <HomePopup num={2}/>
                    <HomePopup num={3}/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;