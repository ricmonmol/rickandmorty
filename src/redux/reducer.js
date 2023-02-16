const { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } = require('./types.js')

const initialState = {
  myFavorites: [],
  allCharacters: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type){
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload]
      }

    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((c) => c.id !== action.payload)
      }

    case FILTER:
      return{
        ...state,
        myFavorites: [...state.allCharacters.filter((c) => c.gender === action.payload)]
      }
    
    case ORDER:
      return{
        ...state,
        myFavorites: [...state.allCharacters].sort((a, b) => {
          if(a.id > b.id){
            if(action.payload === 'Ascendente'){
                return 1
            } else {
                return -1
            }    
          }
          else if(a.id < b.id){
            if(action.payload === 'Descendiente'){
              return -1
            } else {
                return 1
            }
          }
          else {
            return 0
          }
        })
      }

    default:
      return state
  }
} 

export default rootReducer
