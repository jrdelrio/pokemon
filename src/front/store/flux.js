const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      searchBar: "",
      favorites: [],
    },

    actions: {
      addFavorite: (pokemon) => {
        const store = getStore();
        if (!store.favorites.includes(pokemon)) {
          setStore({ favorites: [...store.favorites, pokemon] });
          console.log(`Added ${pokemon} to favorites!`);
        }
      },

        removeFavorite: (name) => {
          const store = getStore();
          setStore({ favorites: store.favorites.filter((fav) => fav !== name) });
          console.log(`Removed ${name} from favorites!`);
        }
      // setSearchBar: (searchBar) => {
      //   setStore({ searchBar: searchBar });
      // }

      // addFavorite: (name) => {
      //     const store = getStore();
      //     if (!store.favorites.includes(name)) {
      //       setStore({ favorites: [...store.favorites, name] });
      //       console.log(`Added ${name} to favorites!`);
      //     }
      //   },

    },
  };
};

export default getState;
