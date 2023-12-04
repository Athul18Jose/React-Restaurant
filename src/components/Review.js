import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './Review.css'

function Review({ rdata }) {
  console.log(rdata);
  return (
    <>
      <Accordion  className='btn1'>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Reviews</Accordion.Header>
          <Accordion.Body>
            {
              rdata.map((rev) => (
                <div className='border p-3 mt-2'>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Rating:{rev.rating}</span>
                    <span>Date:{rev.date}</span>
                  </div>
                  <p className='text-start mt-2' style={{ textAlign: 'justify' }}>{rev.comments}</p>
                  <span className='text-end'>-{rev.name}</span>

                </div>
              ))
            }
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </>
  )
}

export default Review