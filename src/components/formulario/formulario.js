import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Row, Col, Button, Jumbotron, Modal } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { registerLocale } from "react-datepicker";
import pt from "date-fns/locale/pt";
import PropTypes from "prop-types";
// import Estados from "./estados";
// import Cidades from "./cidades";
import { Formik } from "formik";
import * as yup from "yup";
import { validarCpf, formatarCpf } from "../../utils/cpf-util";
import formatarCep from "../../utils/cep-util";
import './formulario.css';
import Disclaimer from './Disclaimer-modal';

registerLocale("pt", pt);

function Formulario(props) {
  const [dataNascimento, setDataNascimento] = useState(null);
  const [formEnviado, setFormEnviado] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);


  const schema = yup.object({
    email: yup.string().email().required(),
    nomeCompleto: yup.string().required().min(5),
    cpf: yup
      .string()
      .required()
      .min(14)
      .max(14)
      .test("cpf-valido", "CPF inválido", (cpf) => validarCpf(cpf)),
    endereco: yup.string().min(5).required(),
    cidade: yup.string().required(),
    estado: yup.string().required(),
    cep: yup.string().required().min(9).max(9),
    termosCondicoes: yup.bool().oneOf([true]),
  });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  function visivel() {
    return props.visivel ? null : "hidden";
  }

  function finalizarAdocao(values) {}

  function handleDataNascimento(data) {
    setDataNascimento(data);
  }

  function datePickerCss() {
    if (!formEnviado) {
      return "form-control";
    }
    if (dataNascimento) {
      return "form-control is-valid";
    } else {
      return "form-control is-invalid";
    }
  }

  return (
    <Jumbotron className="form" fluid style={{ margin: "10px" }} className={visivel()}>
      <h3>
        Preencha o Formulário para Manifestar seu Interesse em Adotar um
        Bichinho
      </h3>

      <Formik
        onSubmit={(values) => finalizarAdocao(values)}
        initialValues={{
          email: "",
          nomeCompleto: "",
          cpf: "",
          endereco: "",
          cidade: "",
          estado: "",
          cep: "",
          termosCondicoes: false,
        }}
        validationSchema={schema}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate style={{ margin: "10px" }} onSubmit={handleSubmit}>
            <Form.Group as={Row} controlID="email">
              <Form.Label className="form-label" column sm={3}>
                Email
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="email"
                  pleaceholder="Digite o seu email"
                  name="email"
                  data-testid="txt-email"
                  value={values.email}
                  onChange={handleChange}
                  isValid={touched.email && !errors.email}
                  isInvalid={touched.email && !!errors.email}
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
                  value={values.nomeCompleto}
                  onChange={handleChange}
                  isValid={touched.nomeCompleto && !errors.nomeCompleto}
                  isInvalid={touched.nomeCompleto && !!errors.nomeCompleto}
                />
                <Form.Control.Feedback type="invalid">
                  Digite o seu nome completo (mínimo 5 caracteres).
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            {/* <Form.Group as={Row} controlId="dataNascimento">
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
                  selected={dataNascimento}
                  onchange={handleDataNascimento}
                  className={datePickerCss()}
                />
              </Col>
            </Form.Group> */}

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
                  value={values.cpf}
                  onChange={(e) => {
                    e.currentTarget.value = formatarCpf(e.currentTarget.value);
                    handleChange(e);
                  }}
                  isValid={touched.cpf && !errors.cpf}
                  isInvalid={touched.cpf && !!errors.cpf}
                />
                <Form.Control.Feedback type="invalid">
                  Digite um CPF válido.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="endereco">
              <Form.Label column sm={3}>
                Endereço
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Digite o seu endereço completo"
                  name="endereco"
                  data-testid="txt-endereco"
                  value={values.endereco}
                  onChange={handleChange}
                  isValid={touched.endereco && !errors.endereco}
                  isInvalid={touched.endereco && !!errors.endereco}
                />
                <Form.Control.Feedback type="invalid">
                  Digite o seu endereço.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            {/* <Form.Group as={Row} controlId="estado">
              <Form.Label column sm={3}>
                Estado
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Digite o seu estado"
                  name="estado"
                  data-testid="estado"
                  value={values.estado}
                  onChange={handleChange}
                  isValid={touched.estado && !errors.estado}
                  isInvalid={touched.estado && !!errors.estado}
                >
                  
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Digite o seu estado.
                </Form.Control.Feedback>
              </Col>
            </Form.Group> */}

            {/* <Form.Group as={Row} controlId="cidade">
              <Form.Label column sm={3}>
                Cidade
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Digite a sua cidade"
                  name="cidade"
                  data-testid="cidade"
                  value={values.cidade}
                  onChange={handleChange}
                  isValid={touched.cidade && !errors.cidade}
                  isInvalid={touched.cidade && !!errors.cidade}
              >
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Digite a sua cidade.
                </Form.Control.Feedback>
              </Col>
            </Form.Group> */}

            <Form.Group as={Row} controlId="cep">
              <Form.Label column sm={3}>
                CEP
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Digite o seu CEP"
                  name="cep"
                  data-testid="txt-cep"
                  value={values.cep}
                  onChange={(e) => {
                    e.currentTarget.value = formatarCep(e.currentTarget.value);
                    handleChange(e);
                  }}
                  isValid={touched.cep && !errors.cep}
                  isInvalid={touched.cep && !!errors.cep}
                />
                <Form.Control.Feedback type="invalid">
                  Digite o seu CEP.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="termosCondicoes">
              <Form.Check
                name="termosCondicoes"
                label="Concordo com os termos e condições"
                style={{ marginLeft: "15px" }}
                data-testid="check-termos-condicoes"
                value={values.termosCondicoes}
                onChange={handleChange}
                isValid={touched.termosCondicoes && !errors.termosCondicoes}
                isInvalid={touched.termosCondicoes && !!errors.termosCondicoes}
              />
            </Form.Group>
            <Disclaimer />
            <Form.Group as={Row} condtrolId="finalizarAdocao">
              <Col className="text-center" sm={12}>
                <Button
                  type="submit"
                  variant="primary"
                  data-testid="btn-finalizar-adocao"
                  onClick={handleShow}
                >
                  Quero Adotar
                </Button>
              </Col>
            </Form.Group>
          </Form>
        )}
      </Formik>

      <Modal show={showModal} data-testid="modal-adocao" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agradecemos o seu interesse em adotar!</Modal.Title>
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

// Formulario.propTypes = {
//   visivel: PropTypes.bool.isRequired,
//   handleMenu: PropTypes.func.isRequired,
// };

export default Formulario;
