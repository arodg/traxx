import React, {Component} from 'react';

class InitiatorNavbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">  Create Request  </a>
                    |
                    <a class="navbar-brand" href="#">  Request Vendor Add  </a>
                    |
                    <a class="navbar-brand" href="#">  View Requests  </a>
                    |
                    <a class="navbar-brand" href="#">  Search  </a>
                </nav>
            </div>
        );
    }
}

export default InitiatorNavbar;