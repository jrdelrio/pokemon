import React, { useEffect, useState } from "react";
import getState from "./flux.js";

export const AppContext = React.createContext(null);

const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updatedStore) =>
          setState({
            store: Object.assign(state.store, updatedStore),
            actions: { ...state.actions }
          })
      })
    );

    useEffect(() => {

    }, []);

    return (
      <AppContext.Provider value={state}>
        <PassedComponent {...props} />
      </AppContext.Provider>
    );
  };
  return StoreWrapper;
};

export default injectContext;
