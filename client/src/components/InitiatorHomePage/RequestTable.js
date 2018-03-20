import React, {Component} from 'react';

class RequestTable extends Component {
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Purchase Request #</th>
                            <th>Vendor</th> 
                            <th>Status</th>
                        </tr>
                        <tr>
                            <td>PR546</td>
                            <td>Office Depot</td> 
                            <td>Authorizing</td>
                        </tr>
                        <tr>
                            <td>PR789</td>
                            <td>Walmart</td> 
                            <td>Completed</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default RequestTable;