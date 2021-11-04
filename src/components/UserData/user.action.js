export const GET_FILMS = 'GET_FILMS';
export const GET_STARSHIP ='GET_STARSHIP';

const handlerFetch = async url => {
    return await fetch(url).then(response => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error('error')
        }
    })
}

export const addFilms = film => {
    return {
        type: GET_FILMS,
        payload: film
    }
}

export const getFilms = url => dispatch => {
        handlerFetch(url)
            .then(film => dispatch(addFilms(film)))
            .catch(err => console.log(err))
}

export const addStarship = ship => {
    return {
        type: GET_STARSHIP,
        payload: ship
    }
}

export const getStarship = url => dispatch => {
        handlerFetch(url)
            .then(starship => dispatch(addStarship(starship)))
            .catch(err => console.log(err))
}