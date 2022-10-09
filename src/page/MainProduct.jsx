import React from 'react';
import Aside from '../componnents/aside/Aside';
import Container from '../componnents/Container/Container';
import Product from '../componnents/product/Product';
import Topbar from '../componnents/topbar/Topbar';
const MainProduct = () => {
    return (
        <div>
            <Topbar />
            <Container>
                <Aside />
                <Product />
            </Container>
        </div>
    );
};

export default MainProduct;