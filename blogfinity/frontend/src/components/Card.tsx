import styles from "../styles/Card.module.css";

interface CardProps {
  cardTitle: string;
  cardContent: string;
  cardImgSrc: string;
  cardBtnText: string;
}

const Card = ({
  cardTitle,
  cardContent,
  cardImgSrc,
  cardBtnText,
}: CardProps) => {
  return (
    <div className={styles.cardContainer}>
      {cardImgSrc && (
        <img className={styles.cardImage} src={cardImgSrc} alt="Card Image" />
      )}
      <h2 className={styles.cardTitle}>{cardTitle}</h2>
      <p className={styles.cardContent}>{cardContent}</p>
      {cardBtnText && (
        <a className={styles.cardLink} href="cardPage">
          {cardBtnText}
        </a>
      )}
    </div>
  );
};

export default Card;
