export const addItem = (item,name) =>{
  return {
    type:'add',
    option: item,
    category: name
  };
}
export const deleteItem = (name,item) =>{
  return {
    type:'delete',
    category: name,
    option: item
  };
}
export const nextData = (index) =>{
  return {
    type:'nextData',
    payloads:index
    
  };
}
export const prevData = (index) =>{
  return {
    type:'prevData',
    payloads:index
  };
}
