import React from 'react';
import './App.css';
import Customer from "./components/Customer";

const customers = [
    {
        'id': 1,
        'image': 'https://placeimg.com/64/64/1',
        'name': '유주진',
        'birthday': '9201122',
        'gender': '남자',
        'job': '대딩',
    },
    {
        'id': 2,
        'image': 'https://placeimg.com/64/64/2',
        'name': '유주순',
        'birthday': '880922',
        'gender': '여자',
        'job': '직장인',
    },
    {
        'id': 3,
        'image': 'https://placeimg.com/64/64/3',
        'name': '김동역',
        'birthday': '9800430',
        'gender': '남자',
        'job': '초딩',
    },
]

function App() {
    return (
        <div>
            {
                customers.map(c => {
                    return (
                        <Customer
                            key={c.id}
                            id={c.id}
                            image={c.image}
                            name={c.name}
                            birthday={c.birthday}
                            gender={c.gender}
                            job={c.job}
                        />
                    )
                })
            }
        </div>
    );
}

export default App;
