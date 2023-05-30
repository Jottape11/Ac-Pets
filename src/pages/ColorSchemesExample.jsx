import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
    <div>
      <Navbar className="navcor" variant="dark">
        <Container>
          <Navbar.Brand href="/">
          <img alt='' src='/src/assets/pets.jpg' height="30" className="d-inline-block align-top"/>{''}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/produtos">Produtos</Nav.Link>
            <Nav.Link href="/sobre">Sobre</Nav.Link>
            <Nav.Link href="/contato">Contato</Nav.Link>
          </Nav>
        </Container>  
      </Navbar>
      </div>
    </>
  );
}

export default ColorSchemesExample;