import React from 'react';
import { withRouter } from 'react-router-dom';
import { Authenticated } from 'react-admin';

const MyPage = ({ location }) => (
    <Authenticated authParams={{ foo: 'bar' }} location={location}>
        <div>
            ...
        </div>
    </Authenticated>
);

export default withRouter(MyPage);