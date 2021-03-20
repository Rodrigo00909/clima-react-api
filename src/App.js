import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {

    const [search, setSearch] = useState({
      city: '',
      country: ''
    });

    const [consult, setConsult] = useState(false);
    const [result, setResult] = useState({});
    const [error, setError] = useState(false);

    const {city, country} = search;

    useEffect(() => {
      const consultAPI = async () => {
        if(consult) {
          const appId = '9f9ebe0e34e28be31c1d400a1b0f9dce';
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
          
          const rta = await fetch(url);
          const result = await rta.json();
          
          setResult(result);
          setConsult(false);

          if(result.cod === "404") {
            setError(true);
          } else {
            setError(false);
          }
        }
      };
      consultAPI();
      // eslint-disable-next-line
    }, [consult]);

    let component;
    if(error) {
      component = <Error mnsj="Que ciudad es esa????" />
    } else {
      component = <Clima result={result} />
    }

  return (
    <>
      <Header 
        title='Ro Clima App'
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12 inputs-form">
              <Formulario search={search} setSearch={setSearch} setConsult={setConsult}/>
            </div>
            <div className="col m6 s12">
              {component}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
