import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title}) => {
    return (
        <nav>
            <div className="nav-wrapper darken-2 nav-styles">
                <a  className="brand-logo" href="#!">{title}</a>
            </div>
        </nav>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
 
export default Header;