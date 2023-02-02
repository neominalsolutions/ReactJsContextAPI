import React, { useContext, useEffect } from "react";
import CardContext from "../store/contexts/CardContext";
import ThemeContext from "../store/contexts/ThemeContext";

// bu componente ise seçilen temanın ismini ekranda gösteririz.

function SelectedTheme() {
  const { theme } = useContext(ThemeContext);

  // const [cardItems] = useReducer(CardReducer,[]);
  const { cardItems } = useContext(CardContext);

  useEffect(() => {
    console.log("SelectedTheme-cardItems", cardItems);
  }, [cardItems]);

  return (
    <div>
      Seçili Tema ismi: {theme.name}
      <ul>
        {cardItems.map((item, key) => {
          return <li key={key}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default SelectedTheme;
