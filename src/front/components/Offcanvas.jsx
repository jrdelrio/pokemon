import React, { useContext } from "react";
import { AppContext } from '../store/appContext';
import { FavoriteCard } from "./FavoriteCard";

export const Offcanvas = () => {

    const { store, actions } = useContext(AppContext);

    const styles = {
    }

    return (
        <div class="offcanvas offcanvas-start w-75"
            data-bs-scroll="true"
            data-bs-backdrop="false"
            tabindex="-1" id="offcanvasScrolling"
            aria-labelledby="offcanvasScrollingLabel"
            styles={styles.offcanvasStyle}
        >
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Favorites Pokémons</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                {store.favorites.map((pokemon, index) => <FavoriteCard key={pokemon.index} name={pokemon}/>)}
            </div>
        </div>
    )
};