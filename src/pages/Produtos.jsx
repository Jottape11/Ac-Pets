import ColorSchemesExample from './ColorSchemesExample';
import Cards from './Cards';
import Footer from './Footer';


function Produto(){
    return(
        <div>
            <ColorSchemesExample/>

            <div className="container">
            <h2>Produtos</h2>

            <Cards/><br/>
            </div>
            <Footer/>
        </div>
    )
}

export default Produto