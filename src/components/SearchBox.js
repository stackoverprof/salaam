import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const SearchBox = (props) => {
  const {
    buttonLabel,
    className,
    result
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Change City</ModalHeader>
        <ModalBody>
            <form onSubmit={props.findCityCode}>
                <input type="text" name="cityname" placeholder="City..." />
                <button className="btn btn-danger"type="submit">find city</button>
            </form>
            <form onSubmit={props.updateCityCode}>
            { result.map( item => (
                <div>
                    <input type="radio" name="cityradio" id={item.id} value={`${item.id}|${item.nama}`} />
                    <label for="male">{item.nama}</label><br></br>
                </div>
            ))}
            <button className="btn btn-danger"type="submit">select</button>
            </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default SearchBox;