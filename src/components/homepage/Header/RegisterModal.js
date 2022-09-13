import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function RegisterModal() {
  const [show, setShow] = useState(false); //MODALE

  const handleClose = () => setShow(false); //MODALE
  const handleShow = () => setShow(true); //MODALE

  const [fName, setFName] = useState(""); //FORM
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [localData, setLocalData] = useState([]); //Dati nel local storage (email + pass)
  const [userAllData, setUserAllData] = useState([]); //Dutti i dati

  function handleFNameChange(event) {
    setFName(event.target.value);
  }

  function handleLNameChange(event) {
    setLName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePhoneNumberChange(event) {
    setPhoneNumber(event.target.value);
  }

  function handlePassChange(event) {
    setPass(event.target.value);
  }

  function handleConfPassChange(event) {
    setConfirmPass(event.target.value);
  }

  const resetRef = useRef();

  function handleFormSubmission(event) {
    event.preventDefault();

    setLocalData(localData.concat(email + pass));

    setUserAllData(
      userAllData.concat({
        fName,
        lName,
        phoneNumber,
        email,
        pass,
        confirmPass,
      })
    );

    resetRef.current.reset();
  }

  useEffect(() => {
    localStorage.setItem("users", localData);
  }, [localData]);

  useEffect(() => {
    console.log(userAllData);
  }, [userAllData]);

  return (
    <>
      <p className="text-dark m-0" onClick={handleShow}>
        Register
      </p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="navigation">
          <Modal.Title>Please, insert your personal information.</Modal.Title>
        </Modal.Header>
        <form ref={resetRef} onSubmit={handleFormSubmission}>
          <Modal.Body className="home">
            <input
              placeholder="First name"
              required
              type="text"
              className="pb-1 ps-1 mb-2 border-1 border-dark rounded shadow w-100 bg-success placeholderColor"
              autoFocus
              id="firstName"
              name="firstName"
              onChange={handleFNameChange}
            />
            <input
              placeholder="Last Name"
              required
              type="text"
              className="pb-1 ps-1 mb-2 border-1 border-dark rounded shadow w-100 bg-success placeholderColor"
              id="lastName"
              name="lastName"
              onChange={handleLNameChange}
            />
            <input
              placeholder="Email"
              required
              type="email"
              className="pb-1 ps-1 mb-2 border-1 border-dark rounded shadow w-100 bg-success placeholderColor"
              id="mail"
              name="mail"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              onChange={handleEmailChange}
            />
            <input
              placeholder="Phone Number(Optional)"
              required
              type="tel"
              className="pb-1 ps-1 mb-2 border-1 border-dark rounded shadow w-100 bg-success placeholderColor"
              id="tel"
              name="tel"
              onChange={handlePhoneNumberChange}
            />
            <input
              placeholder="Password"
              required
              type="password"
              className="pb-1 ps-1 mb-2 border-1 border-dark rounded shadow w-100 bg-success placeholderColor"
              id="passWord"
              name="passWord"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              onChange={handlePassChange}
            />
            <input
              placeholder="Confirm Password"
              required
              type="password"
              className="pb-1 ps-1 mb-2 border-1 border-dark rounded shadow w-100 bg-success placeholderColor"
              id="confirmPassWord"
              name="confirmPassWord"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              onChange={handleConfPassChange}
            />
          </Modal.Body>
          <Modal.Footer className="navigation">
            <div className="mb-1 w-100">
              <input
                required
                type="checkbox"
                id="checkBox"
                name="checkBox"
                className="mx-2 mb-3"
              />
              <label>
                I agree to the Terms of Service
                {/* eslint-disable-next-line */}
                <a href="#" className="text-white smallest ms-2">
                  Privacy information
                </a>
              </label>
            </div>
            <Button
              variant="secondary"
              onClick={handleClose}
              className="navigation text-black fw-bold"
            >
              Close
            </Button>
            <Button type="submit" className="navigation text-black fw-bold">
              Register
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
