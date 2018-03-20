import React from 'react';

import ViewBtn from '../components/InitiatorHomePage/ViewBtn';
import CancelBtn from '../components/InitiatorHomePage/CancelBtn';
import RequestTable from '../components/InitiatorHomePage/RequestTable';
import SecurityRole from '../components/SecurityRole';
import HelloMsg from '../components/HelloMsg';
import InitiatorNavbar from '../components/InitiatorHomePage/InitiatorNavbar';


const Initiator = () => {
        return ( 
            <div>
                <InitiatorNavbar />
                <h1>Initiator Home Page</h1>
                <hr></hr>
                <HelloMsg />
                <SecurityRole />
                <RequestTable />
                <ViewBtn /> 
                <CancelBtn />
            </div>
            );
        };

export default Initiator;