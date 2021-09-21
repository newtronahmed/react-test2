import {Link, useParams} from 'react-router-dom'
import { usePostContext } from '../context/postContext'
import { useState } from 'react'
import banner from '../images/Tryzens-Blog-Page-Banner.jpg'

export default function Detail (){
const params = useParams()
  const [posts] = usePostContext()
  const [post] = useState(()=>posts.find(each=>each.id === params.id))


    return (
        <>
            <div className="relative">
                <img src={banner} alt="banner" className="w-full  "  />
                <div className="text-4xl font-bold absolute text-white  top-1/2 left-1/2 transform -translate-x-1/2 italic">{post?.title} </div>
            </div>
            <div className="relative ">
                <div className="absolute border-2 rounded lg:-top-32 -top-16 w-full  md:w-1/2 left-1/2 transform -translate-x-1/2 p-4 bg-gray-500" >
                    <div className="text-white capitalize">
                        {post?.message}
                    </div>
                <Link to="/">
                <button className="p-2  mt-4 flex text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Home
                </button>
                </Link> 
                </div>
            </div>
            
        </>
    )
}