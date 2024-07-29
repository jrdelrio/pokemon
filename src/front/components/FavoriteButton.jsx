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
            'background-color': 'transparent',
            border: 'transparent',
            float: 'right',
            position: 'absolute'
        }
    }

    return (
        <button
            type="button"
            class="btn btn-primary position-relative"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
            style={styles.favButtonStyle}>
            <i className="fa-regular fa-heart" style={styles.favButtonIconStyle}></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {store.favorites.length}
                <span class="visually-hidden">Favoritess</span>
            </span>
        </button>
    )
}

export default FavoriteButton;