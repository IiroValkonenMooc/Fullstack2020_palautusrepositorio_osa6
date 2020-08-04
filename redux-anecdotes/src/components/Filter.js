import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setFilter } from '../reducers/filterReducer';

const Filter = () => {
    const [filterHook, setFilterHook] = useState('')
    const dispatch = useDispatch()

    const handleChange = (event) => {
        setFilterHook(event.target.value)
        dispatch( setFilter(event.target.value) )
    }
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter
            <input
                type='text'
                value={filterHook}
                onChange={handleChange} 
            />
        </div>
    )
}

export default Filter
