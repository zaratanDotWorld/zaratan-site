import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function () {
  const loginUrl = "https://zaratan.managebuilding.com/Resident/portal";

  return (
    <Navbar bg="light" expand="lg" style={{ padding: "10px 10px 10px 30px"}}>
      <Container fluid>
        <Navbar.Brand href="/">Zaratan &#x1F422;</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Houses" id="basic-nav-dropdown">
              <NavDropdown.Header>Highland Park</NavDropdown.Header>
              <NavDropdown.Item href="/houses/sage">Sage</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Tools" id="basic-nav-dropdown">
              <NavDropdown.Item href="/tools">Overview</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/tools/chores">Chores</NavDropdown.Item>
              <NavDropdown.Item href="/tools/hearts">Hearts</NavDropdown.Item>
              <NavDropdown.Item href="/tools/things">Things</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {/* <LoginButton loginUrl={loginUrl} /> */}
      </Container>
    </Navbar>
  )
}

export function LoginButton({ loginUrl }) {
  return (
    <ul className="navbar-nav navbar-right">
      <li className="nav-item btn btn-sm btn-outline-success">
        <a className="nav-link" href={loginUrl}><b>Housemate Login</b></a>
      </li>
  </ul>
  )
}
