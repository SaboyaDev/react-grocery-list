import Header from './components/header/header.component'
import AddItem from './components/add-item/add-item.component'
import SearchItem from './components/search-item/search-item.component'
import Content from './components/content/content.component'
import Footer from './components/footer/footer.component'
import { useState, useEffect } from 'react'

function App() {
  // Get Local Storage List
  const getShoppingList = localStorage.getItem('shopping-list')
	// State
	const [items, setItems] = useState(JSON.parse(getShoppingList) || [])
	const [newItem, setNewItem] = useState('')
	const [search, setSearch] = useState('')

  useEffect(() => {
    localStorage.setItem('shopping-list', JSON.stringify(items))
  }, [items])

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
			<Content
				items={items.filter(item =>
					item.item.toLowerCase().includes(search.toLocaleLowerCase())
				)}
				handleChange={handleChange}
				handleDelete={handleDelete}
			/>
			<Footer length={items.length} />
		</div>
	)
}

export default App
