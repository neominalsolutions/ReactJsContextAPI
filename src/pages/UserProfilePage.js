import React, { useContext, useEffect, useReducer } from 'react';
import SelectedTheme from '../components/SelectedTheme';
import ThemeDropdown from '../components/ThemeDropdown';
import ThemeContext from '../store/contexts/ThemeContext';
import cardReducer, { initailCardItems } from '../store/reducers/CardReducer';

function UserProfilePage() {

    // ThemeDropdown da değişen state değerine UserProfilePage component içerisinden useContext kullanrak ulaştık.
    let {theme} = useContext(ThemeContext);
  


    return <div style={{backgroundColor:theme.color}}>

        <p>Username: Burhan </p>
        <p>Email: burhan@test.com </p>

        <p>Tema Seçimi:
            <ThemeDropdown />
        </p>

        <p>
            Tema ismi:
            <SelectedTheme />
        </p>

    </div>;
}

export default UserProfilePage;
