import React from "react";

const CapturedContext = React.createContext({
    capturedPokemons: [] as string[],
    updateCapturedPokemons: (_id: string) => {}
})

export const CapturedProvider = CapturedContext.Provider;

export default CapturedContext;