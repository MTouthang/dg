import React from 'react'
import { Container, CardGroup, CardImg, Card } from 'reactstrap'

const Product = () => {
  return (
    <Container className=' mt-5'>
        <h1 className ='text-center'> Create & Inpsire </h1>
        <p className ='text-center'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eius aliquam consequuntur aut, vel sint ducimus cumque harum quibusdam dolor nesciunt temporibus! Cum at nulla tempora distinctio vitae voluptatibus sit.</p>

        <CardGroup> 
            <Card className='m-1'>
                <CardImg 
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                />
            </Card>
            <Card className='m-1'>
                <CardImg 
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                />
            </Card>
            <Card className='m-1'>
                <CardImg 
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                />
            </Card>
        </CardGroup>
        <p className='text-end mt-3'> <u> View more works ...</u></p>
    </Container>
  )
}

export default Product