import React from 'react'
import { Card, CardGroup, CardImg, Container,CardBody, CardTitle,CardSubtitle,CardText,Button  } from 'reactstrap'


const Course = ({courses}) => {
  return (
    <Container className='mb-5'>
        <h1 className=' mt-5'> Feature Courses </h1>
        <CardGroup  >
          {courses.map((course) => (
             <Card key={course.id} className='m-2 border shadow'
             style={{borderRadius: 10}}
               >
                   <CardImg
                       alt={course.title}
                       src={course.pic}
                       top
                       width="100%"
                       height="60%"
                       className='rounded-top rounded-1'
                   />
                   <CardBody>
         <CardTitle tag="h5">
          {course.title}
         </CardTitle>
         <CardSubtitle
           className="mb-2 text-muted"
           tag="h6"
         >
           Enrollment Fee: {`Rs ${course.enrollmentFee}`}
         </CardSubtitle>
         <CardSubtitle
           className="mb-2 text-muted"
           tag="h6"
         >
           Monthly Fee: {`Rs ${course.monthlyFee}`}
         </CardSubtitle>
         <CardText>
           {course.description}
         </CardText>
         <Button >
           <a className="text-decoration-none text-white" href={course.link} alt="form"> Enroll Now</a>
         </Button>
       </CardBody>
             </Card>
          ))}
         
        </CardGroup>
       
    </Container>
  )
}

export default Course