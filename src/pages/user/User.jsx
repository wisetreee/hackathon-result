// import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Progress from './components/progress/Progress';
import styles from './User.module.css';
export const User = ({ person }) => {
  // const { id } = useParams();
  const {
    firstName = 'Владимир',
    lastName = 'Евстафьев',
    age = '32',
    bio = 'Красавчик, красавчик, красавчик, красавчик, красавчик, красавчик, красавчик, красавчик, красавчик. ',
    photo = 'https://basket-15.wbbasket.ru/vol2391/part239197/239197482/images/big/1.webp',
    socialNetworks = [
      { name: 'Google', url: 'https://www.google.com' },
      { name: 'Mail', url: 'https://www.mail.ru' },
    ],
    projectRole = 'Самая важная, без меня все зачахнет',
  } = person || {};
  // должно браться из бд по id из params

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img
          src={photo}
          alt={`${firstName} ${lastName}`}
          className={styles.photo}
        />
        <div className={styles.nameContainer}>
          <h1 className={styles.name}>
            {firstName} {lastName}
          </h1>
          <p className={styles.age}>Возраст: {age}</p>
        </div>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>О себе</h2>
          <p className={styles.bio}>{bio}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Роль в проекте</h2>
          <p className={styles.role}>{projectRole}</p>
        </section>

        {socialNetworks.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Социальные сети</h2>
            <div className={styles.socialLinks}>
              {socialNetworks.map((network, index) => (
                <a
                  key={index}
                  href={network.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  {network.name}
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
      <div className={styles.progress}>
        <Progress
          // percent={75}
          // label="HTML"
          // color="#e34c26"
          // type="bar"
          percent={90}
          label="JavaScript"
          color="#a0db4f"
          type="circle"
          size={120}
          strokeWidth={8}
        />
        <Progress
          // percent={75}
          // label="JavaScript"
          // color="#e34c26"
          // type="bar"
          percent={90}
          label="JavaScript"
          color="#f0db4f"
          type="circle"
          size={120}
          strokeWidth={8}
        />
        <Progress
          // percent={75}
          // label="CSS"
          // color="#e34c26"
          // type="bar"
          percent={90}
          label="CSS"
          color="#000"
          type="circle"
          size={120}
          strokeWidth={8}
        />
      </div>
    </div>
  );
};

User.propTypes = {
  person: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    bio: PropTypes.string,
    photo: PropTypes.string,
    socialNetworks: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ),
    projectRole: PropTypes.string,
  }),
};
