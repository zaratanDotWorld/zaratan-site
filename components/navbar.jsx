import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function () {
  return (
    <Navbar bg="light" expand="lg" style={{ padding: "10px 10px 10px 30px"}}>
      <Container fluid>
        <Navbar.Brand href="/">Zaratan &#x1F422;</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Houses" id="basic-nav-dropdown">
              <NavDropdown.Header>Highland Park</NavDropdown.Header>
              <NavDropdown.Item href="/houses/sage">&#x1FAB4; Sage House</NavDropdown.Item>
              <NavDropdown.Item href="/houses/cactus">&#x1F335; Cactus Cottage</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Tools" id="basic-nav-dropdown">
              <NavDropdown.Item href="/tools/chorewheel">&#x1F506; Chore Wheel</NavDropdown.Item>
              <NavDropdown.Item href="/tools/chores">&nbsp;&nbsp;&nbsp; &#x1f9e4; Chores</NavDropdown.Item>
              <NavDropdown.Item href="/tools/hearts">&nbsp;&nbsp;&nbsp; &#x1f496; Hearts</NavDropdown.Item>
              <NavDropdown.Item href="/tools/things">&nbsp;&nbsp;&nbsp; &#x1f6d2; Things</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {/* <LoginButton /> */}
      </Container>
    </Navbar>
  )
}

export function LoginButton() {
  const loginUrl = "https://zaratan.managebuilding.com/Resident/portal";

  return (
    <ul className="navbar-nav navbar-right">
      <li className="nav-item btn btn-sm btn-outline-success">
        <a className="nav-link" href={loginUrl}><b>Housemate Login</b></a>
      </li>
  </ul>
  )
}
