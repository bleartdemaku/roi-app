import Carousel from "react-bootstrap/Carousel";
// import servicesContent from '../servicesContent'


function ServicesCarosuel({ item: {id, title,  body, image }}) {
  return (
    <>
      <div>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`./images/${image}`}
              alt="...loading"
            />
            <Carousel.Caption className="text-dark">
              <h3>{title}</h3>
              <p>{body}</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default ServicesCarosuel;
