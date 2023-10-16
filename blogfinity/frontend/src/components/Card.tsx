interface CardProps {
  cardTitle: string;
  cardContent: string;
}

const Card = ({ cardTitle, cardContent }: CardProps) => {
  return (
    <div className="Card">
      <img src="https://picsum.photos/300/200" alt="Card Image" />
      <h1>{cardTitle}</h1>
      <p>{cardContent}</p>
      <a href="cardPage">Learn More</a>
    </div>
  );
};

export default Card;
