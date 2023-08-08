import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const ModalNovedades = ({ handleClose, show, title }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
      <Modal.Body>
          <div className="container">
            <div className="row mt-3">
              <h5 className="text-center">{title}</h5>
              <p className="text-center">Inscribte ahora!!!</p>
            </div>
            <div className="row">
              <Form>
                <Form.Control type="text" autoFocus />
              </Form>
              <div className="container text-center p-3">
                <Button size="sm">MAS INFORMACION</Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalNovedades;
