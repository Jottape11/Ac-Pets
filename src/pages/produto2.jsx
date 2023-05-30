import ColorSchemesExample from './ColorSchemesExample';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from './Footer'

function Produto2(){
    return(
        <div>
            <ColorSchemesExample/><br/>

            <div className="container">
                <Card style={{width: '68rem'}}>
                <Card.Img height={'900px'} variant="top" src="https://cdn.awsli.com.br/2500x2500/11/11874/produto/34398731/14eec42be7.jpg"/>
                <Card.Body>
                <Card.Title>Cama para cachorro</Card.Title>
                <Card.Text>
                <h2>R$ 179,99</h2>
                </Card.Text>
                <Card.Text>
                Personalizada com nome
                </Card.Text>
                <Button variant="success">Comprar</Button>
                </Card.Body>
                </Card><br/>
            </div>
            <Footer/>
        </div>
    )
}

export default Produto2