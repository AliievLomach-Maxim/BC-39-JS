import React from 'react'

const Header = ({ onShowModalLogin }) => {
	return (
		<nav className='navbar bg-dark'>
			<div className='container-fluid'>
				<span className='navbar-brand text-white mb-0 h1'>Navbar</span>

				<button
					className='btn btn-outline-success'
					onClick={onShowModalLogin}
				>
					Login
				</button>
			</div>
		</nav>
	)
}

export default Header
