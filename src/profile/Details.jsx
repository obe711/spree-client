import React from 'react';
import { Link } from 'react-router-dom';
import NavBarPublic from "../_components/page/NavBarPublic";

import { accountService } from '@/_services';

function Details({ match }) {
    const { path } = match;
    const user = accountService.userValue;

    return (
       <React.Fragment>
        
        
        <NavBarPublic solidNav />
        <body className="sidebar-collapse pt-5">
            <div className="mt-5"> 
            <h1>My Profile</h1>
            <p>
                <strong>Name: </strong> {user.title} {user.firstName} {user.lastName}<br />
                <strong>Email: </strong> {user.email}
            </p>
            <p><Link to={`${path}/update`}>Update Profile</Link></p>
            </div>
        </body>
        </React.Fragment>
    );
}

export { Details };