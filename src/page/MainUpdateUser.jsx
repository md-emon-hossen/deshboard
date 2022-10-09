import React from 'react';
import Aside from '../componnents/aside/Aside';
import Container from '../componnents/Container/Container';
import Topbar from '../componnents/topbar/Topbar';
import UpdateUser from '../componnents/updateuser/UpdateUser';

const MainUpdateUser = () => {
    return (
        <div>
            <Topbar />
            <Container>
                <Aside />
                <UpdateUser />
            </Container>
        </div>
    );
};

export default MainUpdateUser;