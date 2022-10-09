import React from 'react';
import Aside from '../componnents/aside/Aside';
import Container from '../componnents/Container/Container';
import Topbar from '../componnents/topbar/Topbar';
import User from '../componnents/user/User';
const MainUser = () => {
    return (
        <div>
            <Topbar />
            <Container>
                <Aside />
                <User />
            </Container>
        </div>
    );
};

export default MainUser;