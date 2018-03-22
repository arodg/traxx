import React from 'react';
import HomeNavbar from '../../components/HomeNavbar';
import { ViewBtn, CancelBtn, RequestTable } from "../../components/ViewRequests";
import Hello from "../../components/Hello";
import SecurityRole from "../../components/SecurityRole";


const HomePage = () => {
        return ( 
            <div>
                <HomeNavbar />
                <h1>Initiator Home Page</h1>
                <hr></hr>
                <Hello />
                <SecurityRole />
                <RequestTable />
                <ViewBtn /> 
                <CancelBtn />
            </div>
            );
        };

export default HomePage;
