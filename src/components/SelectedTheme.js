import React, { useContext } from 'react';
import ThemeContext from '../store/contexts/ThemeContext';

// bu componente ise seçilen temanın ismini ekranda gösteririz.

function SelectedTheme() {

   const {theme} =  useContext(ThemeContext);

  return <div>
    Seçili Tema ismi: {theme.name}
  </div>;
}

export default SelectedTheme;
