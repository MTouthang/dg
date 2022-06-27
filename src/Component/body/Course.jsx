import React from 'react'
import { Card, CardGroup, CardImg, Container,CardBody, CardTitle,CardSubtitle,CardText,Button  } from 'reactstrap'

const Course = () => {
  return (
    <Container className='mb-5'>
        <h1 className=' mt-5'> Feature Courses </h1>
        <CardGroup  >
          <Card className='m-2 border shadow'
          style={{borderRadius: 10}}
            >
                <CardImg
                    alt='Card image cap'
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                    className='rounded-top rounded-1'
                />
                <CardBody>
      <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
          </Card>
          <Card className='m-2 border shadow' >
                <CardImg
                    alt='Card image cap'
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                />
                <CardBody>
      <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
          </Card >
          <Card className='m-2 border shadow'>
                <CardImg
                    alt='Card image cap'
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                />
                <CardBody>
      <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
          </Card>
        </CardGroup>
       
    </Container>
  )
}

export default Course