import { useParams } from 'react-router-dom';
import { Progress } from './components/progress/Progress';
import { useServerRequest } from '../../hook/use-server-request';
import styles from './User-page.module.css';

export const User = () => {
  const { id } = useParams();

  const {
    data: user,
    isLoading: userIsLoading,
    error: userError,
  } = useServerRequest('user', id);

  const {
    data: projects,
    isLoading: projectsIsLoading,
    error: projectsError,
  } = useServerRequest('projects');

  const isLoading = userIsLoading || projectsIsLoading;
  const error = userError || projectsError;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>User not found.</div>;
  }

  const {
    firstName,
    lastName,
    age,
    socialMedia,
    role,
    description: descriptionUser,
    // hardSkills,
    imageUrl: imageUrlUser,
  } = user;

  console.log(projects);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img
          src={imageUrlUser}
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
          <p className={styles.bio}>{descriptionUser}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Роль в проекте</h2>
          <p className={styles.role}>{role}</p>
        </section>

        {socialMedia.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Социальные сети</h2>
            <div className={styles.socialLinks}>
              {socialMedia.map((network, index) => (
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
