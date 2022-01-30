import React, { useContext } from 'react';
import ThemeDropdown from '../components/ThemeDropdown';
import ThemeContext from '../store/contexts/ThemeContext';

function UserProfilePage() {

    let {theme} = useContext(ThemeContext);
    console.log('theme', theme);

    return <div style={{backgroundColor:theme.color}}>

        <p>Username: Burhan </p>
        <p>Email: burhan@test.com </p>

        <p>Tema Seçimi:
            <ThemeDropdown />
        </p>

    </div>;
}

export default UserProfilePage;
