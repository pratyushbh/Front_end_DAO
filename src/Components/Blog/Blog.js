import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Blog.css';
import { Container,InputGroup,FormControl,Button,Row,Card, Col } from 'react-bootstrap';
import { useState,useEffect } from 'react';

const Blog = () => {
const [data,setData]=useState([]);
async function getBlog(){
    const res=await axios
    .get('http://localhost:5000/api/blog')
    .then((response)=>{
     setData(response.data.blogs);
       
    })
    .catch(()=>{
      alert('Error retrieving data!!');
    })
  }
  useEffect(()=>{
    getBlog()
  },[])
  console.log(data);
  return (
    <div className="App">
      <Container>
      <div className="d-flex justify-content-center">
      <motion.div  transition={{delay:0.2}} initial={{ opacity: 0, translateY:-20}} whileInView={{ opacity: 1 ,translateY:0}}  viewport={{ once: true }}>
      <button className="btn btn-outline-success me-2" type="button">Podcast</button>
      <button className="btn btn-outline-success me-2" type="button">Blogs</button>
      </motion.div>
      </div>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-4">
        {data.map((blog)=>{
          return(
            <motion.div  transition={{delay:0.2}} initial={{ opacity: 0, translateY:-20}} whileInView={{ opacity: 1 ,translateY:0}}  viewport={{ once: true }}>
            
            <Col>
            <a className="podcast_link">
            <Card>
            <Card.Img src={blog.image}/>
            <Card.Body>
              <Card.Title>{blog.title}</Card.Title>
              <p>{blog.story.slice(0,40)+'...'}</p>
            </Card.Body>
          </Card>
          </a>
          </Col>
          </motion.div>
          )
        })}
        </Row>
      </Container>
    </div>
  )
}

export default Blog