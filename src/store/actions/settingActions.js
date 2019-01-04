//implement async tasks incase there is remote server for real life scenario

export const switchTheme = (theme) => {
    return (dispatch, getState) => {        
        dispatch({ type: 'SWITCH_THEME', theme });
    }
}

  
 