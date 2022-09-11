import React, { useEffect,useState } from 'react'
import {Button, Container,Form, Row } from 'react-bootstrap'
import { Navbar } from '../../Components'
import axios from 'axios'
import './Blog_input.css'

const Blog_input = () => {
    const [account,setAccount]=useState('');
    const [title,setTitle]=useState('');
    const [user,setUser]=useState('');
    const [img,setImg]=useState('');
    const [content,setContent]=useState('');
    async function connect(){
        if(window.ethereum){
            window.ethereum.request({method:'eth_requestAccounts'})
            .then(result =>{
                accountChangedHandler(result[0])
            })
        }
        } 
    const accountChangedHandler=(newAccount)=>{
        setAccount(newAccount)
    }
        useEffect(()=>{connect()},[]);
    console.log(account);
    const sendRequest = async ()=>{
        const res = await axios.post("http://localhost:5000/api/blog/add",{
            title:title,
            story:content,
            image:img,
            user:user,
            user_metamask:account
        }).catch((err)=>console.log(err));
        const data=res.data;
        return data;
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        sendRequest().then((data)=>{console.log(data)});
    }
    const handleTitle=(e)=>{
        setTitle(e.target.value);
    }
    const handleImg=(e)=>{
        setImg(e.target.value);
    }
    const handleUser=(e)=>{
        setUser(e.target.value);
    }
    const handleContent=(e)=>{
        setContent(e.target.value);
    }
  return (
    <div>
        <Navbar/>
        <Container>
            <Form>
                <Row className="form">
                    <input type="text" className='Title' onChange={(e)=>{handleTitle(e)}}  placeholder='Title goes here'></input>
                    <input type="text" className="User" onChange={(e)=>{handleUser(e)}}  placeholder="User"/>
                    <input type="text" className='img'  onChange={(e)=>{handleImg(e)}}  placeholder='Image Link'></input>
                    <input type="text" className='content' onChange={(e)=>{handleContent(e)}}  placeholder='Content goes here'></input>
                    <Button onClick={(e)=>{handleSubmit(e)}}>Submit</Button>
                </Row>
            </Form>
        </Container>
    </div>
  )
}

export default Blog_input