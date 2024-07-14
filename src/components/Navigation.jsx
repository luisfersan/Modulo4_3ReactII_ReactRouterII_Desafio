import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

const Navigation = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
    >
      <Navbar.Brand href="/">
        <img
          src="/public/iconopokemon.png"
          alt="Icono del Navbar"
          style={{ width: '30px', height: '30px', marginRight: '10px' }}
        />
        PokeApp
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            as={NavLink}
            to="/"
            exact
            activeClassName="active"
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/pokemones"
            activeClassName="active"
          >
            Pokemones
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
