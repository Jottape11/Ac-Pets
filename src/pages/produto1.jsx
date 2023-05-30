import ColorSchemesExample from './ColorSchemesExample';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from './Footer'

function Produto1(){
    return(
        <div>
            <ColorSchemesExample/><br/>

            <div className="container">
                <Card style={{width: '68rem'}}>
                <Card.Img height={'900px'} variant="top" src="https://tanakao.com.br/media/catalog/product/cache/80cc0569059532456037fee68d18b70f/r/a/ra_o_pedigree_equil_brio_natural_para_c_es_adultos_de_ra_as_pequenas_-_10_1_kg_31013772-3_2_3.jpg"/>
                <Card.Body>
                <Card.Title>Ração Pedigree Equilíbrio Natural</Card.Title>
                <Card.Text>
                <h2>R$: 77,40</h2>
                </Card.Text>
                <Card.Text>
                Para Cães Adultos de Raças Pequenas - 15 Kg
                </Card.Text>
                <Button variant="success">Comprar</Button>
                </Card.Body>
                </Card><br/>
            </div>
            <Footer/>
        </div>
    )
}

export default Produto1