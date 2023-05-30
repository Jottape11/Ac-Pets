import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
//import '../App.css'

function Prod() {
  const dados = [
    {
      titulo:'Ração Pedigree Equilíbrio Natural',
      texto:'Para Cães Adultos de Raças Pequenas - 15 Kg',
      preco:'R$77.40',
      img:'https://tanakao.com.br/media/catalog/product/cache/80cc0569059532456037fee68d18b70f/r/a/ra_o_pedigree_equil_brio_natural_para_c_es_adultos_de_ra_as_pequenas_-_10_1_kg_31013772-3_2_3.jpg'
    },
    {
      titulo:'Cama para cachorro',
      texto:'Personalizada com nome',
      preco:'R$179.99',
      img:'https://cdn.awsli.com.br/2500x2500/11/11874/produto/34398731/14eec42be7.jpg'
    },
    {
      titulo:'Brinquedo para cachorro',
      texto:'Osso de Pelúcia Chalesco com som ao apertar',
      preco:'R$21.30',
      img:'https://images.tcdn.com.br/img/img_prod/573283/brinquedo_para_cachorro_osso_de_pelucia_chalesco_com_som_ao_apertar_537947_2_a17b4ba08728750cc7cc76ec697756ca.jpg'
    }
  ]
  return (
    <CardGroup>
      {dados.map(({titulo, texto, preco, img}) =>(
        <Card key={titulo}>
          <Card.Img variant='top' src={img} width={30}height={500}/>
          <Card.Body>
            <Card.Title className='titc'>{titulo}</Card.Title>
            <Card.Text>{texto}</Card.Text>
            <Card.Text className='prec'>{preco}</Card.Text>
            <Button className='bott'>Comprar</Button>
          </Card.Body>
        </Card>
    ))};
    </CardGroup>


    // <CardGroup>
    //   <Card width={18}>
    //     <Card.Img variant="top" 
    //     width={30}
    //     height={500}
    //     src="https://eshop.orange.jo/app-images/thumbs/0004384_samsung-galaxy-z-flip-4-5g.jpeg" />
    //     <Card.Body>
    //       <Card.Title className='titc'>Galaxy Z Flip 3 5G - Lavander </Card.Title>
    //       <Card.Text>
    //       O Galaxy Z Flip 3 é um celular dobrável da Samsung lançado em setembro de 2021. Com ficha técnica recheada, o smartphone traz processador Snapdragon 888, memória RAM de 8 GB e suporte à rede 5G.
    //       </Card.Text>
    //       <Button className='bott'>Visualizar</Button>
    //     </Card.Body>
    //   </Card>

    //   <Card>
    //     <Card.Img variant="top" 
    //     width={30}
    //     height={500}
    //     src="https://imagens.trocafone.com/images/phones/63e16832-galaxy-z-fold4-5g-preto.jpg" />
    //     <Card.Body>
    //       <Card.Title className='titc'>Galaxy Z Fold4 5G - Phanton </Card.Title>
    //       <Card.Text>
    //       O Samsung Galaxy Z Fold 3 é um tablet Android avançado e abrangente em todos os pontos de vista com algumas características excelentes. Tem uma grande tela de 7.6 polegadas com uma resolução de 2208x1768 pixels. {' '}
    //       </Card.Text>
    //       <Button className='bott'>Visualizar</Button>
    //     </Card.Body>
    //   </Card>

    //   <Card>
    //     <Card.Img variant="top" 
    //     width={30}
    //     height={500}
    //     src="https://www.google.com/aclk?sa=l&ai=DChcSEwjupd6G9Jz_AhXR4VwKHSffDQgYABADGgJjZQ&sig=AOD64_0_waj09wbQtqbsyEdpPmFIU8Tcig&adurl&ctype=5&ved=2ahUKEwixotWG9Jz_AhXmtJUCHZ9KA-UQvhd6BAgBEFI" />
    //     <Card.Body> 
    //       <Card.Title  className='titc'>Galaxy S23 5G - White </Card.Title>
    //       <Card.Text>
    //       O Samsung Galaxy S23 é um smartphone Android com características inovadoras que o tornam uma excelente opção para qualquer tipo de utilização, representando um dos melhores dispositivos móveis já feitos.
    //       </Card.Text>
    //       <Button className='bott'>Visualizar</Button>
    //     </Card.Body>
    //   </Card>

    // </CardGroup>
  );
}

export default Prod;