import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

function Cidades(props) {
<<<<<<< HEAD
  
  useEffect(() => {
    cidades.map( async (eachcities, idx) => {
        const response = await axios.post(
            "https://ironrest.herokuapp.com/cidades",
            eachcities
          );

    })
}, [])

  const CIDADES_URL =
    "http://localhost:3001/mini-ecommerce/estado/:estado/cidades";
=======
  const CIDADES_URL = "https://ironrest.herokuapp.com/cidades";
>>>>>>> dfa4c555b40fc9b88f344b20716971b83d8b3a7e
  const [cidades, setCidades] = useState([]);

  useEffect(() => {
    async function obterCidades() {
      try {
        let { data } = await axios.get(CIDADES_URL.cidades);
        setCidades(data);
      } catch (err) {
        setCidades([]);
      }
    }
    if (props.estado.sigla !== "") {
      obterCidades();
    }
  }, [props.estado]);

  return cidades.map((cidade) => (
    <option key={cidade} value={cidade} data-testid={cidade}>
      {cidade}
    </option>
  ));
}

Cidades.propTypes = {
  estado: PropTypes.string.isRequired,
};

export default Cidades;
