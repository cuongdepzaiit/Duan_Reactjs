import AdvanceHealing from '@components/AdvanceHealing/AdvanceHealing';
import MyBanner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';

import Info from '@components/Info/Info';
import HeadingListProduct from '@components/MenuContent/HeadingListProduct/HeadingListProduct';
import ProductItem from '@components/ProductItem/ProductItem';
import { useEffect } from 'react';
import { getProducts } from '@/apis/productService';
import PopulerProduct from '@components/PopulerProduct/PopulerProduct';
import SaleHomePage from '@components/SaleHomePage/SaleHomePage';
import { useState } from 'react';
import MyFooter from '@components/Footer/Footer';

function HomePage() {
    const [listProducts, setListProducts] = useState([]);
    useEffect(() => {
        getProducts().then((res) => {
            setListProducts(res.contents);
        });
    }, []);

    return ( <>
            <MyHeader />
            <MyBanner />
            <Info />
            <AdvanceHealing />
            <HeadingListProduct data={listProducts.slice(0, 2)} />
            <PopulerProduct data={listProducts.slice(2, listProducts.length)} />
            <SaleHomePage />
            <MyFooter />

        </>
    );
}

export default HomePage;
