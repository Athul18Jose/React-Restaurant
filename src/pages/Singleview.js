import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import Timing from "../components/Timing";
import Review from "../components/Review";


function Singleview() {
  const { id } = useParams();
  //   console.log(id);
  const [restaurants, setRestaurants] = useState([]);
  const fetchAllData = async () => {
    const result = await axios.get("/restaurants.json");
    setRestaurants(result.data.restaurants);
  };
  useEffect(() => {
    fetchAllData();
  }, []);
  //   console.log(restaurants);
  const singleData = restaurants.find(i => i.id == id)
  console.log(singleData);
  return (
    <div>
      {singleData &&
        <Container>
          <Row className="my-4">
            <Col lg={6}>
              <img style={{ height: '500px', width: '80%', borderRadius: '10px' }} src={singleData.photograph} alt="" />
            </Col>
            <Col lg={6} className="text-center mt-5 mb-5">
              <h1 ><strong>{singleData.name}</strong></h1>
              <h3><b>Cusine:</b>{singleData.cuisine_type} </h3>

              <h3><strong>Address:</strong>{singleData.address}</h3>
              <h5>Near:{singleData.neighborhood}</h5> <br /><br />
              <div className="text-center p-5 me-5">
                <Timing data={singleData.operating_hours}></Timing>
                <Review rdata={singleData.reviews}></Review>
              </div>                </Col>
          </Row>

        </Container>}
    </div>
  );


}

export default Singleview;
