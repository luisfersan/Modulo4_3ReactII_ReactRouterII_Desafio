import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Container, Card } from 'react-bootstrap'

const PokemonDetail = () => {
  const { name } = useParams()
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        )
        setPokemon(response.data)
      } catch (error) {
        console.error('Error fetching the Pokémon data', error)
      }
    }

    fetchPokemon()
  }, [name])

  return (
    <Container className="mt-5">
      {pokemon ? (
        <Card>
          <Card.Img
            variant="top"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
          <Card.Body>
            <Card.Title>{pokemon.name}</Card.Title>
            <Card.Text>
              {/* Añadir más información del Pokémon aquí */}
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <p>Cargando...</p>
      )}
    </Container>
  )
}

export default PokemonDetail
