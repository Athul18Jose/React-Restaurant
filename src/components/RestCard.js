import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function RestCard({item}) {
  return (
    <div >
<Link to={`/view/${item.id}`} style={{textDecoration:'none'}}>
      <Card style={{ width: '18rem',height:'450px' }}>
      <Card.Img height={'300px'} variant="top" src={item.photograph} />
      <Card.Body  className='text-center'>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
        <h6>Cuisine Type: {item.cuisine_type}</h6>
          {item.address}
        </Card.Text>
      </Card.Body>
    </Card>
</Link></div>
  )
}

export default RestCard