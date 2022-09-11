import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Podcast.css';
import { Container,InputGroup,FormControl,Button,Row,Card, Col } from 'react-bootstrap';
import { useState,useEffect } from 'react';

const CLIENT_ID="f2be781d887e4c8abe594ce4f19695be"
const CLIENT_SECRET="5eb0f4b7603543ffba917c9c11bf43ac";

function Podcast() {
  const [searchInput,setSearchInput]=useState("");
  const [data,setData]=useState([]);
  async function getPodcast(token){
    var artistParameters={
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    }
    try{
    var Shows= await fetch('https://api.spotify.com/v1/shows/0sSVHyAHJPHlt0oDfZSpSO/episodes?market=US',artistParameters)
    .then(response=>response.json())
    .then(data=>{ console.log(data,token);return data.items})
    setData(Shows);
    }
    catch(err){
      console.log(err);
    }
  }
  
  useEffect(()=>{
    //API Access
    var authParametes = {
      method: 'POST',
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret='+ CLIENT_SECRET
    }
    fetch("https://accounts.spotify.com/api/token", authParametes)
    .then(result=>result.json())
    .then(data=>{getPodcast(data.access_token); });
  }, [])
  console.log(data);
  return (
    <div className="App">
      <Container>
      <div className="d-flex justify-content-center">
      <Link to="/Content/Podcast"><button className="btn btn-outline-success me-2" type="button">Podcast</button></Link>
      <Link to="/Content/Blog"><button className="btn btn-outline-success me-2" type="button">Blogs</button></Link>
      </div>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-4">
        {data.map((podcast)=>{
          return(
            <Col>
            <a className="podcast_link" href={podcast.external_urls.spotify}>
            <Card>
            <Card.Img src={podcast.images[0].url}/>
            <Card.Body>
              <Card.Title>{podcast.name}</Card.Title>
              <p>{podcast.description.slice(0,40) +'...'}</p>
            </Card.Body>
          </Card>
          </a>
          </Col>
          )
        })}
        </Row>
      </Container>
    </div>
  );
}

export default Podcast;
