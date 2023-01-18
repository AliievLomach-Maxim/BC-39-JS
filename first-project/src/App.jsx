import React, { Component } from 'react'
import Counter from './components/Counter'
import Header from './components/Header'
import Modal from './components/Modal'

class App extends Component {
	state = {
		visible: false,
	}
	// showModal = () => {
	// 	this.setState({
	// 		visible: true,
	// 	})
	// }

	// hideModal = () => {
	// 	this.setState({
	// 		visible: false,
	// 	})
	// }

	toggleModal = () => {
		this.setState((prevState) => ({ visible: !prevState.visible }))
	}
	render() {
		return (
			<>
				<Header onShowModal={this.toggleModal} />
				<Counter
					name='Alex'
					// count={0}
				/>
				{this.state.visible && (
					<Modal onClose={this.toggleModal}>Some mess </Modal>
				)}
			</>
		)
	}
}

// const App = () => {
// 	return (
// 		<>
// 			<Header />
// 			<Counter />
// 			{false && <Modal>Some mess</Modal>}
// 		</>
// 	)
// }

export default App
