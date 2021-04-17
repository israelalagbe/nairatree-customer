import React, { useState } from "react";
import "./index.scss";
import { Modal, ModalBody, FormGroup, Label, Input } from "reactstrap";
import CloseIcon from "@material-ui/icons/Close";
import CancelIcon from "@material-ui/icons/Cancel";
import AppButton from "../../AppButton";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import useAuthentication from "../../../stores/useAuthentication";

const AddressBookModal = ({ show, onClose }) => {
  const { user } = useAuthentication();
  const addresses = user?.address_book;
  const [selectedAddress, setSelectedAddress] = useState(
    addresses.find((item) => item.is_default)
  );

  console.log(user);
  return (
    <Modal isOpen={show} toggle={onClose} size="lg">
      <ModalBody className="addressModalBody">
        <div className="addressBookModal">
          <div className="addressBookContainer">
            <h2> Address Book</h2>
            <CloseIcon className="cursor-pointer close-image" onClick={onClose} />
          </div>
          <div className="add-new-address">
            <CancelIcon />
            <h6> ADD A NEW ADDRESS</h6>
          </div>
          <div className="addressBookDefault">
            <h5>DEFAULT ADDRESS</h5>
            {addresses.map((item) => (
              <div className="addressBookForm">
                <div className="addressFormGroup">
                  <FormGroup check>
                    <Label check>
                      <Input onClick={() => setSelectedAddress(item)} type="checkbox" checked={item._id === selectedAddress?._id} />
                      <div>
                        <h4>{item.name}</h4>
                        <h6>{item.address}</h6>
                        <h6>{item.phone}</h6>
                      </div>
                    </Label>
                  </FormGroup>
                </div>
                <div className="addressGroupEdit">
                  <h6>
                    Edit
                    <EditIcon />
                  </h6>
                  <h6>
                    Remove
                    <DeleteOutlineIcon />
                  </h6>
                </div>
              </div>
            ))}
          </div>
          <div>
            <AppButton buttonText="Use This Address" />
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};
export default AddressBookModal;
