import styles from "../styles/Card.module.css";

interface CardProps {
  cardTitle: string;
  cardContent: string;
  cardAuthor: string;
  cardImgSrc: string;
  cardBtnText: string;
  cardLink: string;
}

const Card = ({
  cardTitle,
  cardContent,
  cardAuthor,
  cardImgSrc,
  cardBtnText,
  cardLink,
}: CardProps) => {
  return (
    <div className={styles.cardContainer}>
      <div>
        {cardImgSrc && (
          <img className={styles.cardImage} src={cardImgSrc} alt="Card Image" />
        )}
        <h2 className={styles.cardTitle}>{cardTitle}</h2>
        <p className={styles.cardContent}>By {cardAuthor}</p>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.cardContent}>{cardContent}</p>
      </div>
      {cardBtnText && cardLink && (
        <a className={styles.cardLink} href={cardLink}>
          {cardBtnText}
        </a>
      )}
    </div>
  );
};

export default Card;
