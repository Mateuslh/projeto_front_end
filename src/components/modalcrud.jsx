import { useState,useEffect } from "react";
import { api } from "../lib/axios";
import "./modal.css"


export function Mcrud(){
    const [post,setPost] = useState([])

    useEffect(()=>{
        api.get('/posts')
        .then((resp)=>{
            setPost(resp.data)
        })
        .catch((err)=>{
            console.log(err)
        }) 
    },[])

    return(
        <div>
            
                <table key={post.id} border="1">
                    <tr>
                        <td>Nome</td>
                        <td>E-mail</td>
                    </tr>
                    {post.map((post) => (
                    <tr>
                        <td>{post.nome}</td>
                        <td>{post.mail}</td>
                    </tr>   
            ))}
                    </table>

            
        </div>
    )
    
}