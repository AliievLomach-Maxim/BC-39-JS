import data from '../data.json'

export default function CreateArrEl(props) {
	return data.map((el) => {
		return (
			<div
				key={el.id}
				className='card mx-auto my-2'
				style={{ width: '18rem' }}
			>
				<img
					src={el.url}
					className='card-img-top'
					alt={el.title}
				/>
				<div className='card-body'>
					<h5 className='card-title'>{el.title}</h5>
					<a
						href='http'
						className='btn btn-primary'
					>
						Go somewhere
					</a>
				</div>
			</div>
		)
	})
}
