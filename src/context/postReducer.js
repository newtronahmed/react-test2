// import { useReducer } from "react";
export const initialState = []
export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_POST":
        return [ action.payload, ...state]
        
        case "UPDATE_POST":
        
            let updatePosts = state;
            let postIndex = updatePosts.findIndex(each=>each.id === action.payload.id)
            let post = updatePosts[postIndex]
            post.title = action.payload.title;
            post.message = action.payload.message;
            console.log(updatePosts)
            return [...updatePosts]
            
        case "DELETE_POST":
            const newPosts = state.filter((each,id)=> id !== action.payload)
            return [...newPosts]
            

        default:
            return state; 
    }
  };