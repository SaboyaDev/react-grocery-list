import LineList from '../line-list/line-list.component'
import './item-list.styles.css'

const ItemList = ({ items, handleChange, handleDelete }) => {
	return (
		<ul>
			{items.map(item => (
				<LineList
					item={item}
					key={item.id}
					handleChange={handleChange}
					handleDelete={handleDelete}
				/>
			))}
		</ul>
	)
}
export default ItemList
