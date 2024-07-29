import React, { useEffect, useState } from "react";
import Spin from "./LoadingSpin";

export const FavoriteCard = (props) => {


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
                    setPokemonImgLink(result.sprites.other.showdown.front_default);
                })
                .catch((error) => {
                    console.error(error);
                    setPokemonImgLink(Spin);
                    console.log('ha fallado el pokemon ' + props.name)
                });
        }
    }, [url]);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const styles = {
        cardStyle: {
            'marginBottom': '5px'
        },
        imgStyle: {
            height: '2.8rem',
            width: '2.8rem',
            objectFit: 'contain',
            margin: '0.2rem 0.2rem'
        }
    };
    
    return (
        <div class="card" style={styles.cardStyle}>
            <div class="card-body text-start p-0">
                {pokemonImgLink ? <img src={pokemonImgLink} style={styles.imgStyle}/> : <Spin />}
                {capitalizeFirstLetter(props.name)}
            </div>
        </div>
    )
}