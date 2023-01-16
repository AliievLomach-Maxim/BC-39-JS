import CreateArrEl from './components/CreateArrEl'
import Component from './components/Component'

const App = () => {
	return (
		<>
			<div className='header'>
				<h1>Lorem</h1>
			</div>
			<div className='content'>
				<CreateArrEl />
				<Component />
			</div>
			<div className='footer'>
				<p>footer</p>
			</div>
		</>
	)
}

export default App
