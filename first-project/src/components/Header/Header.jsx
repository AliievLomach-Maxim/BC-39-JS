import React from 'react'

const Header = ({ onShowModal }) => {
	return (
		<nav className='navbar bg-body-tertiary'>
			<div className='container-fluid'>
				<span className='navbar-brand mb-0 h1'>Navbar</span>
				<button
					className='btn btn-outline-success'
					onClick={onShowModal}
				>
					Search
				</button>
			</div>
		</nav>
	)
}

export default Header
