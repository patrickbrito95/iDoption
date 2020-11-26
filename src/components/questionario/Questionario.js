import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';
import './Questionario.css';

function Questionario(){
    return(
         <div>
             <Form>
   <fieldset className="quest">
 <h4 className="title-quest"><strong>SOBRE A SUA CASA</strong></h4>
     <Form.Group as={Col}>  
      <Form.Label as="legend" column sm={2}>
        <p className="questions"><strong>SE SUA CASA É ALUGADA, O PROPRIETÁRIO PERMITE ANIMAIS?</strong></p>
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Sim"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Não"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="Não sei"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
        <Form.Check
          type="radio"
          label="Minha casa é própria"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>

    <Form.Group as={Col}>  
      <Form.Label as="legend" column sm={2}>
        <p className="questions"><strong>VOCÊ MORA EM:</strong></p>
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Casa aberta (O pet poderá entrar e sair livremente para passear)"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Casa fechada (Não vou deixar meu gato sair)"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="Casa de condomínio"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
        <Form.Check
          type="radio"
          label="Apartamento com telas"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
        <Form.Check
          type="radio"
          label="Apartamento sem telas"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Apartamento tipo cobertura com telas"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Apartamento tipo cobertura sem telas"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Apartamento no andar térreo com área externa (Quintal)"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Apartamento no andar térreo sem área externa (Quintal)"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
      </Col>
    </Form.Group>

    <Form.Group as={Col}>  
      <Form.Label as="legend" column sm={2}>
        <p className="questions"><strong>DENTRO DA SUA CASA OU APARTAMENTO (FORA AS DEPENDÊNCIAS DO CONDOMÍNIO), VOCÊ POSSUI:</strong></p>
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="checkbox"
          label="Piscina"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="checkbox"
          label="Lareira, churrasqueira ou forno de pizza"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="checkbox"
          label="Alguma parte que ofereça risco ao pet e que não esteja telada"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
        <Form.Check
          type="checkbox"
          label="Não possuo"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>

    <Form.Group as={Col}>  
      <Form.Label as="legend" column sm={2}>
        <p className="questions"><strong>VOCÊ JÁ TEM OU JÁ TEVE PETS?</strong></p>
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Sim"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Não"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
      </Col>
    </Form.Group>

    <Form.Group as={Col}>  
      <Form.Label as="legend" column sm={2}>
        <p className="questions"><strong>VOCÊ TEM CONDIÇÕES DE ACRESCENTAR NO SEU ORÇAMENTO OS GASTOS QUE TERÁ COM ALIMENTAÇÃO DE BOA QUALIDADE
             (APROXIMADAMENTE R$ 100,00 POR MÊS), VACINAS E ATENDIMENTO VETERINÁRIO (APROXIMADAMENTE R$ 200,00 ANUALMENTE)?</strong></p>
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Sim"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Não"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
      </Col>
    </Form.Group> 
    <Button className="submit-btn"><Link to='/'><span>Voltar</span></Link> </Button>
        <Button className="submit-btn"><Link to='/formulario'><span>Enviar</span></Link> </Button>
    
   </fieldset>

  </Form>
</div>
            
    )
}

export default Questionario;