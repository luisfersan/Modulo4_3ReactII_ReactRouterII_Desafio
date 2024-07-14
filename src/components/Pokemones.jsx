import { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom'

const Pokemones = () => {
  const [pokemones, setPokemones] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const [pokemonDetail, setPokemonDetail] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
      .then((response) => response.json())
      .then((data) => {
        const options = data.results.map((pokemon) => ({
          value: pokemon.name,
          label: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
        }))
        setPokemones(options)
      })
  }, [])

  const handleSelectChange = (selectedOption) => {
    setSelectedPokemon(selectedOption)
  }

  const handleViewDetail = () => {
    if (selectedPokemon) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon.value}`)
        .then((response) => response.json())
        .then((data) => {
          setPokemonDetail(data)
        })
    }
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1>Selecciona un Pokémon</h1>
          <Select
            options={pokemones}
            onChange={handleSelectChange}
            placeholder="Busca un Pokémon..."
          />
          <Button
            className="mt-3"
            onClick={handleViewDetail}
          >
            Ver Detalle
          </Button>
          {pokemonDetail && (
            <Card className="mt-4">
              <Card.Img
                variant="top"
                src={pokemonDetail.sprites.front_default}
              />
              <Card.Body>
                <Card.Title>
                  {pokemonDetail.name.charAt(0).toUpperCase() +
                    pokemonDetail.name.slice(1)}
                </Card.Title>
                <Card.Text>
                  <strong>Altura:</strong> {pokemonDetail.height} decímetros
                  <br />
                  <strong>Peso:</strong> {pokemonDetail.weight} hectogramos
                  <br />
                  <strong>Tipo:</strong>{' '}
                  {pokemonDetail.types
                    .map((typeInfo) => typeInfo.type.name)
                    .join(', ')}
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default Pokemones
