import{Navbar, Nav, Container} from 'react-bootstrap'
import{NavLink} from 'react-router-dom'

export default function Navigation(){

    return(
        <Navbar bg="primary" className='border' variant="dark" expand={"sm"}>
        <Container>
          <Navbar.Brand href="#home">Onito</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Form</Nav.Link>
            <Nav.Link as={NavLink} to='/usersData'>Users Data</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}