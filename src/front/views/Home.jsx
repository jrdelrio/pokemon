import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import logo from "../img/pokemon-logo.png";
import Card from "../components/Card";
import { AppContext } from '../store/appContext';
import FavoriteButton from "../components/FavoriteButton";

const Home = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { store, actions } = useContext(AppContext);


    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch("https://pokeapi.co/api/v2/pokemon?limit=1300", requestOptions)
            .then(response => response.json())
            .then(result => {
                setPokemonList(result.results);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setError(error);
                setLoading(false);
            });
    }, []);

    // filtro la lista que se mapeará, y solo se mostrarán los pokemones que tengas el string store.searchBar en su nombre
    const filteredPokemonList = pokemonList.filter((pokemon) => pokemon.name.toLowerCase().includes(store.searchBar.toLowerCase()))

    const styles = {
        wrapperStyle: {
            padding: '20px',
            textAlign: 'center'
        },

        logoStyle: {
            width: '200px',
            marginBottom: '0'
        },

        containerStyle: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
        },

        cardContainerStyle: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: '1 1 50%',
            boxSizing: 'border-box',
            padding: '10px'
        },
    };

    if (loading) {
        return <div style={styles.wrapperStyle}>Loading...</div>;
    }

    if (error) {
        return <div style={styles.wrapperStyle}>Error: {error.message}</div>;
    }

    return (
        <div style={styles.wrapperStyle}>

            < FavoriteButton style={styles.favButtonStyle}/>

            <img style={styles.logoStyle} src={logo} alt="Pokémon Logo" />
            <Navbar />



            <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <p>Try scrolling the rest of the page to see this option in action.</p>
                </div>
            </div>

            <div style={styles.containerStyle}>
                {filteredPokemonList.map((pokemon, index) => (
                    <div key={index} style={styles.cardContainerStyle}>
                        <Card name={pokemon.name} />
                    </div>
                ))}
            </div>


        </div>
    );
};

export default Home;
