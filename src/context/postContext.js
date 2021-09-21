import { createContext  , useReducer , useContext , useEffect} from "react"

import { reducer , initialState } from "./postReducer"
 const PostContext = createContext()
export const usePostContext = ()=>useContext(PostContext)
export default function PostContextProvider (props){
    const [state,dispatch] = useReducer(reducer,initialState,(initial)=>{
        const localData = localStorage.getItem("posts") 
        return localData ? JSON.parse(localData) : initial
    })

    //Actions
    // const  addPost = (newPost) =>{
    //     dispatch({type:"ADD_POST",payload:newPost})
    // }
    useEffect(() => {
        localStorage.setItem("posts",JSON.stringify(state))
    }, [state])
  

    return (
        <PostContext.Provider value={[state,dispatch]}>
            {props.children}
        </PostContext.Provider>
    )
}