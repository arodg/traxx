import React, {Component} from 'react';

class InitiatorNavbar extends Component {
    render() {
        return (
            <div class="roleNavbar">
                <nav class="navbar navbar-expand-lg">
                    <a class="navbar-brand" href="http://localhost:3000/request">Create Request</a>
                    |
                    <a class="navbar-brand" href="http://localhost:3000/vendorrequest">Request Vendor Add</a>
                    |
                    <a class="navbar-brand" href="http://localhost:3000">View Requests</a>
                    |
                    <a class="navbar-brand" href="http://localhost:3000">Search</a>
                </nav>
            </div>
        );
    }
}

export default InitiatorNavbar;