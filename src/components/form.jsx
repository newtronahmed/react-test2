
import { useState } from "react"
import { Link } from "react-router-dom"
export default function Form({error,onSubmit,post = null}) {
    const [title,setTitle]= useState(()=>{
        return post ? post.title :''
    })
    const [message,setMessage]= useState(()=>{
        return post ? post.title :''
    })
    // const [message,setMessage] = useState('')
    const handleSubmit = (e)=>{
        onSubmit(title,message)
        setTitle('')
        setMessage('')
    }
    return (
        <div className="relative ">
                <div className="absolute border-2 rounded lg:-top-32 -top-16 w-full  md:w-1/2 left-1/2 transform -translate-x-1/2 p-4 bg-gray-500" >
                    <div className="flex  flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="title">
                            Post Title
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="title" type="text" value={title} onChange={(e)=>setTitle(e.target.value)}  />
                        <p className="text-white text-xs italic">Make it as long and as crazy as you'd like</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="message">
                            Post Message
                        </label>
                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" type="text" value={message} onChange={(e)=>setMessage(e.target.value)} />
                        <p className="text-white text-xs italic">Make it as long and as crazy as you'd like</p>
                        </div>
                    </div>
                    <div>
                        <button className="py-2 px-4 bg-blue-400 rounded font-bold text-white" onClick={handleSubmit}>submit</button>
                        {error && <div className="text-red-500 p-3">All fields are required</div> }
                    </div>
                    {
                        post && (
                            <Link to="/">
                            <button className="p-2  mt-4 flex text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Home
                            </button>
                            </Link>
                        )
                    }
                    
                </div>
            </div>
    )
}
