import React, { useState } from 'react'
//import { useDispatch, connect } from 'react-redux'
import { connect } from 'react-redux';
import { setFilter } from '../reducers/filterReducer'

const Filter = (props) => {
    const [filterHook, setFilterHook] = useState('')
    //const dispatch = useDispatch()

    const handleChange = (event) => {
        setFilterHook(event.target.value)
        //dispatch( setFilter(event.target.value) )
        props.setFilter(event.target.value)
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

//export default Filter

const mapDispatchToProps = {
    setFilter
}

const ConnectFilter = connect(
    null,
    mapDispatchToProps
) (Filter)

export default ConnectFilter
