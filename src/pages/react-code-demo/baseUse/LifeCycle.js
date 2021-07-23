import React from 'react'
import PropTypes from 'prop-types'
import lifecycle from './lifecycle.png'

class LifeCycle extends React.Component {
    render(){
        return (
            <img src={lifecycle} style={{ width: '100%', maxWidth: 1138}}/>
        )
    }
}
 
export default LifeCycle