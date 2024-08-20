import { Button, Container, Nav } from "react-bootstrap"
import { Link, Outlet } from "react-router-dom"
import logo from "./image/39202732-6c1ba82e-4810-11e8-81e7-4e8ad89110ba.png"
import "./css/root.css"

const Root = () => {
  return (
    <>
        <nav>
            <Container className="nav-container">
                <div className="logo">
                    <Nav.Link as={Link} to={"/"}>
                        <img src={logo} />
                    </Nav.Link>
                </div>

                <div className="nav-btn">
                    <Nav.Link as={Link} to={"/login"}>
                        <Button variant="danger">Giriş Yap</Button>
                    </Nav.Link>
                </div>
            </Container>
        </nav>
        <Outlet />
    </>
  )
}

export default Root