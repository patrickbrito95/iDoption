import React from 'react';
import { Card , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ListarProdutos(){
    
    const produtos = [
        {nome: 'Jorginho'},
        {nome: 'Belinha'},
        {nome: 'Jojô'},
        {nome: 'Marreco'},
        {nome: 'Thor'},
        {nome: 'Jully'},
        {nome: 'Mel'},
        {nome: 'Dama'},
        {nome: 'Duque'},
        {nome: 'Totó'},

    ];

    function handleAdotar(event, produto){
        event.preventDefault();
    }

    function render(){
        let key = 1;
        const cards = produtos.map(produto =>
            <Card
                key={key}
                data-testid={'card' + key++}
                style={{width: '18rem', margin: '10px', float: 'left'}}>
                    <Card.Body className="text-center">
                    <Card.Title style={{ heigth: '40px' }}>
                            {produto.nome}
                        </Card.Title>
                        <Card.Text>
                            {produto.descri}
                        </Card.Text>
                        <Button variant="success"
                            style={{ width: '100%'}}
                            onClick={(event) => handleAdotar(event, produto)}>
                            <Link to='/formulario'>Me interessei!</Link>
                         </Button>
                    </Card.Body>
                    </Card>
            );
            return cards;
    }
    
    return render();
    
};

export default ListarProdutos;