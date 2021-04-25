import React, { useState } from "react";
import "./index.scss";
import { Modal, ModalBody, FormGroup, Label, Input } from "reactstrap";
import CloseIcon from "@material-ui/icons/Close";
import CancelIcon from "@material-ui/icons/Cancel";
import AppButton from "../../AppButton";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import useAuthentication from "../../../stores/useAuthentication";
import { useHistory, Link } from "react-router-dom";

const AddressBookModal = ({ show, onClose }) => {
  const history = useHistory();
  const { user, updateUser } = useAuthentication();
  const addresses = user?.address_book;
  const [selectedAddress, setSelectedAddress] = useState(
    addresses.find((item) => item.is_default)
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      address_book: [
        ...addresses.map((item) => ({
          name: item.name,
          region: item.region,
          city: item.city,
          phone: item.phone,
          address: item.address,
          label: item.label,
          is_default: item._id === selectedAddress?._id,
        })),
      ],
    };

    updateUser(payload, () => history.push("/checkout-details"));
    onClose();
  };

  const removeAddress = (id) => {
    const newAddress = addresses.filter((address) => {
      return address._id !== id;
    });
    updateUser(newAddress, () => {});
  };

  return (
    <Modal isOpen={show} toggle={onClose} size="lg">
      <ModalBody className="addressModalBody">
        <div className="addressBookModal">
          <div className="addressBookContainer">
            <h2> Address Book</h2>
            <CloseIcon
              className="cursor-pointer close-image"
              onClick={onClose}
            />
          </div>
          <Link
            to="/profile/addressbook/new-address"
            className="add-new-address"
          >
            <CancelIcon />
            <h6> ADD A NEW ADDRESS</h6>
          </Link>
          <div className="addressBookDefault">
            <h5>DEFAULT ADDRESS</h5>
            {addresses.map((item) => (
              <div className="addressBookForm">
                <div className="addressFormGroup">
                  <FormGroup check>
                    <Label check>
                      <Input
                        onClick={() => setSelectedAddress(item)}
                        type="checkbox"
                        checked={item._id === selectedAddress?._id}
                      />
                      <div>
                        <h4>{item.name}</h4>
                        <h6>{item.address}</h6>
                        <h6>{item.phone}</h6>
                      </div>
                    </Label>
                  </FormGroup>
                </div>
                <div className="addressGroupEdit">
                  <h6 className="pointer">
                    Edit
                    <EditIcon />
                  </h6>
                  <h6
                    className="pointer"
                    onClick={() => removeAddress(item._id)}
                  >
                    Remove
                    <DeleteOutlineIcon />
                  </h6>
                </div>
              </div>
            ))}
          </div>
          <div className="addressModalButton">
            <AppButton
              buttonText="Use This Address"
              onClick={handleSubmit}
              classname="useAddressButton"
            />
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};
export default AddressBookModal;
