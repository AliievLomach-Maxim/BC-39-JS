import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ onShowModalLogin }) => {
	return (
		<nav className='navbar bg-dark navbar-expand-lg'>
			<div className='container-fluid'>
				<span className='navbar-brand text-white mb-0 h1'>Navbar</span>
				<div
					className='collapse navbar-collapse'
					id='navbarNavAltMarkup'
				>
					<div className='navbar-nav'>
						<Link
							className='nav-link text-white '
							aria-current='page'
							to='/'
						>
							Home
						</Link>
						<Link
							className='nav-link text-white'
							to='/news'
						>
							News
						</Link>
						<Link
							className='nav-link text-white'
							to='/users'
						>
							Users
						</Link>
					</div>
				</div>
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
