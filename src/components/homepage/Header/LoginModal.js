import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function LoginModal() {
  const [show, setShow] = useState(false); //MODALE

  const handleClose = () => setShow(false); //MODALE
  const handleShow = () => setShow(true); //MODALE

  const [email, setEmail] = useState(""); //FORM
  const [pass, setPass] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePassChange(event) {
    setPass(event.target.value);
  }

  const resetRef = useRef();

  function handleFormSubmission(event) {
    event.preventDefault();

    const localData = localStorage.getItem("users");

    if (email && pass && localData.includes(email + pass)) {
      console.log("nino");
    }

    resetRef.current.reset();
  }

  return (
    <>
      <p className="text-dark m-0" onClick={handleShow}>
        Login
      </p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="navigation">
          <Modal.Title>Please, insert your personal information.</Modal.Title>
        </Modal.Header>
        <form ref={resetRef} onSubmit={handleFormSubmission}>
          <Modal.Body className="home">
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
              placeholder="Password"
              required
              type="password"
              className="pb-1 ps-1 mb-2 border-1 border-dark rounded shadow w-100 bg-success placeholderColor"
              id="passWord"
              name="passWord"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              onChange={handlePassChange}
            />
          </Modal.Body>
          <Modal.Footer className="navigation">
            <Button
              className="navigation fw-bold text-black"
              onClick={handleClose}
            >
              Close
            </Button>
            <Button type="submit" className="navigation fw-bold text-black">
              Login
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
