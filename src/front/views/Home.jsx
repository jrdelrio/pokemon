import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import logo from "../img/pokemon-logo.png";
import Card from "../components/Card";
import { AppContext } from '../store/appContext';
import FavoriteButton from "../components/FavoriteButton";
import { Offcanvas } from "../components/Offcanvas";
import '../styles/home.css';

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

    if (loading) {
        return <div className='wrapper'>Loading...</div>;
    }

    if (error) {
        return <div className='wrapper'>Error: {error.message}</div>;
    }

    return (
        <div className="wrapper">
            < FavoriteButton />
            <img className="logo" src={logo} alt="Pokémon Logo" />
            <Navbar />
            < Offcanvas />
            <div className="container">
                {filteredPokemonList.map((pokemon, index) => (
                    <div key={index} className="card-container">
                        <Card name={pokemon.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
