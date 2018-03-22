import React, {Component} from 'react';

class HomeNavbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="/request">  Create Purchase Request  </a>
                    |
                    <a class="navbar-brand" href="/home">  View Purchase Requests  </a>
                    |
                    <a class="navbar-brand" href="#">  Search  </a>
                    |
                    <a class="navbar-brand" href="/home">  Home  </a>
                    |
                    <a class="navbar-brand" href="/">  LOGOUT  </a>
                </nav>
            </div>
        );
    }
}

export default HomeNavbar;