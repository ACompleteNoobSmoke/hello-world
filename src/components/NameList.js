import React from 'react';
import Person from './Person';

function NameList() {
    const names = ['Osaretin', 'Victoria', 'Boye', 'Ade', 'Jackie Chan'];
    const people = [
        {
            id: 1,
            name: 'Osaretin Omofonmwan',
            age: 27,
            skills: 'Jui Jitsu'
        },
        {
            id: 2,
            name: 'Victoria Marshall',
            age: 26,
            skills: 'Creative Arts'
        },
        {
            id: 3,
            name: 'Adedayo Uwensuyi',
            age: 27,
            skills: 'Fighting Games & Comedy'
        },
        {
            id: 4,
            name: 'Ajinboye Uwensuyi',
            age: 30,
            skills: 'Call Of Duty & Intelligence'
        }
    ]
    const peopleList = names.map(x => <h2 key={x}>{x}</h2>)
    return <div>{peopleList}</div>
}

export default NameList;