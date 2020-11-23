import React from "react";
import { Form, Row, Col, Button, Jumbotron, Modal } from "react-bootstratp";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { registerLocale } from "react-datepicker";
import pt from "date-fns/locale/pt";
import PropTypes from "prop-types";

registerLocale("pt", pt);

function Formulario(props) {
  return (
    <Jumbotron fluid style={{ margin: "10px" }}>
      <h3>
        Preencha o Formulário para Manifestar seu Interesse em Adotar um
        Bichinho
      </h3>
      <Form noValidate style={{ margin: "10px" }}>
        <Form.Group as={Row} controlID="email">
          <Form.Label column sm={3}>
            Email
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="email"
              pleaceholder="Digite o seu email"
              name="email"
              data-testid="txt-email"
            />
            <Form.Control.Feedback type="invalid">
              Digite um email válido.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="nomeCompleto">
          <Form.Label column sm={3}>
            Nome Completo
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              placeholder="Digite o seu nome completo"
              name="nomeCompleto"
              data-testid="txt-nome-completo"
            />
            <Form.Control.Feedback type="invalid">
              Digite o seu nome completo (mínimo 5 caracteres).
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="dataNascimento">
          <Form.Label column sm={3}>
            Data de nascimento
          </Form.Label>
          <Col sm={9}>
            <DatePicker
              locale="pt"
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              dateFormat="dd/MM/yyyy"
              placeholderText="Selecione a data"
              withPortal
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="cpf">
          <Form.Label column sm={3}>
            CPF
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              placeholder="Digite o seu CPF"
              name="cpf"
              data-testid="txt-cpf"
            />
            <Form.Control.Feedback type="invalid">
              Digite um CPF válido.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlID="endereco">
          <Form.Label column sm={3}>
            Endereço
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              placeholder="Digite o seu endereço completo"
              name="endereco"
              data-testid="txt-endereco"
            />
            <Form.Control.Feedback type="invalid">
              Digite o seu endereço.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="estado">
          <Form.Label column sm={3}>
            Estado
          </Form.Label>
          <Col sm={9}>
            <Form.Control as="select" name="estado" data-testid="estado">
              {/* {listar os Estados aqui} */}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Selecione o seu estado.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="cidade">
          <Form.Label column sm={3}>
            Cidade
          </Form.Label>
          <Col sm={9}>
            <Form.Control as="select" name="cidade" data-testid="cidade">
              <option value="">Selecione a cidade</option>
              {/* {listar as cidades aqui} */}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Selecione a sua cidade.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <From.Group as={Row} controlId="cep">
          <Form.Label column sm={3}>
            CEP
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              placeholder="Digite o seu CEP"
              name="cep"
              data-testid="txt-cep"
            />
            <Form.Control.Feedback type="invalid">
              Digite o seu CEP.
            </Form.Control.Feedback>
          </Col>
        </From.Group>

        <From.Group as={Row} controlId="termosCondicoes">
          <Form.Check
            name="termosCondicoes"
            label="Concordo com os termos e condições"
            style={{ marginLeft: "15px" }}
            data-testid="check-termos-condicoes"
          />
        </From.Group>

        <Form.Group as={Row} condtrolId="finalizarAdocao">
          <Col className="text-center" sm={12}>
            <Button
              type="submit"
              varian="success"
              data-testid="btn-finalizar-adocao"
            >
              Quero Adotar
            </Button>
          </Col>
        </Form.Group>
      </Form>

      <Modal show={true} data-testid="modal-adocao">
        <Modal.Header closeButton>
          <Modal.Title>Obrigad@ por seu interesse em adotar!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Entraremos em contato em até 5 dias úteis para agendar a visita a sua
          casa ou apartamento. Um email de confirmação foi enviado com os
          principais requisitos e cuidados para viabilizar a adoção. Lembramos
          que o agendamento da visita não caracteriza aprovação da adoção, a
          qual apenas será formalizada por meio da assinatura do respectivo
          termo de responsabilidade.
        </Modal.Body>
      </Modal>
    </Jumbotron>
  );
}

export default Formulario;
