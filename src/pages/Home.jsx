import axios from "axios";
import React, { useEffect, useState } from "react";
import RestCard from "../components/RestCard";
import { Col, Container, Row } from "react-bootstrap";

function Home(props) {
  const [restaurants, setRestaurants] = useState([]);
  const fetchData = async () => {
    const result = await axios.get("/restaurants.json");
    setRestaurants(result.data.restaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(restaurants);
  return (
    <div>
        <Row>
            <h1 className="mt-5 text-center mb-5">Restaurants Are Your Choice,Make it Best....</h1>
            <Col lg={6}>
                 <Container>
                  <img className="img-fluid" src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
  
                 </Container>
              </Col>  
               <Col lg={6}>
                <div  style={{textAlign:'justify'}}>
                <p className="text-start px-5 mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Facere, at autem aliquid placeat nihil suscipit dolores natus voluptate 
                    corporis rem provident. Soluta dignissimos eveniet quia eius aperiam praesentium,
                     est ex. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis perferendis 
                     excepturi, dicta iure repudiandae, officia repellendus recusandae rerum saepe nisi eum 
                     corporis consectetur ratione. Impedit fugiat obcaecati saepe labore inventore.
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Facere, at autem aliquid placeat nihil suscipit dolores natus voluptate 
                    corporis rem provident. Soluta dignissimos eveniet quia eius aperiam praesentium,
                     est ex. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis perferendis 
                     excepturi, dicta iure repudiandae, officia repellendus recusandae rerum saepe nisi eum 
                     corporis consectetur ratione.
                </p>
                </div>
                
                  <div className="text-center">
                  <button className="btn btn-warning">Explore</button>
                  </div>
    
              </Col>    
                
       </Row>
       <Row>
       <h1 className="mt-5 text-center mb-5">BEST OPTIONS</h1>
        {restaurants.map((i) => (
          <Col className="ps-3 mt-3 p-2" lg={3} md={4} sm={6}>
            <RestCard item={i}></RestCard>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;
