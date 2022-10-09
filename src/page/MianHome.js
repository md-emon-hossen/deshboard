import React from 'react';
import Aside from '../componnents/aside/Aside';
import Container from '../componnents/Container/Container';
import Home from "../componnents/Home/Home";
import Topbar from '../componnents/topbar/Topbar';
const MianHome = () => {
    return (
        <div>
            <Topbar />
            <Container>
                <Aside />
                <Home />
            </Container>
        </div>
    );
};

export default MianHome;