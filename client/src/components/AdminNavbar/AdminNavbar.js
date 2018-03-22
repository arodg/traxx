import React, { Component } from 'react';

class AdminNavbar extends Component {
    render() {
         return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="/request">  Create Purchase Request  </a>
                    |
                    <a class="navbar-brand" href="/employee">  Manage Employees  </a>
                    |
                    <a class="navbar-brand" href="home">  Manage Vendors  </a>
                    |
                    <a class="navbar-brand" href="/request">  Manage Purchase Requests  </a>
                    |
                    <a class="navbar-brand" href="/home">  Search  </a>
                    |
                    <a class="navbar-brand" href="/">  LOGOUT  </a>
                    |
                </nav>
            </div>
        );
    }
}

export default AdminNavbar;
