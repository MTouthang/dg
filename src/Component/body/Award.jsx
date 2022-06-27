import React from 'react'
import {Splide, SplideSlide} from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
import { 
  Card,
  CardTitle, 
  Container,
  CardBody, 
  CardText, 
  CardImg,
  Row,
  Col, } from 'reactstrap'


const award = [
  {
    title: "Award title",
    photo: "https://picsum.photos/318/180",
    description:" Lorem ipsum dolor sit amet."
  },
  {
    title: "Award Heading",
    photo: "https://picsum.photos/318/180",
    description:" Lorem ipsum dolor sit amet."
  }
]

const Award = () => {
  return (
    <Container>
      <h1 className='text-center'> Awards </h1>
      <Splide
      options={{
        gap: "2rem"
      }}>
        {award.map((data) => {
          return (
            <SplideSlide>
            <Card className='text-center'>
            <Row>
              <Col sm="3">
              <CardImg src={data.photo}
                alt={data.title}
            />
              </Col>
              <Col xs='6'>
              <CardBody>
              <CardTitle>
                {data.title}
              </CardTitle>
              <CardText>
               {data.description}
              </CardText>
            
            </CardBody>
              </Col>
            </Row>
  
            </Card>
          </SplideSlide>
          )
        })}
        
      </Splide>
      
    </Container>
   
  )
}

export default Award

 