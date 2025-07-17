const { createContext } = require("react")


export const Coincontext = createContext();

const CoincontextProvider = (props) => {
    const 



    const contexvalue = {

    }
    return (
        <Coincontext.Provider value={contexvalue}>
            {props.children}
        </Coincontext.Provider>
    )
}

export default CoincontextProvider;