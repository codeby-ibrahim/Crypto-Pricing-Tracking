const { createContext } = require("react")


export const Coincontext = createContext();

const CoincontextProvider = (props)=>{
    return(
        <Coincontext.Provider>
         

        </Coincontext.Provider> 
    )
}