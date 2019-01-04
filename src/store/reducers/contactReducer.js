const initState = {
    contactList = []
  }
  
const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD_CONTACT':
            console.log('contact added in reducer');
            return {
                ...state,
                contactList: [...state.contactList, action.post_data ]
            }

        case 'UPDATE_CONTACT':
            console.log('contact updated in reducer');
            return {
                ...state,
                contactList: state.contactList.map((obj) => (obj.id == action.post_data.id ) ? action.post_data : obj)
            }

        case 'DELETE_CONTACT':
            console.log('contact deleted in reducer');
            return {
                ...state,
                contactList: state.contactList.filter( obj => obj.id !== action.id )
                }
        case 'STAR_CONTACT':
            console.log('contact starred in reducer');
            return {
                ...state,
                contactList: state.contactList.map((obj) => (obj.id == action.id ) ? {...action.post_data, isfavorite: true } : obj)
            }
        case 'UNSTAR_CONTACT':
            console.log('contact unstarred in reducer');
            return {
                ...state,
                contactList: state.contactList.map((obj) => (obj.id == action.id ) ? {...action.post_data, isfavorite: false } : obj)
            }

        default:
            return state
    }
};
  
export default authReducer;