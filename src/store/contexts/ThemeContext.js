// tema değişiminden sorumlu context'imiz

import { createContext, useState } from "react";

const ThemeContext = createContext();
// yeni bir context tanımlaması yaptık.createContext ile birlikte

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState({color:'white', name:'light'});
    // seçili olan temamızı context state aldık.

    let values = {
        theme,
        setTheme
    };
    
    // başka componentlere state taşımak için values olarak bir değişken ayarladık
    // children ile alt komponentleri provider içerisine sardık.

    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>

}

export default ThemeContext;



