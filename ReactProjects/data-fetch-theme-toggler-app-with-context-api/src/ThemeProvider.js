import React, { useState } from "react";

export const ThemeContext = React.createContext(false);


export const Context = () => React.useContext(ThemeContext);

function ThemeProvider({children}) {
    
    const [toggle ,setToggle] = useState(false)
    function toggleFunction(){
        setToggle(!toggle)
    }
  return (
    <ThemeContext.Provider value={{toggle,toggleFunction}}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
