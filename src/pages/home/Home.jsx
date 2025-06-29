import styled from './home.module.css'
import { Header } from '../../components/Header/Header'
import { Main } from '../../components/Main/Main'
export const Home = () => {
	return (
		<div
			style={{
				backgroundColor: '#F5F5F5',
				height: '100%',
			}}
		>
			<div className={styled.wrapper}>
				<Header />
				<Main />
			</div>
		</div>
	)
}
