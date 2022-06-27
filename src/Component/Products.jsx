import React from 'react'
import { 
  CardGroup,
   Container,
    Card, 
    CardImg,
    CardImgOverlay,
    CardText
  } from 'reactstrap'

const Products = () => {
  return (
    <Container>
      <h3 className='text-center mt-5'> Create & Inspire ✨</h3>
      <CardGroup>
        <Card inverse>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/270"
            width="100%"
          />
            <CardImgOverlay>
        
              <CardText className='text-muted'>
                This is a wider card
              </CardText>
            </CardImgOverlay>
        </Card>
        <Card inverse>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/270"
            width="100%"
          />
            <CardImgOverlay>
        
              <CardText className='text-muted'>
                This is a wider card
              </CardText>
            </CardImgOverlay>
        </Card>
        <Card inverse>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/270"
            width="100%"
          />
            <CardImgOverlay>
        
              <CardText className='text-muted'>
                This is a wider card
              </CardText>
            </CardImgOverlay>
        </Card>
       
      </CardGroup>
      
    </Container>
  )
}

export default Products