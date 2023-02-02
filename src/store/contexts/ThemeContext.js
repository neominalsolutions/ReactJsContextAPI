// tema değişiminden sorumlu context'imiz

import { createContext, useState } from "react";

const ThemeContext = createContext(); // global store değerimize benzeyen bir yapı.
// tüm bu global state management context içerisinde gerçekleşiyor.
// yeni bir context tanımlaması yaptık.createContext ile birlikte

{
  /* <Provider>
  <A></A>
  <B></B>
</Provider>; */
}

// provider function içerisinde set initial değeri ve getter, setter değerleri yer alır.
// setTheme yapmak ile ilgili herhangi bir algoritma yok.
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({ color: "white", name: "light" }); // global default değer
  // seçili olan temamızı context state aldık.

  let values = {
    theme,
    setTheme,
  };

  // başka componentlere state taşımak için values olarak bir değişken ayarladık
  // children ile alt komponentleri provider içerisine sardık.

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
