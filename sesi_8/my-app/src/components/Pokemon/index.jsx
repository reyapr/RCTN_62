import { useEffect, useState } from "react"
import styles from './styles.module.css'
import { listColorText } from './styles'

const Movie = () => {
    const [pokemons, setPokemons] = useState([])
    
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(res => res.json())
            .then(res => {
                setPokemons(res.results.slice(0,5))
            })
    })
    
    return (
        <div>
            <ul>
                {
                    pokemons.map(pokemon => {
                        return (
                            <li 
                                key={pokemon.url}
                                className={styles.list}
                                style={listColorText}
                            >
                                {pokemon.name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Movie