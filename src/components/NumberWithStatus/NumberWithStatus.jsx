import styles from './number-with-status.module.css'
export const NumberWithStatus = ({ children, value }) => {
	return (
		<div className={styles.mainItem}>
			<div className={styles.mainItemIcon}>
				<p>{value}</p>
			</div>
			<p className={styles.mainItemTitle}>{children}</p>
		</div>
	)

}