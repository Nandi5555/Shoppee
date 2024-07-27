import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/Slices/counterslice';

function Counter() {
    const count = useSelector((storestates) => (storestates.counter.value));
    const dispatch = useDispatch();
    return (
        <div className="flex gap-x-4 ">
            <button onClick={() => dispatch(increment())}> Increase </button>
            <span>{count}</span>
            <button onClick={() => dispatch(decrement())}> Decrease </button>
        </div>
    )
}

export default Counter