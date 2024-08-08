import React, { useContext } from "react";
import { AppContext } from '../store/appContext';


const FavoriteButton = (props) => {

    const { store, actions } = useContext(AppContext);

    const styles = {

        favButtonIconStyle: {
            fontSize: '2rem',
        },

        favCounterStyle: {

        },

        favButtonStyle: {
            backgroundColor: 'transparent',
            border: 'transparent',
            float: 'right',
            position: 'absolute'
        }
    }

    return (
        <button
            type="button"
            className="btn btn-primary position-relative"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
            style={styles.favButtonStyle}>
            <i className="fa-regular fa-heart" style={styles.favButtonIconStyle}></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {store.favorites.length}
                <span className="visually-hidden">Favoritess</span>
            </span>
        </button>
    )
}

export default FavoriteButton;