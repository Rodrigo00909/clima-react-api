import React from 'react'
import PropTypes from 'prop-types';

const Error = ({mnsj}) => {
    return (
        <p className="red darken-4 error">{mnsj}</p>
    );
}
 
Error.propTypes = {
    mnsj: PropTypes.string.isRequired
}

export default Error;