import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../Redux/Counter/counterSlice'

const Counter = () => {
    const countValue = useSelector(state => state.counter.value)
    const disPatch = useDispatch()
    const [amount, setAmount] = useState(0)
    return (
        <div>
            {countValue}
            <div>
                <button onClick={() => disPatch(increment())}>Inc</button>
                <button onClick={() => disPatch(decrement())}>Dec</button>
            </div>
            <div>
                <input type="text" value={amount} onChange={(item) => setAmount(item.target.value)} />
                <button onClick={() => disPatch(incrementByAmount(amount))}>Inc</button>
            </div>
        </div>
    )
}

export default Counter