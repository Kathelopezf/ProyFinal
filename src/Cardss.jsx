import React, { useState } from 'react';
import './EstiloCard.css';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Button,
  CardGroup,
  Modal as ReactstrapModal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
function MiModal1() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <Button color="danger" onClick={toggle}>
        Más Info
      </Button>
      <ReactstrapModal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Tinku</ModalHeader>
        <ModalBody>
          El precio de esta danaza es de 350Bs..
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Incribirse
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </ReactstrapModal>
    </>
  );
}
function MiModal2() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <Button color="danger " onClick={toggle}>
        Más Info
      </Button>
      <ReactstrapModal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Diablada</ModalHeader>
        <ModalBody>
          El precio de esta danaza es de 300Bs..
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Incribirse
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </ReactstrapModal>
    </>
  );
}
function MiModal3() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <Button color="danger" onClick={toggle}>
        Más Info
      </Button>
      <ReactstrapModal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Caporales</ModalHeader>
        <ModalBody>
          El precio de esta danaza es de 300Bs..
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Incribirse
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </ReactstrapModal>
    </>
  );
}

function Cardss() {
  return (
    <CardGroup className='prin'>
      <Card className='fondo1'>
        <CardImg
          className="imagen"
          alt="Tinku"
          src="/Tinku.jpg"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5" className="letracard">TINKU</CardTitle>
          <CardText className="letracard">
            El Tinku es una danza y ritual boliviano con raíces en Potosí y Oruro.
          </CardText>
          <MiModal1 />
        </CardBody>
      </Card>

      <Card className='fondo2'>
        <CardImg
          className="imagen"
          alt="Diablada"
          src="/Diablada.jpg"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5" className="letracard">Diablada</CardTitle>
          <CardText className="letracard">
            La Diablada representa la lucha entre el bien y el mal en el folklore boliviano.
          </CardText>
          <MiModal2/>
        </CardBody>
      </Card>

      <Card className='fondo3'>
        <CardImg
          className="imagen"
          alt="Caporales"
          src="/caporales.jpg"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5" className="letracard">Caporales</CardTitle>
          <CardText className="letracard">
            Danza enérgica boliviana con saltos y cascabeles, originaria de La Paz.
          </CardText>
          <MiModal3 />
        </CardBody>
      </Card>
    </CardGroup>
  );
}

export default Cardss;
