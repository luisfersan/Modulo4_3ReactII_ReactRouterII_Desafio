import { Container, Row, Col } from 'react-bootstrap'
import './Home.css'

const Home = () => {
  return (
    <Container className="text-center mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="mb-4">Bienvenido maestro Pokemón</h1>
          <img
            src="/public/pikachu.png"
            alt="Pokemon Logo"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Home
