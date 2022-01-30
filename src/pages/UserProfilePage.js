import React, { useContext } from 'react';
import SelectedTheme from '../components/SelectedTheme';
import ThemeDropdown from '../components/ThemeDropdown';
import ThemeContext from '../store/contexts/ThemeContext';

function UserProfilePage() {

    // ThemeDropdown da değişen state değerine UserProfilePage component içerisinden useContext kullanrak ulaştık.
    let {theme} = useContext(ThemeContext);
    console.log('theme', theme);

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
