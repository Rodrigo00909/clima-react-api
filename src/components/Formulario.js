import React, {useState} from 'react'

const Formulario = ({search, setSearch, setConsult}) => {

    const [error, setError] = useState(false);

    const {city, country} = search;

    const handleChange = (e) => {
        setSearch({
            ...search, // copia state
            [e.target.name] : e.target.value // nombre - valor
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(city.trim() === '' || country.trim() === '') {
            setError(true);
            return;
        }
        setError(false);

        setConsult(true); // Consult cambia de false a true y vuelve a consultar - Detener renderizado useEffect
    }

    return (
        <form onSubmit={handleSubmit}>
            {error ? <p className="red darken-4 error">Dejaste algún campo sin completar</p> : null}
            <div className="input-field col s12">
                <input 
                type="text"
                name="city"
                id="city"
                value={city}
                onChange={handleChange}
                />
                <label htmlFor="city">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select name="country" id="country" value={country} onChange={handleChange}>
                    <option value="">--- Selecciona tu País ---</option>
                    <option value="AR">Argentina</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="ES">España</option>
                </select>
                <label htmlFor="country">País: </label>
            </div>
            <div className="input-field col s12">
                <input type="submit" value="Buscar" className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12" />
            </div>
        </form>
    );
}
 
export default Formulario;