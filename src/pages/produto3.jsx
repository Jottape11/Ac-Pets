import ColorSchemesExample from './ColorSchemesExample';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from './Footer'

function Produto3(){
    return(
        <div>
            <ColorSchemesExample/><br/>

            <div className="container">
                <Card style={{width: '68rem'}}>
                <Card.Img height={'900px'} variant="top" src="https://images.tcdn.com.br/img/img_prod/573283/brinquedo_para_cachorro_osso_de_pelucia_chalesco_com_som_ao_apertar_537947_2_a17b4ba08728750cc7cc76ec697756ca.jpg"/>
                <Card.Body>
                <Card.Title> Brinquedo para cachorro </Card.Title>
                <Card.Text>
                <h2>R$ 21,30</h2>
                </Card.Text>
                <Card.Text>
                Osso de Pelúcia Chalesco com som ao apertar
                </Card.Text>
                <Button variant="success">Comprar</Button>
                </Card.Body>
                </Card><br/>
            </div>
            <Footer/>
        </div>
    )
}

export default Produto3