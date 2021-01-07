import chooseOption from './chooseOption'
import dataDestribution from './dataDestribution'
import whatCategory from './whatCategory'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    check: chooseOption,
    data: dataDestribution,
    category: whatCategory

})
export default allReducers;