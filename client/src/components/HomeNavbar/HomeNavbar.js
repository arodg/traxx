import React, {Component} from 'react';

class HomeNavbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">  New Purchase Request  </a>
                    |
                    <a class="navbar-brand" href="#">  View Requests  </a>
                    |
                    <a class="navbar-brand" href="#">  Search  </a>
                </nav>
            </div>
        );
    }
}

export default HomeNavbar;