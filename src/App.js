import { useContext } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import CardPage from "./pages/CardPage";
import UserProfilePage from "./pages/UserProfilePage";
import { CardProvider } from "./store/contexts/CardContext";
import { ThemeProvider } from "./store/contexts/ThemeContext";

//ThemeProvider App.js dosyasında en dışa sararsak içinde kaç adet child component varsa otomatik olarak state değişikliğini algılamış olur.

function App() {
  // sadece değişen tema'nın değerini okuyacağımız için theme denilen state güncel değerine ihtiyacımız var. setTheme şuan ihtiyacımız yok.

  // eğer browser sekmesinden gidip elimiz ile link değiştirirsek context üzerindeki state kaybederiz. fakat react router ile sayfalar arası geçişlerde Link componenti ile geçiş yaparsak state kaybetmeyiz. State tarayıcı kapnadığı zamanda kabolur. state kalıcı olması için localStore veya sessionStorage gibi mekanizmalar kullanılır. yani facebook giriş yapan kullanıcının oturumu çıkış yap diyene kadar düşmesin diye ekstra bir ayar daha yapılması gerekir. state tek başına yeterli değildir.
  // arka plan regi seçilen temeaya göre değişsin diyoruz.
  return (
    <CardProvider>
      <ThemeProvider>
        <div className="App" style={{ color: "yellow" }}>
          <UserProfilePage />
          <Link to="about">Hakkımızda</Link>
          <Link to="cart-items">Sepet İşlemleri</Link>
        </div>

        {/* themeProvider içerisindeki componentler global theme değerine ulaşabilir. */}
      </ThemeProvider>
      <Routes>
        <Route path="/cart-items" element={<CardPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </CardProvider>
  );
}

export default App;
