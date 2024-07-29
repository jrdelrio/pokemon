import React, {  useContext, useEffect, useState } from 'react';
import Spin from './LoadingSpin';
import pokeball from "../img/pokeball.png";
import { AppContext } from '../store/appContext';

const Card = (props) => {

    const { store, actions } = useContext(AppContext);

    const url = `https://pokeapi.co/api/v2/pokemon/${props.name}`;
    const [pokemonImgLink, setPokemonImgLink] = useState(null);

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        if (url) {
            fetch(url, requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    setPokemonImgLink(result.sprites.other['official-artwork']['front_shiny']);
                })
                .catch((error) => {
                    console.error(error);
                    setPokemonImgLink(pokeball); // Use fallback image on error
                    console.log('ha fallado el pokemon ' + props.name)
                });
        }
    }, [url]);

    const styles = {
        cardStyle: {
            width: '100%',
        },
        cardBodyStyle: {
            padding: "10px"
        },
        hrStyle: {
            margin: '0 1rem',
        },
        likeIconStyle: {
            fontSize: '1.5rem',
            position: 'absolute',
            top: '0.3rem',
            right: '0.3rem',
            color: 'red',
            cursor: 'pointer'
        }

    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const openInfoModal = () => {
        props.openModal(url);
    };

    const handleClick = (e) => {
        if (store.favorites.includes(props.name)){
            actions.removeFavorite(props.name)
        } else {
            actions.addFavorite(props.name)
        }
    };

    return (
        <div className="card" style={styles.cardStyle}>
            {store.favorites.includes(props.name) ? <i class="fa-solid fa-heart" style={styles.likeIconStyle} onClick={handleClick}></i> : <i className="fa-regular fa-heart" style={styles.likeIconStyle} onClick={handleClick}></i>}
            {pokemonImgLink ? <img src={pokemonImgLink} className="card-img-top" alt="Pokemon image" /> : < Spin />}
            <hr style={styles.hrStyle} />
            <div className="card-body" style={styles.cardBodyStyle}>
                <p className="card-text">{capitalizeFirstLetter(props.name)}</p>
            </div>
        </div>



    );
}

export default Card;