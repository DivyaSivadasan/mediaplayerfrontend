import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
function Landingpage() {
  return (
    <>
    <Container className="mt-5">
      <Row className='d-flex justify-content-center align-items-center mt-5'>
        <Col sm={12} md={6}>
        <h3>Welcome to <span className='text-warning'> Media Player</span></h3>
        <p style={{textAlign:'justify'}} className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem velit, beatae dolor voluptatum repellat voluptate ipsam quia esse error magnam suscipit modi deserunt eaque. Harum, ea? Animi aliquam in sequi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur autem expedita eveniet hic nam et, iure necessitatibus, maiores ducimus laborum, molestias ea incidunt assumenda eos commodi. Consequatur nisi modi eveniet.</p>
<Link to='/home'>
          <button className='btn btn-warning mt-5'>Get Started</button>
  
</Link>        
</Col>

        <Col sm={12} md={6} className='d-flex justify-content-center '>
        <img src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" className='w-50'/>
        </Col>
      </Row>
    </Container>
 
   
    <div className="container-fluid mt-5">
      <div className="row mt-5">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <h4 className='text-center'>Features</h4>
       
        <div className='row mt-5'>
          <div className='col-md-4 '>
          <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://steamuserimages-a.akamaihd.net/ugc/789753588663340202/3A577E4B5AED98E18C8193DB6AE2A9BDB8F0794B/?imw=512&imh=384&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"className='w-100' height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>

          <div className='col-md-4 mt-4 mt-md-0'>
          <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/6f/5f/f3/6f5ff36fd8ffefa40bf466df6c693ef1.gif"className='w-100' height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>

          <div className='col-md-4 mt-4 mt-md-0 '>
          <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/43/b7/e9/43b7e94dac162ec1543b0a861d012564.gif" className='w-100' height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>

        </div>
        </div>
      <div className='col-md-2'></div>
    </div>
     </div>
     

     <Container className='border mt-5'>
        <Row>
          <Col md={6}>
          <h1 className='text-warning p-3'>Simple fast and powerful</h1>
          <p style={{textAlign:'justify'}}><span style={{fontSize:'40px' }}>Play Everything</span> : dolor sit amet consectetur adipisicing elit. Esse, eum quis rerum laboriosam laborum nihil, asperiores velit quod dignissimos nulla numquam provident error repellat corporis cum eveniet! Culpa, labore beatae.</p>
          <p style={{textAlign:'justify'}}><span style={{fontSize:'40px'}}>Play Everything</span> : dolor sit amet consectetur adipisicing elit. Esse, eum quis rerum laboriosam laborum nihil, asperiores velit quod dignissimos nulla numquam provident error repellat corporis cum eveniet! Culpa, labore beatae.</p>
          <p style={{textAlign:'justify'}} ><span style={{fontSize:'40px'}}>Play Everything</span> : dolor sit amet consectetur adipisicing elit. Esse, eum quis rerum laboriosam laborum nihil, asperiores velit quod dignissimos nulla numquam provident error repellat corporis cum eveniet! Culpa, labore beatae.</p>
          </Col>
          <Col md={6}>
          <iframe width="560" height="515" className='p-4' src="https://www.youtube.com/embed/roz9sXFkTuE?si=yjvgH1WEV08Bs1VP"     title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Landingpage