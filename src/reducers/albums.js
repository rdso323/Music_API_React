const albumsReducer =  (state = null,action) => {
    switch(action.type){
        case "STOREALBUMS":
            return action.payload;
        default:
            return state;
    }
}

export default albumsReducer