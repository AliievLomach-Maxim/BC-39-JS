import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { dellTokenAuth } from '../../api/api'
import { logOutAction } from '../../store/auth/slice'

const Header = () => {
	const navigate = useNavigate()

	const dispatch = useDispatch()

	const profile = useSelector((state) => state.auth.profile)
	const isAuth = useSelector((state) => state.auth.access_token)

	const handleLogOut = () => {
		dispatch(logOutAction())
		dellTokenAuth()
	}

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
						{isAuth && (
							<>
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
							</>
						)}
					</div>
				</div>
				{isAuth && (
					<div className='text-white me-3'>
						{profile.name} {profile.email}
					</div>
				)}
				<div
					className='btn btn-outline-success'
					onClick={() => {
						isAuth ? handleLogOut() : navigate('/login')
					}}
				>
					{isAuth ? 'Logout' : 'Login'}
				</div>
			</div>
		</nav>
	)
}

export default Header
