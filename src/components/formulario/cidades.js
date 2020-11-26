import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

function Cidades(props) {
  const CIDADES_URL = "https://ironrest.herokuapp.com/cidades";
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
