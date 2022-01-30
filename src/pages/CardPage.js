import React, { useContext, useEffect, useReducer } from 'react';
import CardContext from '../store/contexts/CardContext';
import CardReducer, { initailCardItems } from '../store/reducers/CardReducer';

function CardPage() {

    // dispatch ile card reducer içerisinde bir action tetikleriz ve buna göre state yani cardItems değişimi sağlamış oluruz.

    const [cardItems,dispatch]  =  useReducer(CardReducer,initailCardItems);
    const {setCardItems} = useContext(CardContext);

    useEffect(() => {

        // sayfa yüklenirken fetch ile veri çekeriz.

        console.log('ilk sayfa açıldığında çalıştı ve sadece 1 kereye mahsus çalıştı');

    }, []);

    useEffect(() => {
        console.log('cardItems', cardItems);
        // cardItems dinle ve cardItems değişiminde state güncelle
        // bu sayfaya useContext bağlayarak reducer içinde operasyonlar bittikten sonrada global cardItems state güncelledik.
        setCardItems(cardItems);
        console.log('cardItems reducerdan her değişiminde çalıştı')
        // eğer useEffect bir değer bağlarsak bu değişken değerinin her değişiminde useEffect çalışır.
        // reducerdan state değişimi gerçekleşince useEffect çalışması garanti olduğu için tam bu noktada son güncel card state setCartItems ile context üzerinden güncelleriz.


    }, [cardItems])

    const AddItem = () => {

        const id = cardItems.length + 1;

        const payload = {
            id:id,
            name:'Kola',
            price:10,
            quantity:2
        };

        dispatch({type:'ITEM_ADD',payload}); // işi reducer'a dispatch özel fonksiyonu ile devrediyoruz. state item eklenip sil,ineceğine reducer karar verecek.type göre state üzerinden ekstra bir işlem yapıcak. state değiştiricek güncelleyecek ve güncel değişen state cartItems isminde ulaşacağız. cartItems aşağıda map ile yazdırdık.
        // dispatch işleminden sonra direk setState ile state güncellemeye çalışmayalım. dispacth işlemi asenkron çalışan bir işlem o yüzden son güncel card bilgisine anında erişemediğimizden 1 item geriden gidiyoruz.
        // setCardItems(cardItems);
    }

    const removeItem = (id) => {

        alert('id' + id);

        const payload = {
            id:id
        };

        dispatch({type:'ITEM_REMOVE',payload});
    }

  return <div>

        <ul>
            {
                cardItems.map((item,key) => {
                    return <li key={key}>{item.name} <button onClick={() => removeItem(item.id)}>x</button> </li>
                })
            }
          
        </ul>

      <button onClick={AddItem}>Add Item</button>
  </div>;
}

export default CardPage;
