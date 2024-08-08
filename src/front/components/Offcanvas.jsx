import React, { useContext } from "react";
import { AppContext } from '../store/appContext';
import { FavoriteCard } from "./FavoriteCard";

export const Offcanvas = () => {

    const { store, actions } = useContext(AppContext);

    const styles = {
        
    }

    return (
        <div className="offcanvas offcanvas-start w-75"
            data-bs-scroll="true"
            data-bs-backdrop="false"
            tabIndex="-1" id="offcanvasScrolling"
            aria-labelledby="offcanvasScrollingLabel"
            styles={styles.offcanvasStyle}
        >
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Favorites Pokémons</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                {store.favorites.map((pokemon, index) => <FavoriteCard key={pokemon.index} name={pokemon}/>)}
            </div>
        </div>
    )
};