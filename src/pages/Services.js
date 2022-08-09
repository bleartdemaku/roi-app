import React from 'react'
import { Container } from 'react-bootstrap'
import ServicesCarosuel from '../components/ServicesCarousel'
import content from '../content'

function Services() {
  return (
    <div>
      <Container>
        {content.map((item, index) => (
          <ServicesCarosuel key={index} item={item} />
        ))}
      </Container>
    </div>
  )
}

export default Services
