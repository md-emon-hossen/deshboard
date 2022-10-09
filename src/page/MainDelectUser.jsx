import React from 'react';
import Aside from '../componnents/aside/Aside';
import Container from '../componnents/Container/Container';
import DelectUser from '../componnents/delectuser/DelectUser';
import Topbar from '../componnents/topbar/Topbar';
const MainDelectUser = () => {
    return (
        <div>
            <Topbar />
            <Container>
                <Aside />
                <DelectUser />
            </Container>
        </div>
    );
};

export default MainDelectUser;