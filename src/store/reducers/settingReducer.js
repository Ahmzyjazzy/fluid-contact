const initState = {
    theme: 'light'
  }
  
const settingReducer = (state = initState, action) => {
    switch(action.type){
        case 'SWITCH_THEME':
            console.log('contact updated in reducer');
            return {
                ...state,
                theme: action.theme
            }

        default:
            return state
    }
};
  
export default settingReducer;