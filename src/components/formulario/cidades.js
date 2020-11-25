import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

function Cidades(props) {
  
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
  const [cidades, setCidades] = useState([]);

  useEffect(() => {
    async function obterCidades() {
      try {
        let { data } = await axios.get(
          CIDADES_URL.replace(":estado", props.estado)
        );
        setCidades(data);
      } catch (err) {
        setCidades([]);
      }
    }
    if (props.estado !== "") {
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
