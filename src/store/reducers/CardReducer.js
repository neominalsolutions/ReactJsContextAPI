// reducer demek bir nesnede bir değişikilk olduğunda bu değişikliği ilgili componentlere aktarılmasını sağlayan yardımcı bir servis.

import { useContext } from "react";
import CardContext from "../contexts/CardContext";

// State => Reducer => Componnent

// Sepet işlemleri için bu reducer js dosyasını kullanacağız.

export const initailCardItems = []; // uygulama ilk açıldığında hiç bir sepette ürün yok.

// eğer sepetimize bir ürün ekleyecek ise bu durum ITEM_ADD ile bu takip edeceğiz.
// eğer seppeten ürün çıkartacak isek bu durumda bunu ITEM_REMOVE ile takip edeceğiz.

// eğer operasyon bazlı ekleme,silme, güncelleme,seçim yapma, arama, filterele vs bir çok state değiştiren durum varsa bu durumda ThemeContext yaptığımız gibi setTheme ile state tek tek değiştirmek işimizi zorlaştıracak ve karmaşık bir kod yazmamıza sebep olacaktır. Bu gibi durumlarda useReducer kullanarak operasyon bazlı yani type bazlı state değişimini reducerlar üzerinden yönetiriz.

// Reducer ile state globalde değil localde güncellenir. Localde değişen bu state context ile aktif hale getirerek global state çekeriz.

const CardReducer = (state, action) => {

    console.log('action',action);
    console.log('state',state);


    switch (action.type) {
      case "ITEM_ADD":
          // push ile yeni item

          state =  [... state,action.payload];
        
       return state; 
      case "ITEM_REMOVE":
          // filter işi

          state = state.filter(x=> x.id != action.payload.id);

          return state;
      default:
        return state;
    }
  };
  

  export default CardReducer;