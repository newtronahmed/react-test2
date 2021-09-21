import { useState } from "react"
import { usePostContext } from "../context/postContext"
import {v4 as uuidv4} from 'uuid'
import { toast } from "react-toastify"
import banner from '../images/Tryzens-Blog-Page-Banner.jpg'
import List from "../components/list"
import Form from "../components/form"

export default function Home(){
    
    const [error,setError] = useState(false)
    const [posts,dispatch] = usePostContext()
    //ADD POST ONSUBMIT
    const onSubmit = (title,message)=>{
        if(title.length === 0 || message.length === 0){
            setError(!error)
            return ;
        }

        dispatch({type:"ADD_POST",payload:{title,message,id:uuidv4()}})
        toast.success("Post added successfully")
        // setTitle('')
        // setMessage('')
    }
    // DELETE POST
    const onDelete = (id) =>{
        dispatch({type:"DELETE_POST", payload:id})
        toast.success("Post deleted successfully ")
    }


    
    return (
        <>
            <div className="relative">
                <img src={banner} alt="banner" className="w-full  "  />
                <div className="text-4xl absolute font-bold text-white top-0 lg:top-1/2 left-1/2 transform -translate-x-1/2 italic">Add post</div>
            </div>
            <Form onSubmit={onSubmit} error={error}  />
            
           
            
        <div className="lg:w-2/3 bg-white mt-300 mx-auto rounded-lg shadow-md">
            <ul className="divide-y-2 divide-gray-200">
                
                {
                    posts.length > 0 ? (

                        posts.map( (each,index)=>{
                            return (
                                <List each={each} index={index} onDelete={onDelete}  key={each.id} />
                            )
                        })
                    ): (
                        <div className="tracking-widest px-4 py-2 font-bold">
                            E M P T Y
                        </div>
                    )
                }
            </ul>
        </div>
        </>
    )
}