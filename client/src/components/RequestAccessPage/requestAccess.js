import React from 'react';
import ReactDOM from 'react-dom';

import ViewBtn from './components/ViewBtn';
import CancelBtn from './components/CancelBtn';
import RequestTable from './components/RequestTable';
import SecurityRole from './components/SecurityRole';
import HelloMsg from './components/HelloMsg';
import InitiatorNavbar from './components/InitiatorNavbar';


const App = () => {
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

ReactDOM.render( < App / > , document.querySelector(".container"));