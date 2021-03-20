import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({result}) => {

    const {name, main} = result;

    if(!name) return null;

    // Restar en grados kelvin
    const kelvin = 273.15

    return (
        <>
            <div className="card-panel col s12 input2-form">
                <div className="black-text">
                    <h2>Clima de la ciudad {name}:</h2>
                    <p className="temperatura">
                        {parseFloat(main.temp - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                    </p>
                    <p>Temperatura Máxima:
                        {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                    </p>
                    <p>Temperatura Mínima:
                        {parseFloat(main.temp_min - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                    </p>
                    <p>Humedad: 
                        {main.humidity} <span>%</span>
                    </p>
                </div>
            </div>
        </>
    );
}

Clima.propTypes = {
    result: PropTypes.object.isRequired
}
 
export default Clima;