//implement async tasks incase there is remote server for real life scenario

export const addContact = (post_data) => {
    return (dispatch, getState) => {        
        dispatch({ type: 'ADD_CONTACT', post_data });
    }
}

export const updateContact = (post_data) => {
    return (dispatch, getState) => {        
        dispatch({ type: 'UPDATE_CONTACT', post_data });
    }
}

export const deleteContact = (id) => {
    return (dispatch, getState) => {        
        dispatch({ type: 'DELETE_CONTACT', id });
    }
}
  
export const starContact = (id) => {
    return (dispatch, getState) => {        
        dispatch({ type: 'STAR_CONTACT', id });
    }
}

export const unstarContact = (id) => {
    return (dispatch, getState) => {        
        dispatch({ type: 'UNSTAR_CONTACT', id });
    }
}
  
 