import React from 'react';
import './App.css';
import Customer from "./components/Customer";

const customer = {
    'name': '유주진',
    'birthday': '9201122',
    'gender': '남자',
    'job': '대딩',
}

function App() {
    return (
        <Customer
            name={customer.name}
            birthday={customer.birthday}
            gender={customer.gender}
            job={customer.job}
        />
    );
}

export default App;
