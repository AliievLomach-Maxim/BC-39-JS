import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAlertContext } from '../../Context/AlertContext'

const Header = () => {
	const { isAuth, logout } = useAlertContext()
	const navigate = useNavigate()
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
				<div
					className='btn btn-outline-success'
					onClick={() => {
						isAuth ? logout() : navigate('/login')
					}}
				>
					{isAuth ? 'Logout' : 'Login'}
				</div>
			</div>
		</nav>
	)
}

export default Header
