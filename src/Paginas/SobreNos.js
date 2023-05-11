import React from 'react';
import '../Styles/sobre-nos.css';
import { Link } from 'react-router-dom';

function SobreNos() {
  return (
    <div>
      <Link to="/Home">Voltar</Link>
      <h1>Sobre Nós</h1>
      <p>Aqui no nosso cemitério de animais, nós entendemos que os animais são membros da família e merecem ser tratados com o mesmo respeito e dignidade que qualquer outro ente querido. É por isso que criamos este espaço dedicado a homenagear e lembrar aqueles que partem.</p>
      <p>Nossa empresa foi fundada em 2023 por um grupo de universitários que compartilhavam um amor profundo por animais(e ramones) e um desejo de criar um lugar onde os donos pudessem honrar a memória de seus animais de estimação. A partir daí, nosso cemitério cresceu e evoluiu para atender às necessidades de nossos clientes, oferecendo serviços de cremação, sepultamento, memorialização e muito mais.</p>
      <p>Estamos comprometidos em fornecer um ambiente tranquilo e sereno para homenagear a vida de seus pets. Nossa equipe de funcionários é apaixonada por ajudar nossos clientes a encontrar o caminho certo para lembrar e honrar seus pets, e estamos sempre disponíveis para ajudar em qualquer necessidade que possam ter.</p>
      <p>Se você está procurando um lugar para homenagear a vida do seu pet, esperamos que você considere nossa empresa. Estamos honrados em poder cuidar de você e seu pets em um dos momentos mais difíceis da vida.</p>
    </div>
  );
}

export default SobreNos;