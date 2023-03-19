type AvatarProps = {
  image: string;
};
import styles from '../../styles/Avatar.module.css';

export const Avatar = ({ image }: AvatarProps) => (
  <div className={styles.avatar} aria-hidden="true">
    <img src={image} className={styles.avatarImage} />
  </div>
);
