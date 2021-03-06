import React, { useState, useEffect} from 'react';
import { Card, Button } from 'react-bootstrap';
import './Listar-Animais.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ListAnimals = () => {
    
    const [animals, setAnimals] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get(
              "https://ironrest.herokuapp.com/animals"
            );
            setAnimals([...response.data]);
          } catch (err) {
            console.error(err);
          }
        }
        fetchData();
      }, []);
    
      console.log(animals)

    return (
        <div className="card-div">
            <hr></hr>
            <div className="title-text">
                <h2>Venha conhecer nossos bichinhos, eles querem um novo lar.</h2>
            </div>
            <br></br>
            <hr></hr>

            
            <div className="div-map">
            {animals.map((eachAnimals, idx) => {
                return (
                    <div className="card" key={eachAnimals._id}>
                        <Card className="card-box" style={{ width: '18rem', margin: '10px' }}>
                            <Card.Img className="img-thumbnail" variant="top" src={eachAnimals.image} />
                            <Card.Body className="text-center">
                                <Card.Title style={{ heigth: '40px' }}>{eachAnimals.name}</Card.Title>
                                <Card.Text className="text-box">
                                </Card.Text>
                                <Button className="btn-adopt"><Link className="link" to='/questionario'>Me interessei!</Link></Button>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
            </div>
           
        </div>
    )
}

export default ListAnimals;
