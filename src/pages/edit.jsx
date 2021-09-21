import {Link, useParams} from 'react-router-dom'
import { usePostContext } from '../context/postContext'
import { useState } from 'react'
import { toast } from "react-toastify"
import banner from '../images/Tryzens-Blog-Page-Banner.jpg'
import Form from '../components/form'
export default function Edit() {
    const params = useParams()
  const [posts,dispatch] = usePostContext()
  const [error,setError] = useState(false)
  const [post] = useState(()=>posts.find(each=>each.id === params.id))
//   const [title,setTitle]= useState(()=>post.title)
    // const [message,setMessage] = useState(()=>post.message)
    const onSubmit = (title,message)=>{
        if(title.length === 0 || message.length === 0){
            setError(!error)
            return ;
        }

        dispatch({type:"UPDATE_POST",payload:{title,message,id:post.id}})
        toast.success("Post updated successfully")
        // setTitle('')
        // setMessage('')
    }
    return (
        <>
           <div className="relative">
                <img src={banner} alt="banner" className="w-full  "  />
                <div className="text-4xl absolute font-bold text-white top-0 lg:top-1/2 left-1/2 transform -translate-x-1/2 italic">Edit post</div>
            </div>
            
            <Form onSubmit={onSubmit} error={error} post={post} />
        </>
    )
}
