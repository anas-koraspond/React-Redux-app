const initialState = {
}
const chooseoption = (state = initialState , action) =>{
    switch(action.type){
        case 'add':
            if(action.category ==="Dodatkowe wyposażenie"){
                const key = action.category
                if(!(key in state))state[key] = {}
                state[key][action.option.id] = action.option
                return state
            }
            else state[action.category] = action.option
            return state
        case "delete":
            if(action.category ==="Dodatkowe wyposażenie"){
                delete state[action.category][action.option]
                if(Object.keys(state[action.category]).length === 0) delete state[action.category]
            }else delete state[action.category];
           return state
        default:
                return state;
    }


}
export default chooseoption