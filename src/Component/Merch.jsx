import React from 'react'
import { 
  CardGroup,
  Card,
  Container,
  CardImg,
  CardBody,
  CardSubtitle,
  CardTitle,
  Button,
 
} from 'reactstrap'

const Merch = () => {
  return (
    <Container fluid="sm">
      <h3  className='text-center mt-5'> Feature Products ✨</h3>
      <CardGroup >
            <Card className='border-white'
            >
            <CardImg
                alt='Card image cap'
                src="https://picsum.photos/318/180"
                top
                width="100%"
                className='rounded rounded-'  
              />
              <CardBody>
                <CardTitle>
                  Product item1
                </CardTitle>
                <CardSubtitle
                  className=" text-muted"
                  tag="h6"
                >
                  My Gorgeous Friend on the internet 
              </CardSubtitle>
              <Button>Buy</Button><span> Rs 179</span>
              </CardBody>
            </Card>
            
          
            <Card  className='border-white'>
            <CardImg
                alt='Card image cap'
                src="https://picsum.photos/318/180"
                top
                width="100%"
                className='rounded-top rounded-1'
              />
              <CardBody>
                <CardTitle>
                  Product item1
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  My Gorgeous Friend on the internet 
              </CardSubtitle>
              <Button>Buy</Button><span> Rs 179</span>
              </CardBody>
            </Card>
          
            <Card className='border-white'>
          <CardImg
              alt='Card image cap'
              src="https://picsum.photos/318/180"
              top
              width="100%"
              className='rounded-top rounded-1'
            />
            <CardBody>
              <CardTitle>
                Product item1
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                My Gorgeous Friend on the internet 
            </CardSubtitle>
            <Button>Buy</Button><span> Rs 179</span>
            </CardBody>
          </Card>
      </CardGroup>
    </Container>
  )
}

export default Merch