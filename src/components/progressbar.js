import React from 'react'
import PropTypes from 'prop-types'

const progressbar=({value,max})=>{
    return <progress value={value} max={max}/>
};
progressbar.propTypes = {
  value:PropTypes.number.isRequired,
  max:PropTypes.number

};
progressbar.defaultProps = {
    max:100
};
export default progressbar
