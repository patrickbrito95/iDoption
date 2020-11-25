import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'


function Disclaimer() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Disclaimer
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>DISCLAIMER</Modal.Title>
          </Modal.Header>
          <Modal.Body><strong>IMPORTANTE:</strong> Abandonar, soltar, deixar fugir, não alimentar, acorrentar, bater, amedrontar e deixar acasalar indiscriminadamente são formas de maus tratos com pena prevista na lei. O iDoption atuará conforme artigo 164 do Código Penal, artigo 32 da Lei Federal 9.605, de 12 de fevereiro de 1998 <strong>(Lei de Crimes Ambientais)</strong>, e da Lei Municipal 13.131, de 18 de maio de 2001 <strong>(Lei de Posse Responsável)</strong>, contra qualquer um que descumpra as determinações previstas, sejam estes adotantes ou não. Em caso de dúvidas, busque informações e auxílios de profissionais veterinários e nunca de curiosos ou da internet.</Modal.Body>
          <Modal.Footer>
             <Button variant="primary" onClick={handleClose}>
              Estou ciente!
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }


  export default Disclaimer;