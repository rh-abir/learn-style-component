import { H2, P, Tag } from "../styles/Elements";
import Container from "../styles/container.style";

const Card = () => {
  return (
    <Container>
      <H2>This is my card</H2>
      <Tag color="green">This is more excluceve </Tag>
      <P size="40px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
        eligendi? Sapiente dolore modi, quo, mollitia ea libero nesciunt, ipsa
        unde earum voluptatum atque laudantium! Facilis aut odio corporis
        voluptas excepturi!
      </P>
      <button>Click Now</button>
    </Container>
  );
};

export default Card;
