import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import logo from "../img/pokemon-logo.png";
import Card from "../components/Card";

const Home = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    const styles = {
        wrapperStyle : {
            padding: '20px',
            textAlign: 'center'
        },

        logoStyle : {
            width: '200px',
            marginBottom: '0'
        },

        containerStyle : {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
        },

        cardContainerStyle : {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: '1 1 50%',
            boxSizing: 'border-box',
            padding: '10px'
        }
    };

    if (loading) {
        return <div style={styles.wrapperStyle}>Loading...</div>;
    }

    if (error) {
        return <div style={styles.wrapperStyle}>Error: {error.message}</div>;
    }

    return (
        <div style={styles.wrapperStyle}>
            <img style={styles.logoStyle} src={logo} alt="Pokémon Logo" />
            <Navbar />
            <div style={styles.containerStyle}>
                {pokemonList.map((pokemon, index) => (
                    <div key={index} style={styles.cardContainerStyle}>
                        <Card name={pokemon.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
