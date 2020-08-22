import React, {Component} from 'react';
import axios from 'axios';

class CustomerDelete extends Component {

    deleteCustomer = (id) => {
        const url = `/api/customers/${id}`
        axios.delete(url).then(() => {
            this.props.stateRefresh();
        });
    }

    render() {
        return (
            <div>
                <button onClick={(e) => {
                    this.deleteCustomer(this.props.id)
                }}>삭제
                </button>
            </div>
        );
    }
}

export default CustomerDelete;