import albumsReducer from './albums';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    data_albums: albumsReducer
})

export default allReducers;
