import styles from './main.module.css'
import { NumberWithStatus } from '../NumberWithStatus/NumberWithStatus'
import { useEffect, useState } from 'react'
import TeamMemberCard from '../TeamMemberCard/TeamMemberCard'
// import { useState } from 'react'
export const Main = () => {
	const [team, setTeam] = useState([
		{
			id: 1,
			name: "Имя Фамилия",
			description: "Описание",
			roles: ['Роль в команде', 'Роль в команде'],
			bottomText: "Нижний текст",
			isFavoriteInitial: true
		},
		{
			id: 2,
			name: "Имя Фамилия",
			description: "Описание",
			roles: ['Роль в команде', 'Роль в команде'],
			bottomText: "Нижний текст",
			isFavoriteInitial: true
		}, {
			id: 3,
			name: "Имя Фамилия",
			description: "Описание",
			roles: ['Роль в команде', 'Роль в команде'],
			bottomText: "Нижний текст",
			isFavoriteInitial: true
		}, {
			id: 4,
			name: "Имя Фамилия",
			description: "Описание",
			roles: ['Роль в команде', 'Роль в команде'],
			bottomText: "Нижний текст",
			isFavoriteInitial: true
		}
	])
	// useEffect(() => {
	// 	fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => setTeam(data))
	// }, [team])
	return (
		<main className={styles.main}>
			<div>
				<h1>Продающий слоган</h1>
				<p>Не менее продающее описание</p>
			</div>
			<div className={styles.mainItems}>
				<NumberWithStatus value={4}>Человек в команде</NumberWithStatus>
				<NumberWithStatus value={4}>Человек в команде</NumberWithStatus>

			</div>
			<div>
				<div className={styles.mainTeam}>
					<h1 className={styles.mainTeamTitle}>Состав команды </h1>
					<div className={styles.grid}>
						{team.map(({ id, name, description, roles, bottomText, isFavoriteInitial }) => {
							return <TeamMemberCard
								key={id}
								id={id}
								name={name}
								description={description}
								roles={roles}
								bottomText={bottomText}
								isFavoriteInitial={isFavoriteInitial}
							/>
						})}
					</div>

				</div>
			</div>
		</main>
	)
}
