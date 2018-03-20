<<<<<<< HEAD
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

ReactDOM.render( < App /> , document.querySelector(".container"));
=======
// form - 
//     * vendor name input required
//     * address line 1 input required
//     * address line 2 input optional
//     * city input required
//     * state dropdown required
//     * zip code input required
//     * phone input required format
//     * contact name input required
//     * email input optional format
//     * website input optional
// submit button - modal pops up say your request has been sent to admin for approval. 
//                  Ok button on modal returns user to home page
// cancel button - returns to user home page without saving anything
>>>>>>> 8c66d0f64e54999f30912d4f306980e14112c676
