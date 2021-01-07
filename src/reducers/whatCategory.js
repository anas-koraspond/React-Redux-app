const array = ["Silnik","Lakier nadwozia","Lakier obręczy","Rozmiar obręczy","Typ foteli","Kolor tapicerki","Dodatkowe wyposażenie","Podsumowanie"]
const whatCategory = (state =  '', action) => {
    switch (action.type) {
      case 'nextData':
       return state = array[action.payloads];
      case "prevData":
        return state = array[action.payloads];
        default:
         return state;
  };
  }
  export default whatCategory;
  
