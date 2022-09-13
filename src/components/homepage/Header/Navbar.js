import Nav from "react-bootstrap/Nav";
import { LoginModal } from "./LoginModal";
import { RegisterModal } from "./RegisterModal";

function Navbar() {
  return (
    <>
      <Nav
        className="justify-content-between fw-bold fs-5 navigation"
        activeKey="/home"
      >
        <div className="d-flex">
          <Nav.Item>
            <Nav.Link href="/home" className="invisible">
              Login
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home" className="invisible">
              Register
            </Nav.Link>
          </Nav.Item>
        </div>
        <div className="d-flex justify-content-center">
          <Nav.Item>
            <Nav.Link href="/home" className="text-dark">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" className="text-dark">
              Chart
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" className="text-dark">
              Nino
            </Nav.Link>
          </Nav.Item>
        </div>

        <div className="d-flex">
          <Nav.Item>
            <button className="bg-transparent border-0 nav-link">
              <RegisterModal />
            </button>
          </Nav.Item>
          <Nav.Item>
            <button className="bg-transparent border-0 nav-link">
              <LoginModal />
            </button>
          </Nav.Item>
        </div>
      </Nav>
    </>
  );
}

export default Navbar;
