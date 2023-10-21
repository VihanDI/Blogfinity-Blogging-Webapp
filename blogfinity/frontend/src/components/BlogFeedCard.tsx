import styles from "../styles/BlogFeedCard.module.css";

interface BlogFeedCardProps {
  cardTitle: string;
  cardAuthor: string;
  cardImgSrc: string;
  cardBtnText: string;
  cardLink: string;
}

const BlogFeedCard = ({
  cardTitle,
  cardAuthor,
  cardImgSrc,
  cardBtnText,
  cardLink,
}: BlogFeedCardProps) => {
  return (
    <div className={styles.cardContainer}>
      <div>
        {cardImgSrc && (
          <img className={styles.cardImage} src={cardImgSrc} alt="Card Image" />
        )}
        <h2 className={styles.cardTitle}>{cardTitle}</h2>
        <p className={styles.cardContent}>By {cardAuthor}</p>
      </div>
      {cardBtnText && cardLink && (
        <a className={styles.cardLink} href={cardLink}>
          {cardBtnText}
        </a>
      )}
    </div>
  );
};

export default BlogFeedCard;
