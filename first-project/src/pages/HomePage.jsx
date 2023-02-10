import { CSSTransition } from 'react-transition-group'
import CardTimer from '../components/Home/CardTimer/CardTimer'
// import Counter from '../components/Home/Counter/Counter'
// import Step from '../components/Home/Counter/Step'
import Posts from '../components/Home/Posts/Posts'
import './style.css'
const HomePage = () => {
	return (
		<CSSTransition in appear timeout={800}>
			<div className='home-page'>
				<CardTimer />
				{/* <Step /> */}
				{/* <Counter /> */}
				<Posts />
			</div>
		</CSSTransition>
	)
}

export default HomePage
