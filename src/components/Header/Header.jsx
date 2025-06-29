import { useContext } from 'react'
import styles from './header.module.css'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext/ThemeContext'
export const Header = () => {

	const { theme, toggleTheme } = useContext(ThemeContext)

	return (
		<header className={styles.header}>
			<div className={styles.headerItem}>
				<Link
					to={'/'}
					className={styles.itemLogo}
				></Link>
				<p className={styles.itemTitle}>Name team</p>
			</div>
			<div className={styles.headerMenu}>
				<ul className={styles.menuItems}>
					<li className={styles.menuItem}>
						<p className={styles.itemLink}>Услуги</p>
					</li>
					<li className={styles.menuItem}>
						<p className={styles.itemLink}>Избранные</p>
					</li>
				</ul>
				<div className={styles.headerChangeTheme}>
					<div
						className={`${styles.changeThemeCheckBox} ${theme === 'dark' ? styles.checkBoxActive : ''
							}`}
						onClick={toggleTheme}
					>
						<div
							className={`${styles.changeThemeCircle} ${theme === 'dark' ? styles.circleActive : ''
								}`}
						></div>
					</div>
					<p className={styles.changeThemText}>Темная тема</p>
				</div>
			</div>
		</header>
	)
}
