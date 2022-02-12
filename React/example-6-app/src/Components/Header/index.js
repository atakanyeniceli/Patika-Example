import React from 'react'

function Header({ number, data, increment }) {
    console.log('Header Component')
    return (
        <div>
            Header={number}
            <div>{JSON.stringify(data)}</div>
            <button onClick={increment}>Click</button>
        </div>
    )
}

export default React.memo(Header)
