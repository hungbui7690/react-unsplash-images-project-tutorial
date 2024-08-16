import { useGlobalContext } from './context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext() // 7.

  const handleSubmit = (e) => {
    e.preventDefault()

    // 8.
    const searchValue = e.target.elements.search.value
    if (!searchValue) return
    setSearchTerm(searchValue)
  }

  return (
    <section>
      <h1 className='title'>unsplash images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-input search-input'
          name='search'
          placeholder='Enter search term...'
        />
        <button type='submit' className='btn'>
          search
        </button>
      </form>
    </section>
  )
}
export default SearchForm
