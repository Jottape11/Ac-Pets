import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height={500}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Os melhores preços do mercado</h3>
          <p>Qualidade e Segurança na entrega!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/15817211/pexels-photo-15817211/free-photo-of-animal-bicho-filha-cachorro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height={500}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Conforto e qualidade para seu Pet</h3>
          <p>Você encontra aqui.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.adoropets.com.br/wp-content/uploads/2021/08/racoes-para-cachorro.jpg" height={500}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>As melhores comidas para seu Pet</h3>
          <p>
            Encontre o melhor produto para o seu Pet aqui
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;