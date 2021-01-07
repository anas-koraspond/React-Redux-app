const data = {
  engine: [
    {
      id: 1,
      name: "V4",
      price: 500,
      desc: "Lorem ipssum lorree",
      url:
        "https://images.unsplash.com/photo-1551609189-eba71b3a8566?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
      id: 2,
      name: "V5",
      price: 1500,
      desc: "Lorem ipssum lorree",
      url:
        "https://images.unsplash.com/photo-1505592465426-82d78ccb3c14?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80",
    },
    {
      id: 3,
      name: "V6",
      price: 2300,
      desc: "Lorem ipssum lorree",
      url:
        "https://images.unsplash.com/photo-1560024254-9431c7b7724e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
      id: 4,
      name: "V8",
      price: 2600,
      desc: "Lorem ipssum lorree",
      url:
        "https://images.unsplash.com/photo-1551609189-eba71b3a8566?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
  ],
  carPaint: [
    { id: 1, name: "Żółty ", price: 600, desc: "Lorem ipssum lorree", url: "https://images.unsplash.com/photo-1582219203653-115c5a92ccf8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" },
    { id: 2, name: "Biały ", price: 400, desc: "Lorem ipssum lorree", url: "https://images.unsplash.com/photo-1566264225354-a87aa6083e50?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=828&q=80" },
    { id: 3, name: "Niebieski ", price: 600, desc: "Lorem ipssum lorree", url: "https://images.unsplash.com/photo-1601291892109-ea0ab5e549b9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" },
    { id: 4, name: "Czerwony ", price: 600, desc: "Lorem ipssum lorree", url: "https://images.unsplash.com/photo-1533324416070-5678d4e9dc56?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" },
    { id: 5, name: "Czarny-matowy", price: 700, desc: "Lorem ipssum lorree", url: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80" },
  ],
  rimPaint: [
    { id: 1, name: "Czarny", price: 400, desc: "Lorem ipssum lorree", url: "https://images.unsplash.com/photo-1526550517342-e086b387edda?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80" },
    { id: 2, name: "Niebielski-metaliczny", price: 450, desc: "Lorem ipssum lorree", url: "https://images.unsplash.com/photo-1547176253-d91526c65f94?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" },
    { id: 3, name: "Srebrny", price: 100, desc: "Lorem ipssum lorree", url: "https://images.unsplash.com/photo-1573939843624-b22996c1a31c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=737&q=80" },
  ],
  rimSize: [
    { id: 1, name: "Standard+", price: 100, desc: "Lorem ipssum lorree", url: "https://images.unsplash.com/photo-1606298393414-6e63f0abeec2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=665&q=80" },
    { id: 2, name: "Standard++", price: 300, desc: "Lorem ipssum lorree", url: "https://images.unsplash.com/photo-1592357186033-70d14a403fb0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" },
    { id: 3, name: "Ultra", price: 500, desc: "Lorem ipssum lorree", url: "https://images.unsplash.com/photo-1559219582-54efb8aba261?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=751&q=80" },
  ],
  seatType: [
    { id: 1, name: "Kubełkowy sport +", price: 700, desc: "Lorem ipssum lorree", url: "https://images.unsplash.com/photo-1599880057382-894ca94dec2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" },
    { id: 2, name: "Niezbyt wygodne", price: 100, desc: "Lorem ipssum lorree", url: "https://images.unsplash.com/photo-1602794351477-4b0a974fd386?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" },
    { id: 3, name: "Kubełkowy sport", price: 500, desc: "Lorem ipssum lorree", url: "https://images.unsplash.com/photo-1551325419-c0c5ee31a453?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" },
    { id: 4, name: "Kubełkowy elegancki", price: 500, desc: "Lorem ipssum lorree", url: "https://images.unsplash.com/photo-1583269489193-1df163e14684?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80" },
  ],
  upholsteryColor: [
    { id: 1, name: "W kratke", price: 100, desc: "Lorem ipssum lorree", url: "https://images.unsplash.com/photo-1566569533404-51030438440e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" },
    { id: 2, name: "Czerwona", price: 1000, desc: "Lorem ipssum lorree", url: "https://images.unsplash.com/photo-1519120433933-22bc753101f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" },
    { id: 3, name: "Czarna", price: 300, desc: "Lorem ipssum lorree", url: "https://images.unsplash.com/photo-1569124429429-bc102ead783e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" },
  ],
  additionalConfig: [
    { id: 1, name: "Dynamiczne reflektory LED", price: 300, desc: "Lorem ipssum lorree", url: "https://images.unsplash.com/photo-1585649543966-8b3f478c50e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" },
    { id: 2, name: "Kubek z kawą premium", price: 100, desc: "Lorem ipssum lorree", url: "https://images.unsplash.com/photo-1523942839745-7848c839b661?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" },
    { id: 3, name: "System dźwiękowy premium,", price: 500, desc: "Lorem ipssum lorree", url: "https://images.unsplash.com/photo-1599143156884-0a7034420ebb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" },
    { id: 4, name: "Zawieszenie sportowe", price: 1000, desc: "Lorem ipssum lorree", url: "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" },
  ],
};

const dataDestribution = (state =  '', action) => {
  switch (action.type) {
    case 'nextData':
      if(action.payloads === Object.keys(data).length) return state = data[Object.keys(data)[Object.keys(data).length-1]];
      else return state = data[Object.keys(data)[action.payloads]];
    default:
      return state;
};
}
export default dataDestribution;
