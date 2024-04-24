import React, { useState } from "react";
import { increment, incrementByAmount, decrement, incrementAsync, selectCount, selectFetchStatus } from "./counterSlice";
import { useDispatch, useSelector } from "react-redux";
export function Counter() {
    const count = useSelector(selectCount)
    const fetchStatus = useSelector(selectFetchStatus)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState('2')
    const incrementValue = Number(incrementAmount) || 0
    return (
        <div>
            <button onClick={() => {
                dispatch(increment())
            }}>+ Add</button>
            <button onClick={() => {
                dispatch(decrement())
            }}>- Decrement</button>
            <br />
            <span>{count}</span>
            <br />
            <span>{fetchStatus}</span>
            <br />
            <input value={incrementAmount} onChange={e => { setIncrementAmount(e.target.value) }} />
            <button onClick={() => {
                dispatch(incrementByAmount(incrementValue))
            }}>Add Amount</button>
            <br />
            <button onClick={() => {
                dispatch(incrementAsync(incrementValue))
            }}>Add Async</button>
        </div>
    )
}