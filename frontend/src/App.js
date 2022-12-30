import Header from './components/header/header.component'
import AddItem from './components/add-item/add-item.component'
import SearchItem from './components/search-item/search-item.component'
import Content from './components/content/content.component'
import Footer from './components/footer/footer.component'
import { useState, useEffect } from 'react'

function App() {
	const API_URL = 'http://localhost:3500/items'

	const [items, setItems] = useState([])
	const [newItem, setNewItem] = useState('')
	const [search, setSearch] = useState('')
	const [fetchError, setFetchError] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchItems = async () => {
			try {
				const response = await fetch(API_URL)
				if (!response.ok) throw Error(`Didn't receive expected data`)
				const listItems = await response.json()
				console.log(listItems)
				setItems(listItems)
				setFetchError(null)
			} catch (error) {
				setFetchError(error.message)
			} finally {
				setIsLoading(false)
			}
		}
		// (async () => await fetchItems())()
		// since it's not returing anything we can just call it
		// We will simulate the delay from a REST API
		setTimeout(() => {
			fetchItems()
		}, 2000)
	}, [])

	const addItem = item => {
		const id = items.length ? items[items.length - 1].id + 1 : 1
		const myNewItem = { id, checked: false, item }
		const listItems = [...items, myNewItem]
		setItems(listItems)
	}
	const handleChange = id => {
		const listItems = items.map(item =>
			item.id === id ? { ...item, checked: !item.checked } : item
		)
		setItems(listItems)
	}
	const handleDelete = id => {
		const listItems = items.filter(item => item.id !== id)
		setItems(listItems)
	}
	const handleSubmit = e => {
		e.preventDefault()
		addItem(newItem)
		setNewItem('')
	}

	return (
		<div className='App'>
			<Header title='Grocery List' />
			<AddItem
				newItem={newItem}
				setNewItem={setNewItem}
				handleSubmit={handleSubmit}
			/>
			<SearchItem
				search={search}
				setSearch={setSearch}
			/>
			<main>
				{isLoading && <p>Loading Items...</p>}
				{fetchError && <p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>}
				{!fetchError && !isLoading && (
					<Content
						items={items.filter(item =>
							item.item.toLowerCase().includes(search.toLocaleLowerCase())
						)}
						handleChange={handleChange}
						handleDelete={handleDelete}
					/>
				)}
			</main>
			<Footer length={items.length} />
		</div>
	)
}

export default App
