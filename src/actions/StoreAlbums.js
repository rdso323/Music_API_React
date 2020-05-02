export const storeAlbums = (albums) => {
    return{
        type: 'STOREALBUMS',
        payload: albums
    }
}

export default storeAlbums