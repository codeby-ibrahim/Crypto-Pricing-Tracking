const { createContext, useState } = require("react")


export const Coincontext = createContext();

const CoincontextProvider = (props) => {
    const [allcoin, setallcoin] = useState([]);
    const [currency, setcurrency] = useState({
        name: "usd",
        Symbol: "$"
    });




    const contexvalue = {

    }
    return (
        <Coincontext.Provider value={contexvalue}>
            {props.children}
        </Coincontext.Provider>
    )
}

export default CoincontextProvider;