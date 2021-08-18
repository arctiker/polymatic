import React from 'react'


const tabs = [
    {
        name: '1-2',
        id: 'no1'
    },
    {
        name: '3-4',
        id: 'no2'
    },
    {
        name: '5-6',
        id: 'no3'
    },
    {
        name: '7-8',
        id: 'no4'
    }
];

export default function Clicks() {
    return (
        <div>
            {tabs.map((tab) => (
            <div key={tab}>
                <h1>{ tab.name }</h1> 
            </div>
            ))}
        </div>
    )
}
