import { FaTrashAlt } from 'react-icons/fa'
import './line-list.styles.css'

const LineList = ({ item, handleChange, handleDelete }) => {
	return (
		<li className='item'>
			<input
				id='item-check'
				type='checkbox'
				onChange={() => handleChange(item.id)}
				checked={item.checked}
			/>
			<label
				className='label'
				htmlFor='item-check'
				style={item.checked ? { textDecoration: 'line-through' } : null}
				onDoubleClick={() => handleChange(item.id)}
			>
				{item.item}
			</label>
			<FaTrashAlt
				onClick={() => handleDelete(item.id)}
				role='button'
				tabIndex='0'
				aria-label={`Delete ${item.item}`}
			/>
		</li>
	)
}
export default LineList
