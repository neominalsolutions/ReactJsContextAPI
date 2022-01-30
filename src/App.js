import { useContext } from 'react';
import './App.css';
import UserProfilePage from './pages/UserProfilePage';
import { ThemeProvider } from './store/contexts/ThemeContext';

//ThemeProvider App.js dosyasında en dışa sararsak içinde kaç adet child component varsa otomatik olarak state değişikliğini algılamış olur.

function App() {
  // sadece değişen tema'nın değerini okuyacağımız için theme denilen state güncel değerine ihtiyacımız var. setTheme şuan ihtiyacımız yok.


  // arka plan regi seçilen temeaya göre değişsin diyoruz.
  return (

    <ThemeProvider>
      <div className="App" style={{color:'yellow'}} >
        <UserProfilePage />
      </div>
    </ThemeProvider>

  );
}

export default App;
