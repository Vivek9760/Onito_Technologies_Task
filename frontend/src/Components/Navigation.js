import{Navbar, Nav, Container} from 'react-bootstrap'
import{NavLink} from 'react-router-dom'

export default function Navigation(){

    return(
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Onito</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Form</Nav.Link>
            <Nav.Link as={NavLink} to='/usersData'>Users Data</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}