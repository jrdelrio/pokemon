import React, { useEffect, useState, useContext } from "react";
import Spin from "./LoadingSpin";
import { AppContext } from '../store/appContext';

export const FavoriteCard = (props) => {

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
            marginBottom: '5px'
        },
        cardBodyStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.5rem',
            position: 'relative'
        },
        imgStyle: {
            height: '2.8rem',
            width: '2.8rem',
            objectFit: 'contain',
            margin: '0.1rem'
        },
        textStyle: {
            marginLeft: '0.5rem'
        },
        optionsBoxStyle: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)',
            gap: '0.1rem',
            border: '1px solid black',
            borderRadius: '10%',
            height: '3.5rem',
            width: '3.5rem',
            position: 'absolute',
            right: '0.2rem',
            top: '50%',
            transform: 'translateY(-50%)'

        },
        optionsItemStyle: {
            display: "flex", // Allow centering icons within each grid cell
            justifyContent: "center", // Center horizontally
            alignItems: "center", // Center vertically
            height: "100%", // Occupy full height of grid cell
            width: "100%", // Occupy full width of grid cell
            border: "none", // Remove border (optional)
            // Add custom styles for icon elements or background color here
        },

        likeIconStyle: {
            color: 'red',
            fontSize: '1.4rem'
        }
    };

    const handleClick = () => {
        actions.removeFavorite(props.name)
    }

    return (
        <div className="card" style={styles.cardStyle}>
            <div className="card-body" style={styles.cardBodyStyle}>
                <div>
                    {pokemonImgLink ? (
                        <img src={pokemonImgLink} style={styles.imgStyle} alt={`${props.name}`} />
                    ) : (
                        <Spin />
                    )}
                    <span style={styles.textStyle}>{capitalizeFirstLetter(props.name)}</span>
                </div>
                <div>
                    <i class="fa-solid fa-heart" style={styles.likeIconStyle} onClick={handleClick}></i>
                </div>
                {/* <div className="optionsBox" style={styles.optionsBoxStyle}>
                    <div className="optionsItem" style={styles.optionsItemStyle}>
                        <div><i class="fa-solid fa-heart" style={styles.likeIconStyle}></i></div>
                    </div>
                    <div className="optionsItem" style={styles.optionsItemStyle}>
                        <div>A</div>
                    </div>
                    <div className="optionsItem" style={styles.optionsItemStyle}>
                        <div>I</div>
                    </div>
                    <div className="optionsItem" style={styles.optionsItemStyle}>
                        <div>M</div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}