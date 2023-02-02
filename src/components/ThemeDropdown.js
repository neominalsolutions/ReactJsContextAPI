// kullanıcı bu component içerisinde 3 farklı theme seçebilir
// dark, blue, light
// seçtiği bu temaya göre ise uygulamanın arka plan rengi değişsin

import React, { useContext } from "react";
import ThemeContext from "../store/contexts/ThemeContext";
// tema seçim componenti
function ThemeDropdown() {
  // bir component içerisinden context'e bağlanmak istersek useContext hook kullanıyoruz.
  const { setTheme } = useContext(ThemeContext);
  // yukarıda context bağlanıp values'dan dönen steTheme methoduna eriştik.
  // yani Theme Dropdown componentinde tema değişi yapılıyor.

  const themes = [
    {
      color: "black",
      name: "dark",
    },
    {
      color: "blue",
      name: "blue",
    },
    {
      color: "green",
      name: "green",
    },
  ];

  const selectTheme = (event) => {
    const selected = event.target.value;

    if (selected != "-1") {
      console.log("selected", selected);
      const selectedTheme = themes.find((x) => x.color == selected);
      setTheme(selectedTheme); // context'deki theme güncelle
    } else {
      setTheme({ color: "white", name: "white" });
    }
  };

  return (
    <div>
      <select onChange={selectTheme}>
        <option value="-1">Tema seçimi yapınız</option>
        {themes.map((item, key) => {
          return (
            <option key={key} value={item.color}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default ThemeDropdown;
