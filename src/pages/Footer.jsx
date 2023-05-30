import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <img src="/src/assets/pets.jpg" alt="" width={'300px'}/>
            <p>
              Somos a loja ideal para seu Pet.
              Encontre aqui, tudo que seu Pet precisa.
            </p>
          </div>
          <div className="footer-section links">
            <h3>Links</h3>
            <ul>
              <li><a href="/">Início</a></li>
              <li><a href="/produtos">Produtos</a></li>
              <li><a href="/contato">Contato</a></li>
              <li><a href="/sobre">Sobre nós</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contato</h3>
            <p>
              <i className="fa fa-phone"></i> (00) 0000-0000
            </p>
            <p>
              <i className="fa fa-envelope"></i> suporte@Petz.com
            </p>
            <p>
              <i className="fa fa-map-marker"></i> Rua Petz, 321 - São Paulo - SP
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Petz Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;