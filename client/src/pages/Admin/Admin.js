import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import { ViewBtn, CancelBtn, RequestTable } from "../../components/ViewRequests";
import Hello from "../../components/Hello";
import SecurityRole from "../../components/SecurityRole";


const Admin = () => {
        return ( 
            <div>
                <AdminNavbar />
                <h1>Administrator Home Page</h1>
                <hr></hr>
                <Hello />
                <SecurityRole />
                <RequestTable />
                <ViewBtn /> 
                <CancelBtn />
            </div>
            );
        };

export default Admin;