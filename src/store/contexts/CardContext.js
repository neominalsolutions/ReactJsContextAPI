import { createContext, useState } from "react";

// createContext ile önce context açıp sonra onu Provider olarak dışarı export ediyoruz ki App.js tarafında provider ilgili componentleri sarsın.
const CardContext = createContext();

export const CardProvider = ({ children }) => {
  // setCardItems state değiştirir.
  // cardItems değişen state global olarak erişmemizi sağlar.

  const [cardItems, setCardItems] = useState([]);
  // seçili olan temamızı context state aldık.

  let values = {
    cardItems,
    setCardItems,
  };

  // başka componentlere state taşımak için values olarak bir değişken ayarladık
  // children ile alt komponentleri provider içerisine sardık.

  return <CardContext.Provider value={values}>{children}</CardContext.Provider>;
};

export default CardContext;
