import React from 'react';
import animals from '../animals.json';
import { Card, Button } from 'react-bootstrap';
import './Listar-Animais.css';
import { Link } from 'react-router-dom';

const ListAnimals = () => {
    return (
        <div className="card-div">
            <hr></hr>
            <div className="title-text">
                <h2>Venha conhecer nossos bichinhos, eles querem um novo lar.</h2>
            </div>
            <br></br>
            <hr></hr>

            {animals.map((eachAnimals, idx) => {
                return (
                    <div className="card" key={eachAnimals.name}>
                        <Card className="card-box" style={{ width: '18rem', margin: '10px' }}>
                            <Card.Img className="img-thumbnail" variant="top" src={eachAnimals.image} />
                            <Card.Body className="text-center">
                                <Card.Title style={{ heigth: '40px' }}>{eachAnimals.name}</Card.Title>
                                <Card.Text className="text-box">
                                </Card.Text>
                                <Button className="btn"><Link className="link" to='/formulario'>Me interessei!</Link></Button>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
        </div>
    )
}



export default ListAnimals; 