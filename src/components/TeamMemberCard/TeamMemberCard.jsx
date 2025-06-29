import { Star, StarOff, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import styles from './TeamMemberCard.module.css'

export default function TeamMemberCard({ id, name, description, roles, bottomText, isFavoriteInitial = false }) {
	const [isFavorite, setIsFavorite] = useState(isFavoriteInitial)

	return (
		<div className={styles.card}>
			<div className={styles.top}>
				<div className={styles.avatar}></div>
				<div className={styles.info}>
					<div className={styles.header}>
						<div>
							<h3 className={styles.name}>{name}</h3>
							<p className={styles.description}>{description}</p>
							<div className={styles.roles}>
								{roles.map((role, idx) => (
									<span key={idx} className={styles.roleBadge}>
										{role}
									</span>
								))}
							</div>
						</div>
						<button onClick={() => setIsFavorite(!isFavorite)} className={styles.starBtn}>
							{isFavorite ? (
								<Star className={styles.starIconFilled} />
							) : (
								<StarOff className={styles.starIcon} />
							)}
						</button>
					</div>
				</div>
			</div>
			<div className={styles.bottom}>
				<p className={styles.bottomText}>{bottomText}</p>
				<button className={styles.arrowBtn}>
					<Link to={`/user/${id}`}>
						<ArrowUpRight className={styles.arrowIcon} /></Link>
				</button>
			</div>
		</div>
	)
}