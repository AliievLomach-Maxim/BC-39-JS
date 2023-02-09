import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { dellTokenAuth, setTokenAuth } from '../../api/api'
import { logOutAction } from '../../store/auth/slice'
import { profileThunk } from '../../store/auth/thunk'

const Header = () => {
	const navigate = useNavigate()

	const dispatch = useDispatch()

	const profile = useSelector((state) => state.auth.profile)
	const isAuth = useSelector((state) => state.auth.access_token)

	const handleLogOut = () => {
		dispatch(logOutAction())
		dellTokenAuth()
	}

	useEffect(() => {
		isAuth && setTokenAuth(`Bearer ${isAuth}`)
		!profile.name && dispatch(profileThunk())
	}, [dispatch, isAuth, profile.name])

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
					<div className='text-white'>
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
